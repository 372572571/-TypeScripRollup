// 数据模型每个属性的订阅

import { Watcher } from "./Watcher";
export interface IArrArgs {
    receiver: any;
    property: string;
    value: any;
    path: string;
}

export class Subscribe {
    // 当前观察者
    public static curWatcher: Watcher | null = null;

    // 订阅中心
    // 该对象收集到的需要通知 path 及对应 watcher（节点）列表
    public center: Record<string, Set<Watcher>> = {};

    /**
     * 收集依赖
     *
     * @param {string} path
     * @memberof Subscribe
     */
    public collectSubscribe(path: string): void {
        if (!this.center[path]) {
            this.center[path] = new Set();
        }
        Subscribe.curWatcher!.addDeps(path, this);
    }

    /**
     * 收集观察者
     *
     * @param {string} path
     * @param {Watcher} watch
     * @memberof Subscribe
     */
    public collectWatcher(path: string, watch: Watcher): void {
        if (!this.center[path]) {
            this.center[path] = new Set();
        }
        this.center[path].add(watch);
    }

    /**
     * 复制订阅列表到数组的新子元素里
     *
     * @param {string} arrayPath [数组path]
     * @param {string} path [新子元素path]
     * @memberof Dep
     */
    public copyDep(arrayPath: string, path: string): void {
        const arrayDep = this.center[`${arrayPath}____proxy`];
        if (arrayDep) {
            arrayDep.forEach((item: Watcher): void => {
                this.collectWatcher(path, item);
            });
        }
    }

    /**
     * 移除订阅者
     *
     * @param {String} path
     * @param {WatcherClass} dep
     * @memberof Dep
     */
    public removeDep(path: string, dep: Watcher): void {
        this.center[path].delete(dep);
    }

    /**
     * 通知订阅者（之前）
     *
     * @param {String} key
     * @return {void}
     * @memberof Dep
     */
    public beforeNotfiy(key: string): void {
        if (!this.center[key]) {
            return;
        }
        this.center[key].forEach((item: Watcher): void => {
            item.beforeUpdate();
        });
    }

    /**
     * 通知订阅者
     *
     * @param {string} key
     * @param {ArrArgs} arrArgs
     * @return {void}
     * @memberof Dep
     */
    public notfiy(key: string, arrArgs: IArrArgs): void {
        if (!this.center[key]) {
            return;
        }
        // console.log(this.center, key);
        this.center[key].forEach((item: Watcher): void => {
            item.update(arrArgs);
        });
    }
}
