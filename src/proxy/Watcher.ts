
import { cloneDeep } from "../core/lib/utils/utils";
import { Subscribe } from "./Subscribe";

interface IDepWatcher {
    /**
     * 监听数据的订阅中心列表
     */
    depCenterList: Set<any>;
    /**
     *  路径监听map
     */
    depMap: Record<string, Set<any>>; // (string __proxy _prototype)
}

interface ITargetDictionary extends Record<string, any> {
    __proxy: 1;
}

export class Watcher {
    /**
     * 通过getter获取到的最新值
     *
     * @type {any}
     * @memberof Watcher
     */
    public value: any = null;

    protected presenter: IPresenter;

    /**
     * 绑定监听的数据
     */
    private _bindData: any = null;

    /**
     * 旧值
     *
     * @private
     * @type {*}
     * @memberof Watcher
     */
    private _oldVal: any = null;

    /**
     * 当前依赖 _deps 列表
     *
     * @private
     * @type {array}
     * @memberof path[]
     */
    private _deps: IDepWatcher = {
        depCenterList: new Set(),
        depMap: {},
    };

    /**
     * 用来存放新的依赖
     *
     * @private
     * @type {array}
     * @memberof path[]
     */
    private _newDeps: IDepWatcher = {
        depCenterList: new Set(),
        depMap: {},
    };

    /**
     * Creates an instance of Watcher.
     * @memberof Watcher
     */
    public constructor(bind: any, p: IPresenter) {
        this.presenter = p;
        this._bindData = bind;
        this.value = this.get();
    }

    /**
     * 添加依赖
     * @param {string} path [model路径]
     * @param {any} dep [依赖]
     */
    public addDeps(path: string, dep: Subscribe): void {
        this._newDeps.depCenterList.add(dep);

        if (!this._newDeps.depMap[path]) {
            this._newDeps.depMap[path] = new Set();
        }
        this._newDeps.depMap[path].add(dep.center);
        dep.collectWatcher(path, this);
    }

    /**
     * 1.获取最新值
     * 2.把watcher与值绑定,通知到每一个相关属性，加入到对应的订阅列表
     * @return {any}
     * @memberof Watcher
     */
    public get(): any {
        Subscribe.curWatcher = this; // 让这个观察者成为当前观察者

        // 深度订阅，将目标属性值的订阅列表递归分发给所有子元素
        const value = this._bindData;

        if (value) {
            this._depthSubscribe(value); // 触发数据的proxy get 属性 以其能够让当前观察者订阅这个数据对象的所有数值
        }

        /** 移除当前依赖收集者 */
        Subscribe.curWatcher = null;

        // 清除无用依赖
        this.removeDeps();

        this._deps = cloneDeep(this._newDeps);
        this._newDeps = {
            depCenterList: new Set(),
            depMap: {},
        };
        return value;
    }
    /**
     * 更新前执行的函数（深拷贝得到原始值）
     *
     * @memberof Watcher
     */
    public beforeUpdate(): void {
        this._oldVal = cloneDeep(this.value);
    }

    /**
     * 更新方法
     *
     * @param {ArrArgs} [arrArgs]
     * @memberof Watcher
     */
    public update(arrArgs: ArrArgs): void {
        // 添加订阅列表
        const newVal = (this.value = this.get());

        // 实现通知刷新 view
        this.presenter.update({ newVal, oldVal: this._oldVal, arrArgs }, this.presenter);
    }

    /**
     * 设置双向绑定值
     *  _bindData path
     * @param {any} value
     * @memberof Watcher
     */
    public set(path: string, value: any): void {
        const target = this._bindData;
        const pathList: string[] = path.split(/[\.\]\[]/g);
        const key: string = pathList.pop()!; // 取出最后一个key
        const data = this._getDeepValue(target, pathList); // 获取到路径的引用的对象
        // 赋值
        data[key] = value;
    }

    /**
     * 移除无用的依赖
     *
     * @memberof Watcher
     */
    public removeDeps(): void {
        const paths: string[] = Object.keys(this._deps.depMap);
        const newPaths: string[] = Object.keys(this._newDeps.depMap);
        const depCenterList: Set<Subscribe> = this._deps.depCenterList;
        /** 判断路径是否引用,如果没有应用的路径及时归入 remove path */
        const removePath: string[] = paths.filter((i) => !newPaths.includes(i));

        removePath.forEach((path) => {
            depCenterList.forEach((sub) => {
                const keys = Object.keys(sub.center);
                const values = Object.values(sub.center);
                if (keys.includes(path)) {
                    sub.removeDep(path, this); // 删除订阅中心的路径监听
                    if (values.every((i: Set<Watcher>) => i.size === 0)) {
                        depCenterList.delete(sub); // 从监听订阅列表中移除此订阅
                    }
                }
            });
        });
    }

    /**
     *  移除当前所有的依赖并清空数据
     */
    public clean() {
        const paths: string[] = Object.keys(this._deps.depMap);
        const depCenterList: Set<Subscribe> = this._deps.depCenterList;
        paths.forEach((path) => {
            depCenterList.forEach((sub) => {
                const keys = Object.keys(sub.center);
                if (keys.includes(path)) {
                    sub.removeDep(path, this); // 从订阅中依次删除依赖
                }
            });
        });
        this._deps = {
            depCenterList: new Set(),
            depMap: {},
        };
        this._bindData = null;
        this._oldVal = null;
        this.value = null;
    }

    /**
     * 深度递归订阅遍历
     *
     * @private
     * @param {any} target
     * @return {void}
     * @memberof Watcher
     */
    private _depthSubscribe<T extends ITargetDictionary>(target: T): void {
        if (target.__proxy !== 1) {
            return;
        }
        const keys: string[] = Object.getOwnPropertyNames(target);

        for (let i = 0; i < keys.length; i++) {
            this._depthSubscribe(target[keys[i]]); // 触发proxy get事件
        }
    }

    /**
     * 根据paths 路径深度取target值
     *
     * @param target
     * @param paths
     * @returns
     */
    private _getDeepValue<T extends Record<string, any>>(target: T, paths: string[]): T {
        while (paths.length) {
            target = target[paths.shift()!];
        }
        return target;
    }
}
