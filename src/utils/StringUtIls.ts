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

    // 下划线转大写
    static Underline(str: string) {
        let res = lo.map(str, (val, key) => {
            if (str[key + 1] === "_") {
                return str[key + 1].toLocaleUpperCase();
            } else {
                return val;
            }
        });
        return lo.trim(res.join(""), "_");
    }

    static GetFunName(val: string) {
        val = lo.trim(val);
        let reg_name = RegExp("^[a-z A-Z]{1,}").exec(val);
        const func_name = reg_name ? reg_name[0] : undefined;
        return func_name;
    }

    static GetFunReqName(val: string, index: number = 0) {
        val = lo.trim(val);
        let name = RegExp("[*]{1}[a-zA-Z]{1,}").exec(val);
        let res;
        if (name && name[index]) {
            res = lo.trim(name[index], "*");
        }
        return res;
    }

    static GetFunRespName(val: string): string {
        val = lo.trim(val);
        let name = RegExp("[(][*]{1}[a-zA-Z]{1,}").exec(val);
        let res: string;
        if (name && name[0]) {
            res = lo.trim(name[0], "(*");
        }
        return res!;
    }
}
