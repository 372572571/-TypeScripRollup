import fs from "fs";
import lo, { includes } from "lodash";
import { StringUtils } from "./utils/StringUtIls";
const FilePath: string = process.argv[2];
console.log(FilePath);
const format = "utf8";
let data = fs.readFileSync(FilePath, format);
let arr = data.split("`");
let resList: any = {};
arr.forEach((val) => {
    if (val.includes("protobuf:")) {
        return;
    }
    let temp = lo.trim(val).split(" ");
    let res: Array<string> = lo.remove(temp, (s) => {
        return /[a-z,A-Z]/.test(s);
    });
    if (res.length !== 2) {
        return;
    }
    console.log(res)
    resList[StringUtils.HumpLine(res[0])] = res[1].includes("int")||res[1].includes("float") ? 1 : "string";
});
console.log(JSON.stringify(resList));
