import fs from "fs";
import lo, { includes } from "lodash";
import { GoFunc } from "./gptemp/gofunc";
import { StringUtils } from "./utils/StringUtIls";
const path = process.argv[2];
const mod = process.argv[3] ? process.argv[3] : "test";
const UTF8 = "utf8";
const file_data = fs.readFileSync(path, UTF8);
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
