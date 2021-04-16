import got from "got";
import { reject } from "lodash";
import { BrickHttp, EResponseStatusCode } from "./BrickHttp";

export const EConvenientRequest = EResponseStatusCode;

const SERVICE_URL = "http://127.0.0.1:8688";

// 常用的http请求.
export class ConvenientRequest {
    /**
     * 快速获取时间
     *
     * @readonly
     * @private
     * @static
     * @type {time}
     * @memberof ConvenientRequest
     */
    private static get time(): number {
        return Date.parse(new Date().toString()) / 1000;
    }

    private static get headers() {
        return {
            "content-type": "application/json",
        };
    }

    /**
     * 快捷请求
     *
     * @static
     * @template T
     * @param {string} req_str
     * @param {*} data
     * @returns {Promise<IResponse<T>>}
     * @memberof ConvenientRequest
     */
    public static async HttpRequestPost<T>(req_str: string, data: any): Promise<IResponse<T>> {
        let http: BrickHttp = new BrickHttp(SERVICE_URL, this.headers); // 获取请求对象
        let init_res: IResponse<T> = await http.post<IResponse<T>>(`${req_str}`, data).catch((err: Error) => {
            console.log(err);
            return { Data: {} as any, Status: EResponseStatusCode.STACK };
        }); // 数据兼容处理
        init_res.Interface = req_str; // 请求的接口
        return init_res;
    }

    public static async HttpRequestGet<T>(req_str: string, data: any): Promise<IResponse<T>> {
        let http: BrickHttp = new BrickHttp(SERVICE_URL, this.headers); // 获取请求对象
        let init_res: IResponse<T> = await http.get<IResponse<T>>(`${req_str}`, data).catch((err: Error) => {
            return { Data: {} as any, Status: EResponseStatusCode.STACK };
        }); // 数据兼容处理
        init_res.Interface = req_str; // 请求的接口
        // console.log("jsw 接口调试 HttpRequest", JSON.stringify(init_res));
        return init_res;
    }

    public static NodeHTTP(path: string, data: any) {
        return new Promise((resolve, reject) => {
            got.post(SERVICE_URL+path, {body:data})
                .then((response) => {
                    resolve(response.body);
                })
                .catch((error) => {
                    resolve(error.response.body);
                });
        });
    }
}
