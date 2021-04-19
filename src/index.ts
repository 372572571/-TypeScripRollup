import fs from "fs";
import lo, { includes } from "lodash";
import path from "path";
import { GoFunc } from "./gptemp/gofunc";
import { coupon } from "./protores/coupon";
import { ConvenientRequest } from "./utils/http/ConvenientRequest";
import { StringUtils } from "./utils/StringUtIls";

const data = { age: "new", is: false };
switch (process.argv[2]) {
    case "-probuf":
        // for (let key in coupon) {
        // let val = (coupon as any)[key].prototype && (coupon as any)[key].prototype.toJSON ? (coupon as any)[key].prototype.toJSON : undefined;
        // if (val) {
        //     console.log(`${key} = ` , (coupon as any)[key].prototype.toJSON());
        // }
        // }
        coupon.Common_resp;
        console.log(coupon.Coupon.prototype);
        break;
    case "-s":
        (async () => {
            // console.log(typeof(process.argv[4]));
            // console.log((process.argv[4]))
            // return
            // let res = await ConvenientRequest.NodeHTTP(process.argv[3], process.argv[4]);
            let res = await ConvenientRequest.NodeHTTP(process.argv[3], JSON.stringify(data));
            console.log(res);
        })();
        break;
    case "test":
        test();
        break;
}

function test() {
    const path_file = process.argv[2];
    const mod = process.argv[3] ? process.argv[3] : "test";
    const UTF8 = "utf8";
    const file_data = fs.readFileSync(path_file, UTF8);
    let list_string = file_data.split("//");
    let res_list: GoFunc[] = [];
    list_string.forEach((val) => {
        val = lo.trim(val);
        const func_name = StringUtils.GetFunName(val);
        const req_name = StringUtils.GetFunReqName(val);
        const resp_name = StringUtils.GetFunRespName(val);

        if (func_name && req_name) {
            let obj = new GoFunc(mod, func_name, req_name, resp_name);
            obj.initData(coupon);
            res_list.push(obj);
            // initReq
        }
    });

    let handle_string = "";
    let router_string = "";
    let api_string = "";

    res_list.forEach((val) => {
        handle_string += val.handle + "\n";
        router_string += val.router + "\n";
        api_string += `// @req ${val.req}\n`;
        api_string += `// @resp ${val.resp}\n`;
        api_string += `${val.router}\n`;
        api_string += `\n`;
    });

    fs.writeFileSync(path.join("out/router"), router_string, UTF8);
    fs.writeFileSync(path.join("out/handle"), handle_string, UTF8);
    fs.writeFileSync(path.join("out/api"), api_string, UTF8);
    console.log("over");
    // console.log(res_list[0].req);
}
