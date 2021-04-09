export const MODEL_SEPARATOR = "#";
export const PRESENTER_SEPARATOR = "$";

type FunDictionary<U, T> = (...args: U[]) => T;
/**
 * 是否为数组
 * @param {any} value
 * @return {Boolean}
 */
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}
/**
 * 是否是布尔值
 *
 * @export
 * @param {any} value
 * @return {boolean}
 */
export function isBoolean(value: any): value is boolean {
    return Reflect.apply(Object.prototype.toString, value, []) === "[object Boolean]";
}
/**
 * 是否为对象
 * @param {any} value
 * @return {Boolean}
 */
export function isObject(value: any): value is Record<string, any> {
    return Reflect.apply(Object.prototype.toString, value, []) === "[object Object]";
}
/**
 * 是否为Set类型
 * @param {any} value
 * @return {Boolean}
 */
export function isSet(value: any): value is Set<any> {
    return Reflect.apply(Object.prototype.toString, value, []) === "[object Set]";
}
/**
 * 是否为函数
 * @param {any} value
 * @return {Boolean}
 */
export function isFunction(value: any): value is FunDictionary<any, any> {
    return Reflect.apply(Object.prototype.toString, value, []) === "[object Function]";
}
/**
 * 简易深拷贝
 *
 * @param {any} source
 * @return {Object}
 */
export function cloneDeep<T>(source: T): T {
    if (!(isObject(source) || isArray(source) || isSet(source))) {
        return source;
    }

    const target = isArray(source) ? [] : isObject(source) ? {} : new Set();

    if (isSet(source)) {
        source.forEach((val) => {
            (target as Set<any>).add(cloneDeep(val));
        });
    } else {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (isObject(source[key]) || isArray(source[key])) {
                    (target as T)[key] = cloneDeep(source[key]);
                } else {
                    (target as T)[key] = source[key];
                }
            }
        }
    }

    return target as T;
}

/** 获取mpv 中 mp的路径过滤规则 */
export function separatorRegExp(path: string): string {
    let res: string[] = [];
    // MODEL
    if (path.includes(MODEL_SEPARATOR)) {
        res = path.split(/[\#\]\[]/g);
        return res[res.length - 1];
    }
    // PRESENTER
    if (path.includes(PRESENTER_SEPARATOR)) {
        res = path.split(/[\$\]\[]/g);
        return res[res.length - 1];
    }
    return path;
}
