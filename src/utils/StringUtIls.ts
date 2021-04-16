import lo from "lodash";
export class StringUtils {
    static HumpLine(str: string) {
        let res = lo.map(str, (val, key) => {
            if (str[key - 1] && /[A-Z]/.test(val)) {
                return `_${val.toLowerCase()}`;
            } else {
                return val.toLowerCase();
            }
        });
        return res.join("");
    }

    static GetFunName(val: string) {
        val = lo.trim(val);
        let reg_name = RegExp("^[a-z A-Z]{1,}").exec(val);
        const func_name = reg_name ? reg_name[0] : undefined;
        return func_name;
    }

    static GetFunReqName(val: string) {
        val = lo.trim(val);
        let name = RegExp("[*]{1}[a-zA-Z]{1,}").exec(val);
        let res;
        if (name && name[0]) {
            res = lo.trim(name[0], "*");
        }
        return res;
    }
}
