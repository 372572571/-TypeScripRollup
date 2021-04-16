import { HandleTemplate, RouterTemplate } from "./funcgo";

export class GoFunc {
    protected service!: string;
    protected func_name!: string;
    protected req_name!: string;
    public router!: string;
    public handle!: string;

    constructor(service: string, name: string, req: string) {
        this.func_name = name;
        this.req_name = req;
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
}
