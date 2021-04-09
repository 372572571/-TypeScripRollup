/** 此插件可以告诉rollup 如何查找外部模块 */
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

// rollup-plugin-babel 使用 Babel 和 Rollup 的最简单方法是使用 [rollup-plugin-babel]
import babel from "rollup-plugin-babel";

/** typeScript rollup 插件 */
import typescript from "rollup-plugin-typescript";

/** js 压缩插件 */
import { terser } from "rollup-plugin-terser";

/** 包信息 */
import pkg from "./package.json";
const extensions = [".js", ".ts"];
export default [
    // UMD for browser-friendly build
    // {
    //     input: "src/index.ts", // 入口文件
    //     output: {
    //         name: "howLongUntilLunch",
    //         file: pkg.browser,
    //         format: "umd", // 规范
    //     },
    //     plugins: [
    //         resolve(),
    //         commonjs(),
    //         typescript(),
    //     ],
    // },
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

    // 压缩配置
    {
        input: "src/index.ts", // 入口文件
        output: {
            name: "howLongUntilLunch",
            file: pkg.main,
            format: "umd", // 规范
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            babel({
                include: ["src/**"],
                exclude: "node_modules/**", // 排除文件
                extensions,
            }),
            terser({ compress: { drop_console: true } }), // 优化压缩
        ],
    },
];
