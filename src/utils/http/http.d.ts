declare interface IResponse<T> {
    // 请求返回数据
    Status: EResponseStatusCode;
    Data?: T;
    Interface?: string; // 接口名称
}

/**
 * 依赖接口
 *
 * @interface IOCHttp
 */
declare interface IOCHttp {
    timeout: number; // 超时时间
    baseURL: string; // 基础地址
    headers: { [key: string]: string }; // 头信息
    post: <IResponse>(url: string, params?: { [key: string]: any }) => Promise<IResponse>;
    get: <IResponse>(url: string, params?: {}) => Promise<IResponse>;
}
