(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('fs'), require('lodash'), require('path'), require('got')) :
    typeof define === 'function' && define.amd ? define(['fs', 'lodash', 'path', 'got'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fs, global.lo, global.path, global.got));
}(this, (function (fs, lo, path, got) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
    var lo__default = /*#__PURE__*/_interopDefaultLegacy(lo);
    var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
    var got__default = /*#__PURE__*/_interopDefaultLegacy(got);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        StringUtils.HumpLine = function (str) {
            var res = lo__default['default'].map(str, function (val, key) {
                if (str[key - 1] && /[A-Z]/.test(val)) {
                    return "_" + val.toLowerCase();
                }
                else {
                    return val.toLowerCase();
                }
            });
            return res.join("");
        };
        StringUtils.GetFunName = function (val) {
            val = lo__default['default'].trim(val);
            var reg_name = RegExp("^[a-z A-Z]{1,}").exec(val);
            var func_name = reg_name ? reg_name[0] : undefined;
            return func_name;
        };
        StringUtils.GetFunReqName = function (val) {
            val = lo__default['default'].trim(val);
            var name = RegExp("[*]{1}[a-zA-Z]{1,}").exec(val);
            var res;
            if (name && name[0]) {
                res = lo__default['default'].trim(name[0], "*");
            }
            return res;
        };
        return StringUtils;
    }());

    function HandleTemplate(service, fun, req, doc) {
        return "\n//" + doc + "\nfunc " + fun + "(c *gin.Context) {\n\t// \u83B7\u53D6\u6570\u636E\n\tdata, err := c.GetRawData()\n\tif err != nil {\n\t\tc.String(http.StatusInternalServerError, err.Error())\n\t\treturn\n\t}\n\t// \u6570\u636E\u586B\u5145\u7ED3\u6784\n\treq := pb." + req + "{}\n\tif err = json.Unmarshal(data, &req); err != nil {\n\t\tc.String(http.StatusOK, err.Error())\n\t\treturn\n\t}\n\t// \u8C03\u7528RPC\u670D\u52A1\n\tresults, err := client." + service + "Client." + fun + "(context.Background(), &req)\n\tif err != nil {\n\t\tc.String(http.StatusOK, err.Error())\n\t\treturn\n\t}\n\t// \u8FD4\u56DE\u7ED3\u679C\n\tc.JSON(http.StatusOK, results)\n}\n";
    }
    function RouterTemplate(fun, doc) {
        return "Router.POST(\"/" + StringUtils.HumpLine(fun) + "\", handle." + fun + ")//" + doc;
    }

    var GoFunc = /** @class */ (function () {
        function GoFunc(service, name, req) {
            this.func_name = name;
            this.req_name = req;
            this.service = service;
            this.initHandle();
            this.initRouter();
        }
        GoFunc.prototype.initRouter = function () {
            this.router = RouterTemplate(this.func_name, "not");
        };
        GoFunc.prototype.initHandle = function () {
            this.handle = HandleTemplate(this.service, this.func_name, this.req_name, "not");
        };
        return GoFunc;
    }());

    var HTTP_METHOD;
    (function (HTTP_METHOD) {
        HTTP_METHOD["POST"] = "POST";
        HTTP_METHOD["GET"] = "GET";
    })(HTTP_METHOD || (HTTP_METHOD = {}));
    var EResponseStatusCode;
    (function (EResponseStatusCode) {
        EResponseStatusCode["TIME_OUT"] = "ResponseStatus:TIME_OUT";
        EResponseStatusCode["ERROR_DATA"] = "ResponseStatus:ERROR_DATA";
        EResponseStatusCode["ERROR_OTHER"] = "ResponseStatus:ERROR_OTHER";
        EResponseStatusCode["SUCCESS"] = "ResponseStatus:SUCCESS";
        EResponseStatusCode["STACK"] = "stack";
    })(EResponseStatusCode || (EResponseStatusCode = {}));
    /**
     * http依赖
     *
     * @class HttpRely http 依赖
     * @implements {IOCHttp}
     */
    var HttpRely = /** @class */ (function () {
        function HttpRely(baseUrl, headers, timeout) {
            this.timeout = 10000; // 超时时间
            this.headers = {};
            for (var i in headers) {
                this.headers[i] = headers[i];
            }
            if (timeout) {
                this.timeout = timeout;
            }
            this.baseURL = baseUrl; // 基础url
        }
        HttpRely.initialization = function (getXMLHttpRequest) {
            HttpRely.getXMLHttpRequest = getXMLHttpRequest;
        };
        HttpRely.prototype.post = function (url, params) {
            if (this.baseURL) {
                url = "" + this.baseURL + url;
            }
            return this.send(url, HTTP_METHOD.POST, params);
        };
        HttpRely.prototype.get = function (url, data) {
            if (this.baseURL) {
                url = "" + this.baseURL + url;
            }
            return this.send(url, HTTP_METHOD.GET, data);
        };
        /**
         * 发送
         *
         * @private
         * @template T 类型
         * @param {string} url 请求的url
         * @param {HTTP_METHOD} method 请求的类型
         * @param {{ [key: string]: any }} params 发送的请求参数
         * @returns {Promise<T>} 返回promise
         * @memberof HttpRely
         */
        HttpRely.prototype.send = function (url, method, params) {
            var _this = this;
            console.log("jsw 接口调试", url, method);
            return new Promise(function (resolve, reject) {
                // 创建对象
                var xhr = HttpRely.getXMLHttpRequest();
                // 请求超时时间
                xhr.timeout = _this.timeout;
                // 设置状态回调
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 400) {
                            var response = xhr.responseText;
                            try {
                                response = JSON.parse(response);
                                var res = { Status: EResponseStatusCode.SUCCESS, Data: response };
                                resolve(res); // IResponse
                            }
                            catch (error) {
                                // 可能数据是空的json解析报错
                                reject({ Status: EResponseStatusCode.ERROR_DATA, Data: error });
                            }
                        }
                        else {
                            var response = {
                                Status: xhr.responseText ? EResponseStatusCode.ERROR_OTHER : EResponseStatusCode.TIME_OUT,
                                Data: xhr.responseText,
                            };
                            reject(response);
                        }
                    }
                };
                xhr.onerror = function (err) {
                    reject(err);
                };
                xhr.ontimeout = function (err) {
                    reject(err);
                };
                // xhr.setRequestHeader('Host', this.baseURL)
                switch (method) {
                    // 设置请求信息
                    case HTTP_METHOD.POST:
                        xhr.open(method, url, true);
                        _this.setHeaders(xhr);
                        xhr.send(JSON.stringify(params));
                        break;
                    case HTTP_METHOD.GET:
                        var temp = _this.getParams(params);
                        xhr.open(method, url + temp, true);
                        _this.setHeaders(xhr);
                        xhr.send();
                        break;
                    default:
                        throw new Error(" Request type error .");
                }
            });
        };
        /**
         * 把key val数据解析成 url参数
         *
         * @private
         * @param {{ [key: string]: any }} params 需要解析的对象
         * @returns {string}
         * @memberof HttpRely
         */
        HttpRely.prototype.getParams = function (params) {
            if (!params) {
                return "";
            }
            var temp = "?";
            for (var index in params) {
                if (temp === "?") {
                    temp = "" + temp + index + "=" + params[index];
                }
                else {
                    temp = temp + "&" + index + "=" + params[index];
                }
            }
            return temp;
        };
        /**
         * 设置头信息
         *
         * @private
         * @param {XMLHttpRequest} xhr
         * @memberof HttpRely
         */
        HttpRely.prototype.setHeaders = function (xhr) {
            for (var index in this.headers) {
                console.log(index, this.headers[index]);
                try {
                    xhr.setRequestHeader(index, this.headers[index]);
                }
                catch (error) {
                    console.log("jsw", error); // 屏蔽警告
                }
            }
        };
        HttpRely.getXMLHttpRequest = function () {
            return new XMLHttpRequest();
        };
        return HttpRely;
    }());
    /**
     * http 请求实例
     *
     * @export
     * @class Http
     */
    var BrickHttp = /** @class */ (function () {
        /**
         * 构建依赖
         * Creates an instance of Http.
         * @param {string} baseUrl // 基础url 例如 https://www.github.com
         * @param {{ [key: string]: string }} [headers] // 请求头信息
         * @param {number} [timeout]
         * @memberof Http
         */
        function BrickHttp(baseUrl, headers, timeout) {
            this.http = new HttpRely(baseUrl, headers, timeout);
        }
        /**
         * 尝试从服务器中获取 ArrayBuffer 类型的数据
         *
         * @static
         * @param {string} url
         * @param {(data: ArrayBuffer) => void} call
         * @memberof Http
         */
        BrickHttp.GetFileByArrayBuffer = function (url, call) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        xhr.responseType = "arraybuffer";
                        call && call(xhr.response);
                    }
                    else {
                        call && call(null);
                    }
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        };
        // 速度测试
        BrickHttp.SpeedTest = function (test_file) {
            console.log("jsw debug", test_file);
            return new Promise(function (resolve, reject) {
                var xhr = HttpRely.getXMLHttpRequest();
                var startTime, endTime, fileSize;
                xhr.ontimeout = function () {
                    resolve(0);
                    return;
                };
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 2) {
                        startTime = Date.now();
                        // 原生情况下此处无效
                    }
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        endTime = Date.now();
                        fileSize = xhr.responseText.length;
                        // console.log(fileSize);
                        var speed = fileSize / ((endTime - startTime) / 1000) / 1024;
                        resolve(Math.floor(speed));
                    }
                    if (xhr.readyState === 4 && xhr.status !== 200) {
                        resolve(0);
                    }
                };
                xhr.onerror = function () {
                    console.log("jsw 测试文件获取失败请检查地址");
                    resolve(0);
                    return;
                };
                xhr.open("GET", test_file, true);
                startTime = Date.now();
                xhr.send();
            });
        };
        /**
         * 发送get请求
         *
         * @template T
         * @param {string} url
         * @param {{}} [params]
         * @returns {Promise<T>}
         * @memberof Http
         */
        BrickHttp.prototype.get = function (url, params) {
            return this.http.get(url, params);
        };
        /**
         * 发送post请求
         *
         * @template T
         * @param {string} url
         * @param {{}} [params]
         * @returns {Promise<T>}
         * @memberof Http
         */
        BrickHttp.prototype.post = function (url, params) {
            return this.http.post(url, params);
        };
        return BrickHttp;
    }());

    var SERVICE_URL = "http://127.0.0.1:8688";
    // 常用的http请求.
    var ConvenientRequest = /** @class */ (function () {
        function ConvenientRequest() {
        }
        Object.defineProperty(ConvenientRequest, "time", {
            /**
             * 快速获取时间
             *
             * @readonly
             * @private
             * @static
             * @type {time}
             * @memberof ConvenientRequest
             */
            get: function () {
                return Date.parse(new Date().toString()) / 1000;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConvenientRequest, "headers", {
            get: function () {
                return {
                    "content-type": "application/json",
                };
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 快捷请求
         *
         * @static
         * @template T
         * @param {string} req_str
         * @param {*} data
         * @returns {Promise<IResponse<T>>}
         * @memberof ConvenientRequest
         */
        ConvenientRequest.HttpRequestPost = function (req_str, data) {
            return __awaiter(this, void 0, Promise, function () {
                var http, init_res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = new BrickHttp(SERVICE_URL, this.headers);
                            return [4 /*yield*/, http.post("" + req_str, data).catch(function (err) {
                                    console.log(err);
                                    return { Data: {}, Status: EResponseStatusCode.STACK };
                                })];
                        case 1:
                            init_res = _a.sent();
                            init_res.Interface = req_str; // 请求的接口
                            return [2 /*return*/, init_res];
                    }
                });
            });
        };
        ConvenientRequest.HttpRequestGet = function (req_str, data) {
            return __awaiter(this, void 0, Promise, function () {
                var http, init_res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = new BrickHttp(SERVICE_URL, this.headers);
                            return [4 /*yield*/, http.get("" + req_str, data).catch(function (err) {
                                    return { Data: {}, Status: EResponseStatusCode.STACK };
                                })];
                        case 1:
                            init_res = _a.sent();
                            init_res.Interface = req_str; // 请求的接口
                            // console.log("jsw 接口调试 HttpRequest", JSON.stringify(init_res));
                            return [2 /*return*/, init_res];
                    }
                });
            });
        };
        ConvenientRequest.NodeHTTP = function (path, data) {
            return new Promise(function (resolve, reject) {
                got__default['default'].post(SERVICE_URL + path, { body: data })
                    .then(function (response) {
                    resolve(response.body);
                })
                    .catch(function (error) {
                    resolve(error.response.body);
                });
            });
        };
        return ConvenientRequest;
    }());

    var data = { user_id: 1, source: 1, sku_ids: [91] };
    switch (process.argv[2]) {
        case "-s":
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ConvenientRequest.NodeHTTP(process.argv[3], JSON.stringify(data))];
                        case 1:
                            res = _a.sent();
                            console.log(res);
                            return [2 /*return*/];
                    }
                });
            }); })();
            break;
        case "test":
            var path_file = process.argv[2];
            var mod_1 = process.argv[3] ? process.argv[3] : "test";
            var UTF8 = "utf8";
            var file_data = fs__default['default'].readFileSync(path_file, UTF8);
            var list_string = file_data.split("//");
            var res_list_1 = [];
            list_string.forEach(function (val) {
                val = lo__default['default'].trim(val);
                var func_name = StringUtils.GetFunName(val);
                var req_name = StringUtils.GetFunReqName(val);
                if (func_name && req_name) {
                    res_list_1.push(new GoFunc(mod_1, func_name, req_name));
                }
            });
            var handle_string_1 = "";
            var router_string_1 = "";
            res_list_1.forEach(function (val) {
                handle_string_1 += val.handle + "\n";
                router_string_1 += val.router + "\n";
            });
            fs__default['default'].writeFileSync(path__default['default'].join("out/router"), router_string_1, UTF8);
            fs__default['default'].writeFileSync(path__default['default'].join("out/handle"), handle_string_1, UTF8);
            console.log("over");
    }

})));
