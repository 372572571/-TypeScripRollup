export enum HTTP_METHOD {
    POST = "POST",
    GET = "GET",
}

export enum EResponseStatusCode { // 返回状态对照枚举
    TIME_OUT = "ResponseStatus:TIME_OUT", // 超时
    ERROR_DATA = "ResponseStatus:ERROR_DATA", // 错误的数据
    ERROR_OTHER = "ResponseStatus:ERROR_OTHER", // 其他错误
    SUCCESS = "ResponseStatus:SUCCESS", // 成功
    STACK = "stack", // 一般为创建请求对象时失败内部错误
}

/**
 * http依赖
 *
 * @class HttpRely http 依赖
 * @implements {IOCHttp}
 */
class HttpRely implements IOCHttp {
    public static getXMLHttpRequest: any = () => {
        return new XMLHttpRequest();
    };

    public static initialization(getXMLHttpRequest: () => IOCHttp) {
        HttpRely.getXMLHttpRequest = getXMLHttpRequest as any;
    }
    public timeout: number = 10000; // 超时时间
    public baseURL: string; // 基础地址
    public headers: { [key: string]: string } = {};

    constructor(baseUrl: string, headers?: { [key: string]: string }, timeout?: number) {
        for (const i in headers) {
            this.headers[i] = headers[i];
        }
        if (timeout) {
            this.timeout = timeout;
        }
        this.baseURL = baseUrl; // 基础url
    }

    public post<IResponse>(url: string, params?: { [key: string]: any }): Promise<IResponse> {
        if (this.baseURL) {
            url = `${this.baseURL}${url}`;
        }
        return this.send(url, HTTP_METHOD.POST, params);
    }

    public get<IResponse>(url: string, data: {}): Promise<IResponse> {
        if (this.baseURL) {
            url = `${this.baseURL}${url}`;
        }
        return this.send(url, HTTP_METHOD.GET, data);
    }

    /**
     * 发送
     *
     * @private
     * @template T 类型
     * @param {string} url 请求的url
     * @param {HTTP_METHOD} method 请求的类型
     * @param {{ [key: string]: any }} params 发送的请求参数
     * @returns {Promise<T>} 返回promise
     * @memberof HttpRely
     */
    private send<T>(url: string, method: HTTP_METHOD, params?: { [key: string]: any }): Promise<T> {
        console.log("jsw 接口调试", url, method);
        return new Promise((resolve, reject) => {
            // 创建对象
            const xhr = HttpRely.getXMLHttpRequest();
            // 请求超时时间
            xhr.timeout = this.timeout;
            // 设置状态回调
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 400) {
                        let response: any = xhr.responseText;
                        try {
                            response = JSON.parse(response);
                            const res = { Status: EResponseStatusCode.SUCCESS, Data: response };
                            resolve(res as any); // IResponse
                        } catch (error) {
                            // 可能数据是空的json解析报错
                            reject({ Status: EResponseStatusCode.ERROR_DATA, Data: error });
                        }
                    } else {
                        const response: IResponse<any> = {
                            Status: xhr.responseText ? EResponseStatusCode.ERROR_OTHER : EResponseStatusCode.TIME_OUT,
                            Data: xhr.responseText,
                        };
                        reject(response);
                    }
                }
            };
            xhr.onerror = (err) => {
                reject(err);
            };
            xhr.ontimeout = (err) => {
                reject(err);
            };
            // xhr.setRequestHeader('Host', this.baseURL)
            switch (method) {
                // 设置请求信息
                case HTTP_METHOD.POST:
                    xhr.open(method, url, true);
                    this.setHeaders(xhr);
                    xhr.send(JSON.stringify(params));
                    break;
                case HTTP_METHOD.GET:
                    const temp: string = this.getParams(params);
                    xhr.open(method, url + temp, true);
                    this.setHeaders(xhr);
                    xhr.send();
                    break;
                default:
                    throw new Error(" Request type error .");
            }
        });
    }

    /**
     * 把key val数据解析成 url参数
     *
     * @private
     * @param {{ [key: string]: any }} params 需要解析的对象
     * @returns {string}
     * @memberof HttpRely
     */
    private getParams(params: { [key: string]: any }): string {
        if (!params) {
            return "";
        }
        let temp: string = "?";
        for (const index in params) {
            if (temp === "?") {
                temp = `${temp}${index}=${params[index]}`;
            } else {
                temp = `${temp}&${index}=${params[index]}`;
            }
        }
        return temp;
    }

    /**
     * 设置头信息
     *
     * @private
     * @param {XMLHttpRequest} xhr
     * @memberof HttpRely
     */
    private setHeaders(xhr: XMLHttpRequest) {
        for (const index in this.headers) {
            console.log(index, this.headers[index]);
            try {
                xhr.setRequestHeader(index, this.headers[index]);
            } catch (error) {
                console.log("jsw", error); // 屏蔽警告
            }
        }
    }
}

/**
 * http 请求实例
 *
 * @export
 * @class Http
 */
export class BrickHttp {
    /**
     * 尝试从服务器中获取 ArrayBuffer 类型的数据
     *
     * @static
     * @param {string} url
     * @param {(data: ArrayBuffer) => void} call
     * @memberof Http
     */
    public static GetFileByArrayBuffer(url: string, call: (data: ArrayBuffer) => void) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    xhr.responseType = "arraybuffer";
                    call && call(xhr.response);
                } else {
                    call && call(null);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    // 速度测试
    public static SpeedTest(test_file: string): Promise<number> {
        console.log("jsw debug", test_file);
        return new Promise((resolve, reject) => {
            const xhr = HttpRely.getXMLHttpRequest();
            let startTime, endTime, fileSize;
            xhr.ontimeout = () => {
                resolve(0);
                return;
            };
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 2) {
                    startTime = Date.now();
                    // 原生情况下此处无效
                }
                if (xhr.readyState === 4 && xhr.status === 200) {
                    endTime = Date.now();
                    fileSize = xhr.responseText.length;
                    // console.log(fileSize);
                    const speed = fileSize / ((endTime - startTime) / 1000) / 1024;
                    resolve(Math.floor(speed));
                }
                if (xhr.readyState === 4 && xhr.status !== 200) {
                    resolve(0);
                }
            };
            xhr.onerror = () => {
                console.log("jsw 测试文件获取失败请检查地址");
                resolve(0);
                return;
            };
            xhr.open("GET", test_file, true);
            startTime = Date.now();
            xhr.send();
        });
    }
    /**
     * 依赖
     *
     * @private
     * @type {IOCHttp}
     * @memberof Http
     */
    private http: IOCHttp;

    /**
     * 构建依赖
     * Creates an instance of Http.
     * @param {string} baseUrl // 基础url 例如 https://www.github.com
     * @param {{ [key: string]: string }} [headers] // 请求头信息
     * @param {number} [timeout]
     * @memberof Http
     */
    constructor(baseUrl: string, headers?: { [key: string]: string }, timeout?: number) {
        this.http = new HttpRely(baseUrl, headers, timeout);
    }

    /**
     * 发送get请求
     *
     * @template T
     * @param {string} url
     * @param {{}} [params]
     * @returns {Promise<T>}
     * @memberof Http
     */
    public get<T>(url: string, params?: {}): Promise<T> {
        return this.http.get<T>(url, params);
    }

    /**
     * 发送post请求
     *
     * @template T
     * @param {string} url
     * @param {{}} [params]
     * @returns {Promise<T>}
     * @memberof Http
     */
    public post<T>(url: string, params?: {}): Promise<T> {
        return this.http.post(url, params);
    }
}
