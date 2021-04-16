import fs from "fs";
import lo, { includes } from "lodash";
import path from "path";
import { GoFunc } from "./gptemp/gofunc";
import { ConvenientRequest } from "./utils/http/ConvenientRequest";
import { StringUtils } from "./utils/StringUtIls";
const data = {user_id:1,source:1,sku_ids:[91]}
switch (process.argv[2]) {
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

            if (func_name && req_name) {
                res_list.push(new GoFunc(mod, func_name, req_name));
            }
        });

        let handle_string = "";
        let router_string = "";

        res_list.forEach((val) => {
            handle_string += val.handle + "\n";
            router_string += val.router + "\n";
        });

        fs.writeFileSync(path.join("out/router"), router_string, UTF8);
        fs.writeFileSync(path.join("out/handle"), handle_string, UTF8);
        console.log("over");
}
