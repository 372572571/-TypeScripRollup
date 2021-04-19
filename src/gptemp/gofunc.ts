import { StringUtils } from "../utils/StringUtIls";
import { HandleTemplate, RouterTemplate } from "./funcgo";
import lo from "lodash";

export class GoFunc {
    protected service!: string;
    protected func_name!: string;
    protected req_name!: string;
    protected resp_name!: string;

    public router!: string;
    public handle!: string;
    public req!: string;
    public resp!: string;

    constructor(service: string, name: string, req: string, resp: string) {
        this.func_name = name;
        this.req_name = req;
        this.resp_name = resp;
        this.service = service;
        this.initHandle();
        this.initRouter();
    }

    protected initRouter() {
        this.router = RouterTemplate(this.func_name, "not");
    }
    protected initHandle() {
        this.handle = HandleTemplate(this.service, this.func_name, this.req_name, "not");
    }

    public initData(obj: any) {
        this.initReq(obj);
        this.initResp(obj);
    }
    public initReq(obj: any) {
        if (!this.req_name) {
            return false;
        }
        let find = StringUtils.HumpLine(this.req_name);
        find = lo.capitalize(find);
        const data: any = {};
        // obj[find].prototype;
        let proto = obj[find].prototype;
        for (let key in proto) {
            if (proto[key] instanceof Function) {
            } else {
                data[key] = proto[key];
            }
        }
        this.req = JSON.stringify(data);
    }

    public initResp(obj: any) {
        if (!this.resp_name) {
            return false;
        }
        let find = StringUtils.HumpLine(this.resp_name);
        find = lo.capitalize(find);
        const data: any = {};
        // obj[find].prototype;
        let proto = obj[find].prototype.toJSON();
        for (let key in proto) {
            if (proto[key] instanceof Function) {
            } else {
                data[key] = proto[key];
            }
            if (data[key] === null) {
                console.log(key);
            }
        }
        this.resp = JSON.stringify(data);
    }
}
