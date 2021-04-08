/** 此插件可以告诉rollup 如何查找外部模块 */
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

// rollup-plugin-babel 使用 Babel 和 Rollup 的最简单方法是使用 [rollup-plugin-babel]
import babel from "rollup-plugin-babel";

/** typeScript rollup 插件 */
import typescript from "rollup-plugin-typescript";

/** 包信息 */
import pkg from "./package.json";

export default [
    // UMD for browser-friendly build
    {
        input: "src/index.ts",// 入口文件
        output: {
            name: "howLongUntilLunch",
            file: pkg.browser,
            format: "umd", // 规范
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            babel({
                exclude: "node_modules/**", // 排除文件
            }),
        ],
    },
    // CommonJS for Node and ES module for bundlers build
    // {
    //     input: "src/index.ts",
    //     external: ["ms"],
    //     plugins: [typescript()],
    //     output: [
    //         { file: pkg.main, format: "cjs" },
    //         { file: pkg.module, format: "es" },
    //     ],
    // },
];
