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
}
