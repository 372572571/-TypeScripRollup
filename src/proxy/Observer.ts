import { isArray, isObject } from "../lib/utils/utils";
import { Subscribe } from "./Subscribe";

/** 分隔符 */
export const OBSERVER_SEPARATOR = ".";

// export const subscribes = [];

export class Observer {
    /**
     * 原始数据结构
     *
     * @protected
     * @type {*}
     * @memberof Observer
     */
    protected data: any;

    /**
     * Creates an instance of Observer.
     *
     * @param {*} data
     * @param {string} path
     * @memberof Observer
     */
    constructor(data: any, path: string) {
        // 已经是被观察对象
        if (data.__proxy === 1) {
            this.data = data;
            return;
        }
        // 如果传入的是对象或者数组递归创建被观察对象
        if (isObject(data) || isArray(data)) {
            this.data = this._observe(data, path);
            return;
        }
        // 通数据直接被赋值
        this.data = data;
    }

    /**
     * 获取值
     *
     * @return {any}
     * @memberof Observer
     */
    public getData<T>(): T {
        return this.data;
    }

    private _observe(data: Record<string, any>, path: string): ProxyConstructor {
        const subscribe: Subscribe = new Subscribe(); // 订阅中心
        // subscribes.push(subscribe);
        const keys: string[] = Object.keys.call(null, data);
        // 对象子数据处理
        keys.forEach((key: string): void => {
            const value: any = data[key];
            /** 生成层级路径 */
            data[key] = new Observer(value, `${path}${OBSERVER_SEPARATOR}${key}`).getData();
        });

        // 代理监听数据改变通过 subscribe 订阅中心通知其他订阅者
        // (target, property, value, receiver)
        const handler: ProxyHandler<any> = {
            get(target: any, property: string | number | symbol): any {
                if (!target.hasOwnProperty(property) && typeof property === "symbol") {
                    return Reflect.get(target, property);
                }

                // 订阅中心开始收集watcher依赖 如果当前观察员存在
                if (Subscribe.curWatcher) {
                    // 依赖收集 一个对象或者是一个对象属性
                    subscribe.collectSubscribe(`${path}____proxy`); // 属性父级监听
                    subscribe.collectSubscribe(`${path}${OBSERVER_SEPARATOR}${String(property)}`); // 属性监听
                }
                // 获取一次触发ProxyHandler
                return Reflect.get(target, property);
            },
            set(target: any, property: string, value: any, receiver: any): boolean {
                // 如果数值相同则直接返回，不会通知到订阅中心
                if (target[property] === value) {
                    return true;
                }

                // 声明参数
                let arrArgs: ArrArgs = {
                    receiver: null,
                    property,
                    value: null,
                    path,
                };

                // 目标是数组处理
                if (isArray(target)) {
                    arrArgs = { receiver, property, value, path };
                }
                // 如果元素是新加入的，就把所有订阅分发给新元素
                if (target[property] === undefined) {
                    subscribe.copyDep(`${path}`, `${path}${OBSERVER_SEPARATOR}${property}`);
                }
                // 通知保存旧数据
                subscribe.beforeNotfiy(`${path}${OBSERVER_SEPARATOR}${property}`);

                // 重新包装数据
                target[property] = new Observer(value, `${path}${OBSERVER_SEPARATOR}${property}`).getData();

                /** 新数据赋值 */
                Reflect.set(target, property, target[property]);

                // 通知更新数据
                subscribe.notfiy(`${path}${OBSERVER_SEPARATOR}${property}`, arrArgs);

                return true;
            },
        };
        // 给是对象的数据绑定 proxy
        const proxy: ProxyConstructor = new Proxy(data, handler);
        // 添加 proxy 对象标志属性 __proxy
        Reflect.defineProperty(data, "__proxy", {
            value: 1,
            writable: false,
            enumerable: false,
            configurable: false,
        });
        return proxy;
    }
}
