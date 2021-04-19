/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const coupon = $root.coupon = (() => {

    /**
     * Namespace coupon.
     * @exports coupon
     * @namespace
     */
    const coupon = {};

    coupon.Coupon = (function() {

        /**
         * Constructs a new Coupon service.
         * @memberof coupon
         * @classdesc Represents a Coupon
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Coupon(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Coupon.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Coupon;

        /**
         * Creates new Coupon service using the specified rpc implementation.
         * @function create
         * @memberof coupon.Coupon
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Coupon} RPC service. Useful where requests and/or responses are streamed.
         */
        Coupon.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link coupon.Coupon#create_coupon_temp}.
         * @memberof coupon.Coupon
         * @typedef Create_coupon_tempCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls Create_coupon_temp.
         * @function create_coupon_temp
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Create_coupon_temp_req} request Create_coupon_temp_req message or plain object
         * @param {coupon.Coupon.Create_coupon_tempCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.create_coupon_temp = function create_coupon_temp(request, callback) {
            return this.rpcCall(create_coupon_temp, $root.coupon.Create_coupon_temp_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "Create_coupon_temp" });

        /**
         * Calls Create_coupon_temp.
         * @function create_coupon_temp
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Create_coupon_temp_req} request Create_coupon_temp_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#create_coupons}.
         * @memberof coupon.Coupon
         * @typedef Create_couponsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls Create_coupons.
         * @function create_coupons
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Create_coupons_req} request Create_coupons_req message or plain object
         * @param {coupon.Coupon.Create_couponsCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.create_coupons = function create_coupons(request, callback) {
            return this.rpcCall(create_coupons, $root.coupon.Create_coupons_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "Create_coupons" });

        /**
         * Calls Create_coupons.
         * @function create_coupons
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Create_coupons_req} request Create_coupons_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#user_get_coupon}.
         * @memberof coupon.Coupon
         * @typedef User_get_couponCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls User_get_coupon.
         * @function user_get_coupon
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_get_coupon_req} request User_get_coupon_req message or plain object
         * @param {coupon.Coupon.User_get_couponCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.user_get_coupon = function user_get_coupon(request, callback) {
            return this.rpcCall(user_get_coupon, $root.coupon.User_get_coupon_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "User_get_coupon" });

        /**
         * Calls User_get_coupon.
         * @function user_get_coupon
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_get_coupon_req} request User_get_coupon_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#get_user_coupon_infos}.
         * @memberof coupon.Coupon
         * @typedef Get_user_coupon_infosCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Get_user_coupon_infos_resp} [response] Get_user_coupon_infos_resp
         */

        /**
         * Calls Get_user_coupon_infos.
         * @function get_user_coupon_infos
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Get_user_coupon_infos_req} request Get_user_coupon_infos_req message or plain object
         * @param {coupon.Coupon.Get_user_coupon_infosCallback} callback Node-style callback called with the error, if any, and Get_user_coupon_infos_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.get_user_coupon_infos = function get_user_coupon_infos(request, callback) {
            return this.rpcCall(get_user_coupon_infos, $root.coupon.Get_user_coupon_infos_req, $root.coupon.Get_user_coupon_infos_resp, request, callback);
        }, "name", { value: "Get_user_coupon_infos" });

        /**
         * Calls Get_user_coupon_infos.
         * @function get_user_coupon_infos
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Get_user_coupon_infos_req} request Get_user_coupon_infos_req message or plain object
         * @returns {Promise<coupon.Get_user_coupon_infos_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#get_coupon_info}.
         * @memberof coupon.Coupon
         * @typedef Get_coupon_infoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Get_coupon_info_resp} [response] Get_coupon_info_resp
         */

        /**
         * Calls Get_coupon_info.
         * @function get_coupon_info
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Get_coupon_info_req} request Get_coupon_info_req message or plain object
         * @param {coupon.Coupon.Get_coupon_infoCallback} callback Node-style callback called with the error, if any, and Get_coupon_info_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.get_coupon_info = function get_coupon_info(request, callback) {
            return this.rpcCall(get_coupon_info, $root.coupon.Get_coupon_info_req, $root.coupon.Get_coupon_info_resp, request, callback);
        }, "name", { value: "Get_coupon_info" });

        /**
         * Calls Get_coupon_info.
         * @function get_coupon_info
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Get_coupon_info_req} request Get_coupon_info_req message or plain object
         * @returns {Promise<coupon.Get_coupon_info_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#user_order}.
         * @memberof coupon.Coupon
         * @typedef User_orderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls User_order.
         * @function user_order
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_order_req} request User_order_req message or plain object
         * @param {coupon.Coupon.User_orderCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.user_order = function user_order(request, callback) {
            return this.rpcCall(user_order, $root.coupon.User_order_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "User_order" });

        /**
         * Calls User_order.
         * @function user_order
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_order_req} request User_order_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#user_cancel_order}.
         * @memberof coupon.Coupon
         * @typedef User_cancel_orderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls User_cancel_order.
         * @function user_cancel_order
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_cancel_order_req} request User_cancel_order_req message or plain object
         * @param {coupon.Coupon.User_cancel_orderCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.user_cancel_order = function user_cancel_order(request, callback) {
            return this.rpcCall(user_cancel_order, $root.coupon.User_cancel_order_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "User_cancel_order" });

        /**
         * Calls User_cancel_order.
         * @function user_cancel_order
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_cancel_order_req} request User_cancel_order_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#user_complete_order}.
         * @memberof coupon.Coupon
         * @typedef User_complete_orderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls User_complete_order.
         * @function user_complete_order
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_complete_order_req} request User_complete_order_req message or plain object
         * @param {coupon.Coupon.User_complete_orderCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.user_complete_order = function user_complete_order(request, callback) {
            return this.rpcCall(user_complete_order, $root.coupon.User_complete_order_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "User_complete_order" });

        /**
         * Calls User_complete_order.
         * @function user_complete_order
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.User_complete_order_req} request User_complete_order_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#enable_coupons}.
         * @memberof coupon.Coupon
         * @typedef Enable_couponsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls Enable_coupons.
         * @function enable_coupons
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Enable_coupons_req} request Enable_coupons_req message or plain object
         * @param {coupon.Coupon.Enable_couponsCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.enable_coupons = function enable_coupons(request, callback) {
            return this.rpcCall(enable_coupons, $root.coupon.Enable_coupons_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "Enable_coupons" });

        /**
         * Calls Enable_coupons.
         * @function enable_coupons
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Enable_coupons_req} request Enable_coupons_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link coupon.Coupon#disable_coupons}.
         * @memberof coupon.Coupon
         * @typedef Disable_couponsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coupon.Common_resp} [response] Common_resp
         */

        /**
         * Calls Disable_coupons.
         * @function disable_coupons
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Disable_coupons_req} request Disable_coupons_req message or plain object
         * @param {coupon.Coupon.Disable_couponsCallback} callback Node-style callback called with the error, if any, and Common_resp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Coupon.prototype.disable_coupons = function disable_coupons(request, callback) {
            return this.rpcCall(disable_coupons, $root.coupon.Disable_coupons_req, $root.coupon.Common_resp, request, callback);
        }, "name", { value: "Disable_coupons" });

        /**
         * Calls Disable_coupons.
         * @function disable_coupons
         * @memberof coupon.Coupon
         * @instance
         * @param {coupon.Disable_coupons_req} request Disable_coupons_req message or plain object
         * @returns {Promise<coupon.Common_resp>} Promise
         * @variation 2
         */

        return Coupon;
    })();

    coupon.Common_resp = (function() {

        /**
         * Properties of a Common_resp.
         * @memberof coupon
         * @interface ICommon_resp
         * @property {number|null} [Code] Common_resp Code
         * @property {string|null} [Msg] Common_resp Msg
         * @property {string|null} [Data] Common_resp Data
         */

        /**
         * Constructs a new Common_resp.
         * @memberof coupon
         * @classdesc Represents a Common_resp.
         * @implements ICommon_resp
         * @constructor
         * @param {coupon.ICommon_resp=} [properties] Properties to set
         */
        function Common_resp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Common_resp Code.
         * @member {number} Code
         * @memberof coupon.Common_resp
         * @instance
         */
        Common_resp.prototype.Code = 0;

        /**
         * Common_resp Msg.
         * @member {string} Msg
         * @memberof coupon.Common_resp
         * @instance
         */
        Common_resp.prototype.Msg = "";

        /**
         * Common_resp Data.
         * @member {string} Data
         * @memberof coupon.Common_resp
         * @instance
         */
        Common_resp.prototype.Data = "";

        /**
         * Creates a new Common_resp instance using the specified properties.
         * @function create
         * @memberof coupon.Common_resp
         * @static
         * @param {coupon.ICommon_resp=} [properties] Properties to set
         * @returns {coupon.Common_resp} Common_resp instance
         */
        Common_resp.create = function create(properties) {
            return new Common_resp(properties);
        };

        /**
         * Encodes the specified Common_resp message. Does not implicitly {@link coupon.Common_resp.verify|verify} messages.
         * @function encode
         * @memberof coupon.Common_resp
         * @static
         * @param {coupon.Common_resp} message Common_resp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Common_resp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Data);
            return writer;
        };

        /**
         * Encodes the specified Common_resp message, length delimited. Does not implicitly {@link coupon.Common_resp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Common_resp
         * @static
         * @param {coupon.Common_resp} message Common_resp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Common_resp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Common_resp message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Common_resp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Common_resp} Common_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Common_resp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Common_resp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                case 3:
                    message.Data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Common_resp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Common_resp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Common_resp} Common_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Common_resp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Common_resp message.
         * @function verify
         * @memberof coupon.Common_resp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Common_resp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!$util.isString(message.Data))
                    return "Data: string expected";
            return null;
        };

        /**
         * Creates a Common_resp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Common_resp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Common_resp} Common_resp
         */
        Common_resp.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Common_resp)
                return object;
            let message = new $root.coupon.Common_resp();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.Data != null)
                message.Data = String(object.Data);
            return message;
        };

        /**
         * Creates a plain object from a Common_resp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Common_resp
         * @static
         * @param {coupon.Common_resp} message Common_resp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Common_resp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
                object.Data = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = message.Data;
            return object;
        };

        /**
         * Converts this Common_resp to JSON.
         * @function toJSON
         * @memberof coupon.Common_resp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Common_resp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Common_resp;
    })();

    coupon.Create_coupon_temp_req = (function() {

        /**
         * Properties of a Create_coupon_temp_req.
         * @memberof coupon
         * @interface ICreate_coupon_temp_req
         * @property {string|null} [name] Create_coupon_temp_req name
         * @property {number|null} [type] Create_coupon_temp_req type
         * @property {number|null} [discount] Create_coupon_temp_req discount
         * @property {number|null} [max_value] Create_coupon_temp_req max_value
         * @property {number|null} [value] Create_coupon_temp_req value
         * @property {number|null} [enable] Create_coupon_temp_req enable
         * @property {number|null} [start_time] Create_coupon_temp_req start_time
         * @property {number|null} [end_time] Create_coupon_temp_req end_time
         */

        /**
         * Constructs a new Create_coupon_temp_req.
         * @memberof coupon
         * @classdesc Represents a Create_coupon_temp_req.
         * @implements ICreate_coupon_temp_req
         * @constructor
         * @param {coupon.ICreate_coupon_temp_req=} [properties] Properties to set
         */
        function Create_coupon_temp_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Create_coupon_temp_req name.
         * @member {string} name
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.name = "";

        /**
         * Create_coupon_temp_req type.
         * @member {number} type
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.type = 0;

        /**
         * Create_coupon_temp_req discount.
         * @member {number} discount
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.discount = 0;

        /**
         * Create_coupon_temp_req max_value.
         * @member {number} max_value
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.max_value = 0;

        /**
         * Create_coupon_temp_req value.
         * @member {number} value
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.value = 0;

        /**
         * Create_coupon_temp_req enable.
         * @member {number} enable
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.enable = 0;

        /**
         * Create_coupon_temp_req start_time.
         * @member {number} start_time
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.start_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Create_coupon_temp_req end_time.
         * @member {number} end_time
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         */
        Create_coupon_temp_req.prototype.end_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Create_coupon_temp_req instance using the specified properties.
         * @function create
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {coupon.ICreate_coupon_temp_req=} [properties] Properties to set
         * @returns {coupon.Create_coupon_temp_req} Create_coupon_temp_req instance
         */
        Create_coupon_temp_req.create = function create(properties) {
            return new Create_coupon_temp_req(properties);
        };

        /**
         * Encodes the specified Create_coupon_temp_req message. Does not implicitly {@link coupon.Create_coupon_temp_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {coupon.Create_coupon_temp_req} message Create_coupon_temp_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Create_coupon_temp_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.discount != null && Object.hasOwnProperty.call(message, "discount"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.discount);
            if (message.max_value != null && Object.hasOwnProperty.call(message, "max_value"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.max_value);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.value);
            if (message.enable != null && Object.hasOwnProperty.call(message, "enable"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.enable);
            if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.start_time);
            if (message.end_time != null && Object.hasOwnProperty.call(message, "end_time"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.end_time);
            return writer;
        };

        /**
         * Encodes the specified Create_coupon_temp_req message, length delimited. Does not implicitly {@link coupon.Create_coupon_temp_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {coupon.Create_coupon_temp_req} message Create_coupon_temp_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Create_coupon_temp_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Create_coupon_temp_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Create_coupon_temp_req} Create_coupon_temp_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Create_coupon_temp_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Create_coupon_temp_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.discount = reader.double();
                    break;
                case 4:
                    message.max_value = reader.double();
                    break;
                case 5:
                    message.value = reader.double();
                    break;
                case 6:
                    message.enable = reader.int32();
                    break;
                case 7:
                    message.start_time = reader.int64();
                    break;
                case 8:
                    message.end_time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Create_coupon_temp_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Create_coupon_temp_req} Create_coupon_temp_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Create_coupon_temp_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Create_coupon_temp_req message.
         * @function verify
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Create_coupon_temp_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.discount != null && message.hasOwnProperty("discount"))
                if (typeof message.discount !== "number")
                    return "discount: number expected";
            if (message.max_value != null && message.hasOwnProperty("max_value"))
                if (typeof message.max_value !== "number")
                    return "max_value: number expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            if (message.enable != null && message.hasOwnProperty("enable"))
                if (!$util.isInteger(message.enable))
                    return "enable: integer expected";
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (!$util.isInteger(message.start_time) && !(message.start_time && $util.isInteger(message.start_time.low) && $util.isInteger(message.start_time.high)))
                    return "start_time: integer|Long expected";
            if (message.end_time != null && message.hasOwnProperty("end_time"))
                if (!$util.isInteger(message.end_time) && !(message.end_time && $util.isInteger(message.end_time.low) && $util.isInteger(message.end_time.high)))
                    return "end_time: integer|Long expected";
            return null;
        };

        /**
         * Creates a Create_coupon_temp_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Create_coupon_temp_req} Create_coupon_temp_req
         */
        Create_coupon_temp_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Create_coupon_temp_req)
                return object;
            let message = new $root.coupon.Create_coupon_temp_req();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.discount != null)
                message.discount = Number(object.discount);
            if (object.max_value != null)
                message.max_value = Number(object.max_value);
            if (object.value != null)
                message.value = Number(object.value);
            if (object.enable != null)
                message.enable = object.enable | 0;
            if (object.start_time != null)
                if ($util.Long)
                    (message.start_time = $util.Long.fromValue(object.start_time)).unsigned = false;
                else if (typeof object.start_time === "string")
                    message.start_time = parseInt(object.start_time, 10);
                else if (typeof object.start_time === "number")
                    message.start_time = object.start_time;
                else if (typeof object.start_time === "object")
                    message.start_time = new $util.LongBits(object.start_time.low >>> 0, object.start_time.high >>> 0).toNumber();
            if (object.end_time != null)
                if ($util.Long)
                    (message.end_time = $util.Long.fromValue(object.end_time)).unsigned = false;
                else if (typeof object.end_time === "string")
                    message.end_time = parseInt(object.end_time, 10);
                else if (typeof object.end_time === "number")
                    message.end_time = object.end_time;
                else if (typeof object.end_time === "object")
                    message.end_time = new $util.LongBits(object.end_time.low >>> 0, object.end_time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Create_coupon_temp_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Create_coupon_temp_req
         * @static
         * @param {coupon.Create_coupon_temp_req} message Create_coupon_temp_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Create_coupon_temp_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.type = 0;
                object.discount = 0;
                object.max_value = 0;
                object.value = 0;
                object.enable = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.start_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start_time = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.end_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.end_time = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.discount != null && message.hasOwnProperty("discount"))
                object.discount = options.json && !isFinite(message.discount) ? String(message.discount) : message.discount;
            if (message.max_value != null && message.hasOwnProperty("max_value"))
                object.max_value = options.json && !isFinite(message.max_value) ? String(message.max_value) : message.max_value;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            if (message.enable != null && message.hasOwnProperty("enable"))
                object.enable = message.enable;
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (typeof message.start_time === "number")
                    object.start_time = options.longs === String ? String(message.start_time) : message.start_time;
                else
                    object.start_time = options.longs === String ? $util.Long.prototype.toString.call(message.start_time) : options.longs === Number ? new $util.LongBits(message.start_time.low >>> 0, message.start_time.high >>> 0).toNumber() : message.start_time;
            if (message.end_time != null && message.hasOwnProperty("end_time"))
                if (typeof message.end_time === "number")
                    object.end_time = options.longs === String ? String(message.end_time) : message.end_time;
                else
                    object.end_time = options.longs === String ? $util.Long.prototype.toString.call(message.end_time) : options.longs === Number ? new $util.LongBits(message.end_time.low >>> 0, message.end_time.high >>> 0).toNumber() : message.end_time;
            return object;
        };

        /**
         * Converts this Create_coupon_temp_req to JSON.
         * @function toJSON
         * @memberof coupon.Create_coupon_temp_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Create_coupon_temp_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Create_coupon_temp_req;
    })();

    coupon.Create_coupons_req = (function() {

        /**
         * Properties of a Create_coupons_req.
         * @memberof coupon
         * @interface ICreate_coupons_req
         * @property {number|null} [temp_id] Create_coupons_req temp_id
         * @property {number|null} [num] Create_coupons_req num
         */

        /**
         * Constructs a new Create_coupons_req.
         * @memberof coupon
         * @classdesc Represents a Create_coupons_req.
         * @implements ICreate_coupons_req
         * @constructor
         * @param {coupon.ICreate_coupons_req=} [properties] Properties to set
         */
        function Create_coupons_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Create_coupons_req temp_id.
         * @member {number} temp_id
         * @memberof coupon.Create_coupons_req
         * @instance
         */
        Create_coupons_req.prototype.temp_id = 0;

        /**
         * Create_coupons_req num.
         * @member {number} num
         * @memberof coupon.Create_coupons_req
         * @instance
         */
        Create_coupons_req.prototype.num = 0;

        /**
         * Creates a new Create_coupons_req instance using the specified properties.
         * @function create
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {coupon.ICreate_coupons_req=} [properties] Properties to set
         * @returns {coupon.Create_coupons_req} Create_coupons_req instance
         */
        Create_coupons_req.create = function create(properties) {
            return new Create_coupons_req(properties);
        };

        /**
         * Encodes the specified Create_coupons_req message. Does not implicitly {@link coupon.Create_coupons_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {coupon.Create_coupons_req} message Create_coupons_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Create_coupons_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.temp_id != null && Object.hasOwnProperty.call(message, "temp_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.temp_id);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.num);
            return writer;
        };

        /**
         * Encodes the specified Create_coupons_req message, length delimited. Does not implicitly {@link coupon.Create_coupons_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {coupon.Create_coupons_req} message Create_coupons_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Create_coupons_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Create_coupons_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Create_coupons_req} Create_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Create_coupons_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Create_coupons_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.temp_id = reader.uint32();
                    break;
                case 2:
                    message.num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Create_coupons_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Create_coupons_req} Create_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Create_coupons_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Create_coupons_req message.
         * @function verify
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Create_coupons_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                if (!$util.isInteger(message.temp_id))
                    return "temp_id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a Create_coupons_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Create_coupons_req} Create_coupons_req
         */
        Create_coupons_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Create_coupons_req)
                return object;
            let message = new $root.coupon.Create_coupons_req();
            if (object.temp_id != null)
                message.temp_id = object.temp_id >>> 0;
            if (object.num != null)
                message.num = object.num >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Create_coupons_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Create_coupons_req
         * @static
         * @param {coupon.Create_coupons_req} message Create_coupons_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Create_coupons_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.temp_id = 0;
                object.num = 0;
            }
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                object.temp_id = message.temp_id;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this Create_coupons_req to JSON.
         * @function toJSON
         * @memberof coupon.Create_coupons_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Create_coupons_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Create_coupons_req;
    })();

    coupon.User_get_coupon_req = (function() {

        /**
         * Properties of a User_get_coupon_req.
         * @memberof coupon
         * @interface IUser_get_coupon_req
         * @property {number|null} [temp_id] User_get_coupon_req temp_id
         * @property {number|null} [user_id] User_get_coupon_req user_id
         */

        /**
         * Constructs a new User_get_coupon_req.
         * @memberof coupon
         * @classdesc Represents a User_get_coupon_req.
         * @implements IUser_get_coupon_req
         * @constructor
         * @param {coupon.IUser_get_coupon_req=} [properties] Properties to set
         */
        function User_get_coupon_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User_get_coupon_req temp_id.
         * @member {number} temp_id
         * @memberof coupon.User_get_coupon_req
         * @instance
         */
        User_get_coupon_req.prototype.temp_id = 0;

        /**
         * User_get_coupon_req user_id.
         * @member {number} user_id
         * @memberof coupon.User_get_coupon_req
         * @instance
         */
        User_get_coupon_req.prototype.user_id = 0;

        /**
         * Creates a new User_get_coupon_req instance using the specified properties.
         * @function create
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {coupon.IUser_get_coupon_req=} [properties] Properties to set
         * @returns {coupon.User_get_coupon_req} User_get_coupon_req instance
         */
        User_get_coupon_req.create = function create(properties) {
            return new User_get_coupon_req(properties);
        };

        /**
         * Encodes the specified User_get_coupon_req message. Does not implicitly {@link coupon.User_get_coupon_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {coupon.User_get_coupon_req} message User_get_coupon_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_get_coupon_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.temp_id != null && Object.hasOwnProperty.call(message, "temp_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.temp_id);
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.user_id);
            return writer;
        };

        /**
         * Encodes the specified User_get_coupon_req message, length delimited. Does not implicitly {@link coupon.User_get_coupon_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {coupon.User_get_coupon_req} message User_get_coupon_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_get_coupon_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User_get_coupon_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.User_get_coupon_req} User_get_coupon_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_get_coupon_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.User_get_coupon_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.temp_id = reader.uint32();
                    break;
                case 2:
                    message.user_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User_get_coupon_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.User_get_coupon_req} User_get_coupon_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_get_coupon_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User_get_coupon_req message.
         * @function verify
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User_get_coupon_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                if (!$util.isInteger(message.temp_id))
                    return "temp_id: integer expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            return null;
        };

        /**
         * Creates a User_get_coupon_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.User_get_coupon_req} User_get_coupon_req
         */
        User_get_coupon_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.User_get_coupon_req)
                return object;
            let message = new $root.coupon.User_get_coupon_req();
            if (object.temp_id != null)
                message.temp_id = object.temp_id >>> 0;
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User_get_coupon_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.User_get_coupon_req
         * @static
         * @param {coupon.User_get_coupon_req} message User_get_coupon_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User_get_coupon_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.temp_id = 0;
                object.user_id = 0;
            }
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                object.temp_id = message.temp_id;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            return object;
        };

        /**
         * Converts this User_get_coupon_req to JSON.
         * @function toJSON
         * @memberof coupon.User_get_coupon_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User_get_coupon_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User_get_coupon_req;
    })();

    coupon.Get_user_coupon_infos_req = (function() {

        /**
         * Properties of a Get_user_coupon_infos_req.
         * @memberof coupon
         * @interface IGet_user_coupon_infos_req
         * @property {number|null} [user_id] Get_user_coupon_infos_req user_id
         */

        /**
         * Constructs a new Get_user_coupon_infos_req.
         * @memberof coupon
         * @classdesc Represents a Get_user_coupon_infos_req.
         * @implements IGet_user_coupon_infos_req
         * @constructor
         * @param {coupon.IGet_user_coupon_infos_req=} [properties] Properties to set
         */
        function Get_user_coupon_infos_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Get_user_coupon_infos_req user_id.
         * @member {number} user_id
         * @memberof coupon.Get_user_coupon_infos_req
         * @instance
         */
        Get_user_coupon_infos_req.prototype.user_id = 0;

        /**
         * Creates a new Get_user_coupon_infos_req instance using the specified properties.
         * @function create
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {coupon.IGet_user_coupon_infos_req=} [properties] Properties to set
         * @returns {coupon.Get_user_coupon_infos_req} Get_user_coupon_infos_req instance
         */
        Get_user_coupon_infos_req.create = function create(properties) {
            return new Get_user_coupon_infos_req(properties);
        };

        /**
         * Encodes the specified Get_user_coupon_infos_req message. Does not implicitly {@link coupon.Get_user_coupon_infos_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {coupon.Get_user_coupon_infos_req} message Get_user_coupon_infos_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_user_coupon_infos_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            return writer;
        };

        /**
         * Encodes the specified Get_user_coupon_infos_req message, length delimited. Does not implicitly {@link coupon.Get_user_coupon_infos_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {coupon.Get_user_coupon_infos_req} message Get_user_coupon_infos_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_user_coupon_infos_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Get_user_coupon_infos_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Get_user_coupon_infos_req} Get_user_coupon_infos_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_user_coupon_infos_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Get_user_coupon_infos_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Get_user_coupon_infos_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Get_user_coupon_infos_req} Get_user_coupon_infos_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_user_coupon_infos_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Get_user_coupon_infos_req message.
         * @function verify
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Get_user_coupon_infos_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            return null;
        };

        /**
         * Creates a Get_user_coupon_infos_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Get_user_coupon_infos_req} Get_user_coupon_infos_req
         */
        Get_user_coupon_infos_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Get_user_coupon_infos_req)
                return object;
            let message = new $root.coupon.Get_user_coupon_infos_req();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Get_user_coupon_infos_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Get_user_coupon_infos_req
         * @static
         * @param {coupon.Get_user_coupon_infos_req} message Get_user_coupon_infos_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Get_user_coupon_infos_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.user_id = 0;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            return object;
        };

        /**
         * Converts this Get_user_coupon_infos_req to JSON.
         * @function toJSON
         * @memberof coupon.Get_user_coupon_infos_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Get_user_coupon_infos_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Get_user_coupon_infos_req;
    })();

    /**
     * Coupon_type enum.
     * @name coupon.Coupon_type
     * @enum {number}
     * @property {number} Coupon_type_begin=0 Coupon_type_begin value
     * @property {number} Coupon_type_exp=1 体验
     * @property {number} Coupon_type_discount=2 折扣
     * @property {number} Coupon_type_quantity=3 定额
     * @property {number} Coupon_type_end=4 Coupon_type_end value
     */
    coupon.Coupon_type = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Coupon_type_begin"] = 0;
        values[valuesById[1] = "Coupon_type_exp"] = 1;
        values[valuesById[2] = "Coupon_type_discount"] = 2;
        values[valuesById[3] = "Coupon_type_quantity"] = 3;
        values[valuesById[4] = "Coupon_type_end"] = 4;
        return values;
    })();

    coupon.Coupon_info = (function() {

        /**
         * Properties of a Coupon_info.
         * @memberof coupon
         * @interface ICoupon_info
         * @property {number|null} [id] Coupon_info id
         * @property {number|null} [temp_id] Coupon_info temp_id
         * @property {number|null} [user_id] Coupon_info user_id
         * @property {string|null} [name] Coupon_info name
         * @property {number|null} [type] Coupon_info type
         * @property {number|null} [discount] Coupon_info discount
         * @property {number|null} [max_value] Coupon_info max_value
         * @property {number|null} [value] Coupon_info value
         * @property {number|null} [enable] Coupon_info enable
         * @property {number|null} [status] Coupon_info status
         * @property {number|null} [starttime] Coupon_info starttime
         * @property {number|null} [endtime] Coupon_info endtime
         * @property {number|null} [createdat] Coupon_info createdat
         */

        /**
         * Constructs a new Coupon_info.
         * @memberof coupon
         * @classdesc Represents a Coupon_info.
         * @implements ICoupon_info
         * @constructor
         * @param {coupon.ICoupon_info=} [properties] Properties to set
         */
        function Coupon_info(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Coupon_info id.
         * @member {number} id
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.id = 0;

        /**
         * Coupon_info temp_id.
         * @member {number} temp_id
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.temp_id = 0;

        /**
         * Coupon_info user_id.
         * @member {number} user_id
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.user_id = 0;

        /**
         * Coupon_info name.
         * @member {string} name
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.name = "";

        /**
         * Coupon_info type.
         * @member {number} type
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.type = 0;

        /**
         * Coupon_info discount.
         * @member {number} discount
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.discount = 0;

        /**
         * Coupon_info max_value.
         * @member {number} max_value
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.max_value = 0;

        /**
         * Coupon_info value.
         * @member {number} value
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.value = 0;

        /**
         * Coupon_info enable.
         * @member {number} enable
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.enable = 0;

        /**
         * Coupon_info status.
         * @member {number} status
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.status = 0;

        /**
         * Coupon_info starttime.
         * @member {number} starttime
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.starttime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Coupon_info endtime.
         * @member {number} endtime
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.endtime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Coupon_info createdat.
         * @member {number} createdat
         * @memberof coupon.Coupon_info
         * @instance
         */
        Coupon_info.prototype.createdat = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Coupon_info instance using the specified properties.
         * @function create
         * @memberof coupon.Coupon_info
         * @static
         * @param {coupon.ICoupon_info=} [properties] Properties to set
         * @returns {coupon.Coupon_info} Coupon_info instance
         */
        Coupon_info.create = function create(properties) {
            return new Coupon_info(properties);
        };

        /**
         * Encodes the specified Coupon_info message. Does not implicitly {@link coupon.Coupon_info.verify|verify} messages.
         * @function encode
         * @memberof coupon.Coupon_info
         * @static
         * @param {coupon.Coupon_info} message Coupon_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coupon_info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.temp_id != null && Object.hasOwnProperty.call(message, "temp_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.temp_id);
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.user_id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            if (message.discount != null && Object.hasOwnProperty.call(message, "discount"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.discount);
            if (message.max_value != null && Object.hasOwnProperty.call(message, "max_value"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.max_value);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.value);
            if (message.enable != null && Object.hasOwnProperty.call(message, "enable"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.enable);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
            if (message.starttime != null && Object.hasOwnProperty.call(message, "starttime"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.starttime);
            if (message.endtime != null && Object.hasOwnProperty.call(message, "endtime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.endtime);
            if (message.createdat != null && Object.hasOwnProperty.call(message, "createdat"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.createdat);
            return writer;
        };

        /**
         * Encodes the specified Coupon_info message, length delimited. Does not implicitly {@link coupon.Coupon_info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Coupon_info
         * @static
         * @param {coupon.Coupon_info} message Coupon_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coupon_info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Coupon_info message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Coupon_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Coupon_info} Coupon_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coupon_info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Coupon_info();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.temp_id = reader.uint32();
                    break;
                case 3:
                    message.user_id = reader.uint32();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.discount = reader.double();
                    break;
                case 7:
                    message.max_value = reader.double();
                    break;
                case 8:
                    message.value = reader.double();
                    break;
                case 9:
                    message.enable = reader.int32();
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    message.starttime = reader.int64();
                    break;
                case 12:
                    message.endtime = reader.int64();
                    break;
                case 13:
                    message.createdat = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Coupon_info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Coupon_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Coupon_info} Coupon_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coupon_info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Coupon_info message.
         * @function verify
         * @memberof coupon.Coupon_info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Coupon_info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                if (!$util.isInteger(message.temp_id))
                    return "temp_id: integer expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.discount != null && message.hasOwnProperty("discount"))
                if (typeof message.discount !== "number")
                    return "discount: number expected";
            if (message.max_value != null && message.hasOwnProperty("max_value"))
                if (typeof message.max_value !== "number")
                    return "max_value: number expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            if (message.enable != null && message.hasOwnProperty("enable"))
                if (!$util.isInteger(message.enable))
                    return "enable: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.starttime != null && message.hasOwnProperty("starttime"))
                if (!$util.isInteger(message.starttime) && !(message.starttime && $util.isInteger(message.starttime.low) && $util.isInteger(message.starttime.high)))
                    return "starttime: integer|Long expected";
            if (message.endtime != null && message.hasOwnProperty("endtime"))
                if (!$util.isInteger(message.endtime) && !(message.endtime && $util.isInteger(message.endtime.low) && $util.isInteger(message.endtime.high)))
                    return "endtime: integer|Long expected";
            if (message.createdat != null && message.hasOwnProperty("createdat"))
                if (!$util.isInteger(message.createdat) && !(message.createdat && $util.isInteger(message.createdat.low) && $util.isInteger(message.createdat.high)))
                    return "createdat: integer|Long expected";
            return null;
        };

        /**
         * Creates a Coupon_info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Coupon_info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Coupon_info} Coupon_info
         */
        Coupon_info.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Coupon_info)
                return object;
            let message = new $root.coupon.Coupon_info();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.temp_id != null)
                message.temp_id = object.temp_id >>> 0;
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.discount != null)
                message.discount = Number(object.discount);
            if (object.max_value != null)
                message.max_value = Number(object.max_value);
            if (object.value != null)
                message.value = Number(object.value);
            if (object.enable != null)
                message.enable = object.enable | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.starttime != null)
                if ($util.Long)
                    (message.starttime = $util.Long.fromValue(object.starttime)).unsigned = false;
                else if (typeof object.starttime === "string")
                    message.starttime = parseInt(object.starttime, 10);
                else if (typeof object.starttime === "number")
                    message.starttime = object.starttime;
                else if (typeof object.starttime === "object")
                    message.starttime = new $util.LongBits(object.starttime.low >>> 0, object.starttime.high >>> 0).toNumber();
            if (object.endtime != null)
                if ($util.Long)
                    (message.endtime = $util.Long.fromValue(object.endtime)).unsigned = false;
                else if (typeof object.endtime === "string")
                    message.endtime = parseInt(object.endtime, 10);
                else if (typeof object.endtime === "number")
                    message.endtime = object.endtime;
                else if (typeof object.endtime === "object")
                    message.endtime = new $util.LongBits(object.endtime.low >>> 0, object.endtime.high >>> 0).toNumber();
            if (object.createdat != null)
                if ($util.Long)
                    (message.createdat = $util.Long.fromValue(object.createdat)).unsigned = false;
                else if (typeof object.createdat === "string")
                    message.createdat = parseInt(object.createdat, 10);
                else if (typeof object.createdat === "number")
                    message.createdat = object.createdat;
                else if (typeof object.createdat === "object")
                    message.createdat = new $util.LongBits(object.createdat.low >>> 0, object.createdat.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Coupon_info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Coupon_info
         * @static
         * @param {coupon.Coupon_info} message Coupon_info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Coupon_info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.temp_id = 0;
                object.user_id = 0;
                object.name = "";
                object.type = 0;
                object.discount = 0;
                object.max_value = 0;
                object.value = 0;
                object.enable = 0;
                object.status = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.starttime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.starttime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.endtime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endtime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.createdat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdat = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                object.temp_id = message.temp_id;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.discount != null && message.hasOwnProperty("discount"))
                object.discount = options.json && !isFinite(message.discount) ? String(message.discount) : message.discount;
            if (message.max_value != null && message.hasOwnProperty("max_value"))
                object.max_value = options.json && !isFinite(message.max_value) ? String(message.max_value) : message.max_value;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            if (message.enable != null && message.hasOwnProperty("enable"))
                object.enable = message.enable;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.starttime != null && message.hasOwnProperty("starttime"))
                if (typeof message.starttime === "number")
                    object.starttime = options.longs === String ? String(message.starttime) : message.starttime;
                else
                    object.starttime = options.longs === String ? $util.Long.prototype.toString.call(message.starttime) : options.longs === Number ? new $util.LongBits(message.starttime.low >>> 0, message.starttime.high >>> 0).toNumber() : message.starttime;
            if (message.endtime != null && message.hasOwnProperty("endtime"))
                if (typeof message.endtime === "number")
                    object.endtime = options.longs === String ? String(message.endtime) : message.endtime;
                else
                    object.endtime = options.longs === String ? $util.Long.prototype.toString.call(message.endtime) : options.longs === Number ? new $util.LongBits(message.endtime.low >>> 0, message.endtime.high >>> 0).toNumber() : message.endtime;
            if (message.createdat != null && message.hasOwnProperty("createdat"))
                if (typeof message.createdat === "number")
                    object.createdat = options.longs === String ? String(message.createdat) : message.createdat;
                else
                    object.createdat = options.longs === String ? $util.Long.prototype.toString.call(message.createdat) : options.longs === Number ? new $util.LongBits(message.createdat.low >>> 0, message.createdat.high >>> 0).toNumber() : message.createdat;
            return object;
        };

        /**
         * Converts this Coupon_info to JSON.
         * @function toJSON
         * @memberof coupon.Coupon_info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Coupon_info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Coupon_info;
    })();

    coupon.Get_user_coupon_infos_resp = (function() {

        /**
         * Properties of a Get_user_coupon_infos_resp.
         * @memberof coupon
         * @interface IGet_user_coupon_infos_resp
         * @property {coupon.Common_resp|null} [common_resp] Get_user_coupon_infos_resp common_resp
         * @property {Array.<coupon.Coupon_info>|null} [coupon_infos] Get_user_coupon_infos_resp coupon_infos
         */

        /**
         * Constructs a new Get_user_coupon_infos_resp.
         * @memberof coupon
         * @classdesc Represents a Get_user_coupon_infos_resp.
         * @implements IGet_user_coupon_infos_resp
         * @constructor
         * @param {coupon.IGet_user_coupon_infos_resp=} [properties] Properties to set
         */
        function Get_user_coupon_infos_resp(properties) {
            this.coupon_infos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Get_user_coupon_infos_resp common_resp.
         * @member {coupon.Common_resp|null|undefined} common_resp
         * @memberof coupon.Get_user_coupon_infos_resp
         * @instance
         */
        Get_user_coupon_infos_resp.prototype.common_resp = null;

        /**
         * Get_user_coupon_infos_resp coupon_infos.
         * @member {Array.<coupon.Coupon_info>} coupon_infos
         * @memberof coupon.Get_user_coupon_infos_resp
         * @instance
         */
        Get_user_coupon_infos_resp.prototype.coupon_infos = $util.emptyArray;

        /**
         * Creates a new Get_user_coupon_infos_resp instance using the specified properties.
         * @function create
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {coupon.IGet_user_coupon_infos_resp=} [properties] Properties to set
         * @returns {coupon.Get_user_coupon_infos_resp} Get_user_coupon_infos_resp instance
         */
        Get_user_coupon_infos_resp.create = function create(properties) {
            return new Get_user_coupon_infos_resp(properties);
        };

        /**
         * Encodes the specified Get_user_coupon_infos_resp message. Does not implicitly {@link coupon.Get_user_coupon_infos_resp.verify|verify} messages.
         * @function encode
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {coupon.Get_user_coupon_infos_resp} message Get_user_coupon_infos_resp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_user_coupon_infos_resp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.common_resp != null && Object.hasOwnProperty.call(message, "common_resp"))
                $root.coupon.Common_resp.encode(message.common_resp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.coupon_infos != null && message.coupon_infos.length)
                for (let i = 0; i < message.coupon_infos.length; ++i)
                    $root.coupon.Coupon_info.encode(message.coupon_infos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Get_user_coupon_infos_resp message, length delimited. Does not implicitly {@link coupon.Get_user_coupon_infos_resp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {coupon.Get_user_coupon_infos_resp} message Get_user_coupon_infos_resp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_user_coupon_infos_resp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Get_user_coupon_infos_resp message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Get_user_coupon_infos_resp} Get_user_coupon_infos_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_user_coupon_infos_resp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Get_user_coupon_infos_resp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.common_resp = $root.coupon.Common_resp.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.coupon_infos && message.coupon_infos.length))
                        message.coupon_infos = [];
                    message.coupon_infos.push($root.coupon.Coupon_info.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Get_user_coupon_infos_resp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Get_user_coupon_infos_resp} Get_user_coupon_infos_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_user_coupon_infos_resp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Get_user_coupon_infos_resp message.
         * @function verify
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Get_user_coupon_infos_resp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.common_resp != null && message.hasOwnProperty("common_resp")) {
                let error = $root.coupon.Common_resp.verify(message.common_resp);
                if (error)
                    return "common_resp." + error;
            }
            if (message.coupon_infos != null && message.hasOwnProperty("coupon_infos")) {
                if (!Array.isArray(message.coupon_infos))
                    return "coupon_infos: array expected";
                for (let i = 0; i < message.coupon_infos.length; ++i) {
                    let error = $root.coupon.Coupon_info.verify(message.coupon_infos[i]);
                    if (error)
                        return "coupon_infos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Get_user_coupon_infos_resp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Get_user_coupon_infos_resp} Get_user_coupon_infos_resp
         */
        Get_user_coupon_infos_resp.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Get_user_coupon_infos_resp)
                return object;
            let message = new $root.coupon.Get_user_coupon_infos_resp();
            if (object.common_resp != null) {
                if (typeof object.common_resp !== "object")
                    throw TypeError(".coupon.Get_user_coupon_infos_resp.common_resp: object expected");
                message.common_resp = $root.coupon.Common_resp.fromObject(object.common_resp);
            }
            if (object.coupon_infos) {
                if (!Array.isArray(object.coupon_infos))
                    throw TypeError(".coupon.Get_user_coupon_infos_resp.coupon_infos: array expected");
                message.coupon_infos = [];
                for (let i = 0; i < object.coupon_infos.length; ++i) {
                    if (typeof object.coupon_infos[i] !== "object")
                        throw TypeError(".coupon.Get_user_coupon_infos_resp.coupon_infos: object expected");
                    message.coupon_infos[i] = $root.coupon.Coupon_info.fromObject(object.coupon_infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Get_user_coupon_infos_resp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Get_user_coupon_infos_resp
         * @static
         * @param {coupon.Get_user_coupon_infos_resp} message Get_user_coupon_infos_resp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Get_user_coupon_infos_resp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.coupon_infos = [];
            if (options.defaults)
                object.common_resp = null;
            if (message.common_resp != null && message.hasOwnProperty("common_resp"))
                object.common_resp = $root.coupon.Common_resp.toObject(message.common_resp, options);
            if (message.coupon_infos && message.coupon_infos.length) {
                object.coupon_infos = [];
                for (let j = 0; j < message.coupon_infos.length; ++j)
                    object.coupon_infos[j] = $root.coupon.Coupon_info.toObject(message.coupon_infos[j], options);
            }
            return object;
        };

        /**
         * Converts this Get_user_coupon_infos_resp to JSON.
         * @function toJSON
         * @memberof coupon.Get_user_coupon_infos_resp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Get_user_coupon_infos_resp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Get_user_coupon_infos_resp;
    })();

    coupon.User_order_req = (function() {

        /**
         * Properties of a User_order_req.
         * @memberof coupon
         * @interface IUser_order_req
         * @property {number|null} [user_id] User_order_req user_id
         * @property {number|null} [coupon_id] User_order_req coupon_id
         */

        /**
         * Constructs a new User_order_req.
         * @memberof coupon
         * @classdesc Represents a User_order_req.
         * @implements IUser_order_req
         * @constructor
         * @param {coupon.IUser_order_req=} [properties] Properties to set
         */
        function User_order_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User_order_req user_id.
         * @member {number} user_id
         * @memberof coupon.User_order_req
         * @instance
         */
        User_order_req.prototype.user_id = 0;

        /**
         * User_order_req coupon_id.
         * @member {number} coupon_id
         * @memberof coupon.User_order_req
         * @instance
         */
        User_order_req.prototype.coupon_id = 0;

        /**
         * Creates a new User_order_req instance using the specified properties.
         * @function create
         * @memberof coupon.User_order_req
         * @static
         * @param {coupon.IUser_order_req=} [properties] Properties to set
         * @returns {coupon.User_order_req} User_order_req instance
         */
        User_order_req.create = function create(properties) {
            return new User_order_req(properties);
        };

        /**
         * Encodes the specified User_order_req message. Does not implicitly {@link coupon.User_order_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.User_order_req
         * @static
         * @param {coupon.User_order_req} message User_order_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_order_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            if (message.coupon_id != null && Object.hasOwnProperty.call(message, "coupon_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.coupon_id);
            return writer;
        };

        /**
         * Encodes the specified User_order_req message, length delimited. Does not implicitly {@link coupon.User_order_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.User_order_req
         * @static
         * @param {coupon.User_order_req} message User_order_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_order_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User_order_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.User_order_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.User_order_req} User_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_order_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.User_order_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                case 2:
                    message.coupon_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User_order_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.User_order_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.User_order_req} User_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_order_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User_order_req message.
         * @function verify
         * @memberof coupon.User_order_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User_order_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                if (!$util.isInteger(message.coupon_id))
                    return "coupon_id: integer expected";
            return null;
        };

        /**
         * Creates a User_order_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.User_order_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.User_order_req} User_order_req
         */
        User_order_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.User_order_req)
                return object;
            let message = new $root.coupon.User_order_req();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.coupon_id != null)
                message.coupon_id = object.coupon_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User_order_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.User_order_req
         * @static
         * @param {coupon.User_order_req} message User_order_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User_order_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.user_id = 0;
                object.coupon_id = 0;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                object.coupon_id = message.coupon_id;
            return object;
        };

        /**
         * Converts this User_order_req to JSON.
         * @function toJSON
         * @memberof coupon.User_order_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User_order_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User_order_req;
    })();

    coupon.User_cancel_order_req = (function() {

        /**
         * Properties of a User_cancel_order_req.
         * @memberof coupon
         * @interface IUser_cancel_order_req
         * @property {number|null} [user_id] User_cancel_order_req user_id
         * @property {number|null} [coupon_id] User_cancel_order_req coupon_id
         */

        /**
         * Constructs a new User_cancel_order_req.
         * @memberof coupon
         * @classdesc Represents a User_cancel_order_req.
         * @implements IUser_cancel_order_req
         * @constructor
         * @param {coupon.IUser_cancel_order_req=} [properties] Properties to set
         */
        function User_cancel_order_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User_cancel_order_req user_id.
         * @member {number} user_id
         * @memberof coupon.User_cancel_order_req
         * @instance
         */
        User_cancel_order_req.prototype.user_id = 0;

        /**
         * User_cancel_order_req coupon_id.
         * @member {number} coupon_id
         * @memberof coupon.User_cancel_order_req
         * @instance
         */
        User_cancel_order_req.prototype.coupon_id = 0;

        /**
         * Creates a new User_cancel_order_req instance using the specified properties.
         * @function create
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {coupon.IUser_cancel_order_req=} [properties] Properties to set
         * @returns {coupon.User_cancel_order_req} User_cancel_order_req instance
         */
        User_cancel_order_req.create = function create(properties) {
            return new User_cancel_order_req(properties);
        };

        /**
         * Encodes the specified User_cancel_order_req message. Does not implicitly {@link coupon.User_cancel_order_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {coupon.User_cancel_order_req} message User_cancel_order_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_cancel_order_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            if (message.coupon_id != null && Object.hasOwnProperty.call(message, "coupon_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.coupon_id);
            return writer;
        };

        /**
         * Encodes the specified User_cancel_order_req message, length delimited. Does not implicitly {@link coupon.User_cancel_order_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {coupon.User_cancel_order_req} message User_cancel_order_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_cancel_order_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User_cancel_order_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.User_cancel_order_req} User_cancel_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_cancel_order_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.User_cancel_order_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                case 2:
                    message.coupon_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User_cancel_order_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.User_cancel_order_req} User_cancel_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_cancel_order_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User_cancel_order_req message.
         * @function verify
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User_cancel_order_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                if (!$util.isInteger(message.coupon_id))
                    return "coupon_id: integer expected";
            return null;
        };

        /**
         * Creates a User_cancel_order_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.User_cancel_order_req} User_cancel_order_req
         */
        User_cancel_order_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.User_cancel_order_req)
                return object;
            let message = new $root.coupon.User_cancel_order_req();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.coupon_id != null)
                message.coupon_id = object.coupon_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User_cancel_order_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.User_cancel_order_req
         * @static
         * @param {coupon.User_cancel_order_req} message User_cancel_order_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User_cancel_order_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.user_id = 0;
                object.coupon_id = 0;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                object.coupon_id = message.coupon_id;
            return object;
        };

        /**
         * Converts this User_cancel_order_req to JSON.
         * @function toJSON
         * @memberof coupon.User_cancel_order_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User_cancel_order_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User_cancel_order_req;
    })();

    coupon.User_complete_order_req = (function() {

        /**
         * Properties of a User_complete_order_req.
         * @memberof coupon
         * @interface IUser_complete_order_req
         * @property {number|null} [user_id] User_complete_order_req user_id
         * @property {number|null} [coupon_id] User_complete_order_req coupon_id
         */

        /**
         * Constructs a new User_complete_order_req.
         * @memberof coupon
         * @classdesc Represents a User_complete_order_req.
         * @implements IUser_complete_order_req
         * @constructor
         * @param {coupon.IUser_complete_order_req=} [properties] Properties to set
         */
        function User_complete_order_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User_complete_order_req user_id.
         * @member {number} user_id
         * @memberof coupon.User_complete_order_req
         * @instance
         */
        User_complete_order_req.prototype.user_id = 0;

        /**
         * User_complete_order_req coupon_id.
         * @member {number} coupon_id
         * @memberof coupon.User_complete_order_req
         * @instance
         */
        User_complete_order_req.prototype.coupon_id = 0;

        /**
         * Creates a new User_complete_order_req instance using the specified properties.
         * @function create
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {coupon.IUser_complete_order_req=} [properties] Properties to set
         * @returns {coupon.User_complete_order_req} User_complete_order_req instance
         */
        User_complete_order_req.create = function create(properties) {
            return new User_complete_order_req(properties);
        };

        /**
         * Encodes the specified User_complete_order_req message. Does not implicitly {@link coupon.User_complete_order_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {coupon.User_complete_order_req} message User_complete_order_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_complete_order_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            if (message.coupon_id != null && Object.hasOwnProperty.call(message, "coupon_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.coupon_id);
            return writer;
        };

        /**
         * Encodes the specified User_complete_order_req message, length delimited. Does not implicitly {@link coupon.User_complete_order_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {coupon.User_complete_order_req} message User_complete_order_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User_complete_order_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User_complete_order_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.User_complete_order_req} User_complete_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_complete_order_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.User_complete_order_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                case 2:
                    message.coupon_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User_complete_order_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.User_complete_order_req} User_complete_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User_complete_order_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User_complete_order_req message.
         * @function verify
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User_complete_order_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                if (!$util.isInteger(message.coupon_id))
                    return "coupon_id: integer expected";
            return null;
        };

        /**
         * Creates a User_complete_order_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.User_complete_order_req} User_complete_order_req
         */
        User_complete_order_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.User_complete_order_req)
                return object;
            let message = new $root.coupon.User_complete_order_req();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.coupon_id != null)
                message.coupon_id = object.coupon_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User_complete_order_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.User_complete_order_req
         * @static
         * @param {coupon.User_complete_order_req} message User_complete_order_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User_complete_order_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.user_id = 0;
                object.coupon_id = 0;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                object.coupon_id = message.coupon_id;
            return object;
        };

        /**
         * Converts this User_complete_order_req to JSON.
         * @function toJSON
         * @memberof coupon.User_complete_order_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User_complete_order_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User_complete_order_req;
    })();

    coupon.Enable_coupons_req = (function() {

        /**
         * Properties of an Enable_coupons_req.
         * @memberof coupon
         * @interface IEnable_coupons_req
         * @property {number|null} [temp_id] Enable_coupons_req temp_id
         */

        /**
         * Constructs a new Enable_coupons_req.
         * @memberof coupon
         * @classdesc Represents an Enable_coupons_req.
         * @implements IEnable_coupons_req
         * @constructor
         * @param {coupon.IEnable_coupons_req=} [properties] Properties to set
         */
        function Enable_coupons_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Enable_coupons_req temp_id.
         * @member {number} temp_id
         * @memberof coupon.Enable_coupons_req
         * @instance
         */
        Enable_coupons_req.prototype.temp_id = 0;

        /**
         * Creates a new Enable_coupons_req instance using the specified properties.
         * @function create
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {coupon.IEnable_coupons_req=} [properties] Properties to set
         * @returns {coupon.Enable_coupons_req} Enable_coupons_req instance
         */
        Enable_coupons_req.create = function create(properties) {
            return new Enable_coupons_req(properties);
        };

        /**
         * Encodes the specified Enable_coupons_req message. Does not implicitly {@link coupon.Enable_coupons_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {coupon.Enable_coupons_req} message Enable_coupons_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Enable_coupons_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.temp_id != null && Object.hasOwnProperty.call(message, "temp_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.temp_id);
            return writer;
        };

        /**
         * Encodes the specified Enable_coupons_req message, length delimited. Does not implicitly {@link coupon.Enable_coupons_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {coupon.Enable_coupons_req} message Enable_coupons_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Enable_coupons_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Enable_coupons_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Enable_coupons_req} Enable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Enable_coupons_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Enable_coupons_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.temp_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Enable_coupons_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Enable_coupons_req} Enable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Enable_coupons_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Enable_coupons_req message.
         * @function verify
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Enable_coupons_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                if (!$util.isInteger(message.temp_id))
                    return "temp_id: integer expected";
            return null;
        };

        /**
         * Creates an Enable_coupons_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Enable_coupons_req} Enable_coupons_req
         */
        Enable_coupons_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Enable_coupons_req)
                return object;
            let message = new $root.coupon.Enable_coupons_req();
            if (object.temp_id != null)
                message.temp_id = object.temp_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Enable_coupons_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Enable_coupons_req
         * @static
         * @param {coupon.Enable_coupons_req} message Enable_coupons_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Enable_coupons_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.temp_id = 0;
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                object.temp_id = message.temp_id;
            return object;
        };

        /**
         * Converts this Enable_coupons_req to JSON.
         * @function toJSON
         * @memberof coupon.Enable_coupons_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Enable_coupons_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Enable_coupons_req;
    })();

    coupon.Disable_coupons_req = (function() {

        /**
         * Properties of a Disable_coupons_req.
         * @memberof coupon
         * @interface IDisable_coupons_req
         * @property {number|null} [temp_id] Disable_coupons_req temp_id
         */

        /**
         * Constructs a new Disable_coupons_req.
         * @memberof coupon
         * @classdesc Represents a Disable_coupons_req.
         * @implements IDisable_coupons_req
         * @constructor
         * @param {coupon.IDisable_coupons_req=} [properties] Properties to set
         */
        function Disable_coupons_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Disable_coupons_req temp_id.
         * @member {number} temp_id
         * @memberof coupon.Disable_coupons_req
         * @instance
         */
        Disable_coupons_req.prototype.temp_id = 0;

        /**
         * Creates a new Disable_coupons_req instance using the specified properties.
         * @function create
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {coupon.IDisable_coupons_req=} [properties] Properties to set
         * @returns {coupon.Disable_coupons_req} Disable_coupons_req instance
         */
        Disable_coupons_req.create = function create(properties) {
            return new Disable_coupons_req(properties);
        };

        /**
         * Encodes the specified Disable_coupons_req message. Does not implicitly {@link coupon.Disable_coupons_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {coupon.Disable_coupons_req} message Disable_coupons_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Disable_coupons_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.temp_id != null && Object.hasOwnProperty.call(message, "temp_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.temp_id);
            return writer;
        };

        /**
         * Encodes the specified Disable_coupons_req message, length delimited. Does not implicitly {@link coupon.Disable_coupons_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {coupon.Disable_coupons_req} message Disable_coupons_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Disable_coupons_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Disable_coupons_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Disable_coupons_req} Disable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Disable_coupons_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Disable_coupons_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.temp_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Disable_coupons_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Disable_coupons_req} Disable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Disable_coupons_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Disable_coupons_req message.
         * @function verify
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Disable_coupons_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                if (!$util.isInteger(message.temp_id))
                    return "temp_id: integer expected";
            return null;
        };

        /**
         * Creates a Disable_coupons_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Disable_coupons_req} Disable_coupons_req
         */
        Disable_coupons_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Disable_coupons_req)
                return object;
            let message = new $root.coupon.Disable_coupons_req();
            if (object.temp_id != null)
                message.temp_id = object.temp_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Disable_coupons_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Disable_coupons_req
         * @static
         * @param {coupon.Disable_coupons_req} message Disable_coupons_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Disable_coupons_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.temp_id = 0;
            if (message.temp_id != null && message.hasOwnProperty("temp_id"))
                object.temp_id = message.temp_id;
            return object;
        };

        /**
         * Converts this Disable_coupons_req to JSON.
         * @function toJSON
         * @memberof coupon.Disable_coupons_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Disable_coupons_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Disable_coupons_req;
    })();

    coupon.Get_coupon_info_req = (function() {

        /**
         * Properties of a Get_coupon_info_req.
         * @memberof coupon
         * @interface IGet_coupon_info_req
         * @property {number|null} [coupon_id] Get_coupon_info_req coupon_id
         */

        /**
         * Constructs a new Get_coupon_info_req.
         * @memberof coupon
         * @classdesc Represents a Get_coupon_info_req.
         * @implements IGet_coupon_info_req
         * @constructor
         * @param {coupon.IGet_coupon_info_req=} [properties] Properties to set
         */
        function Get_coupon_info_req(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Get_coupon_info_req coupon_id.
         * @member {number} coupon_id
         * @memberof coupon.Get_coupon_info_req
         * @instance
         */
        Get_coupon_info_req.prototype.coupon_id = 0;

        /**
         * Creates a new Get_coupon_info_req instance using the specified properties.
         * @function create
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {coupon.IGet_coupon_info_req=} [properties] Properties to set
         * @returns {coupon.Get_coupon_info_req} Get_coupon_info_req instance
         */
        Get_coupon_info_req.create = function create(properties) {
            return new Get_coupon_info_req(properties);
        };

        /**
         * Encodes the specified Get_coupon_info_req message. Does not implicitly {@link coupon.Get_coupon_info_req.verify|verify} messages.
         * @function encode
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {coupon.Get_coupon_info_req} message Get_coupon_info_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_coupon_info_req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coupon_id != null && Object.hasOwnProperty.call(message, "coupon_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.coupon_id);
            return writer;
        };

        /**
         * Encodes the specified Get_coupon_info_req message, length delimited. Does not implicitly {@link coupon.Get_coupon_info_req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {coupon.Get_coupon_info_req} message Get_coupon_info_req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_coupon_info_req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Get_coupon_info_req message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Get_coupon_info_req} Get_coupon_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_coupon_info_req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Get_coupon_info_req();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coupon_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Get_coupon_info_req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Get_coupon_info_req} Get_coupon_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_coupon_info_req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Get_coupon_info_req message.
         * @function verify
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Get_coupon_info_req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                if (!$util.isInteger(message.coupon_id))
                    return "coupon_id: integer expected";
            return null;
        };

        /**
         * Creates a Get_coupon_info_req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Get_coupon_info_req} Get_coupon_info_req
         */
        Get_coupon_info_req.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Get_coupon_info_req)
                return object;
            let message = new $root.coupon.Get_coupon_info_req();
            if (object.coupon_id != null)
                message.coupon_id = object.coupon_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Get_coupon_info_req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Get_coupon_info_req
         * @static
         * @param {coupon.Get_coupon_info_req} message Get_coupon_info_req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Get_coupon_info_req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.coupon_id = 0;
            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                object.coupon_id = message.coupon_id;
            return object;
        };

        /**
         * Converts this Get_coupon_info_req to JSON.
         * @function toJSON
         * @memberof coupon.Get_coupon_info_req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Get_coupon_info_req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Get_coupon_info_req;
    })();

    coupon.Get_coupon_info_resp = (function() {

        /**
         * Properties of a Get_coupon_info_resp.
         * @memberof coupon
         * @interface IGet_coupon_info_resp
         * @property {coupon.Coupon_info|null} [coupon_info] Get_coupon_info_resp coupon_info
         */

        /**
         * Constructs a new Get_coupon_info_resp.
         * @memberof coupon
         * @classdesc Represents a Get_coupon_info_resp.
         * @implements IGet_coupon_info_resp
         * @constructor
         * @param {coupon.IGet_coupon_info_resp=} [properties] Properties to set
         */
        function Get_coupon_info_resp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Get_coupon_info_resp coupon_info.
         * @member {coupon.Coupon_info|null|undefined} coupon_info
         * @memberof coupon.Get_coupon_info_resp
         * @instance
         */
        Get_coupon_info_resp.prototype.coupon_info = null;

        /**
         * Creates a new Get_coupon_info_resp instance using the specified properties.
         * @function create
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {coupon.IGet_coupon_info_resp=} [properties] Properties to set
         * @returns {coupon.Get_coupon_info_resp} Get_coupon_info_resp instance
         */
        Get_coupon_info_resp.create = function create(properties) {
            return new Get_coupon_info_resp(properties);
        };

        /**
         * Encodes the specified Get_coupon_info_resp message. Does not implicitly {@link coupon.Get_coupon_info_resp.verify|verify} messages.
         * @function encode
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {coupon.Get_coupon_info_resp} message Get_coupon_info_resp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_coupon_info_resp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coupon_info != null && Object.hasOwnProperty.call(message, "coupon_info"))
                $root.coupon.Coupon_info.encode(message.coupon_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Get_coupon_info_resp message, length delimited. Does not implicitly {@link coupon.Get_coupon_info_resp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {coupon.Get_coupon_info_resp} message Get_coupon_info_resp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get_coupon_info_resp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Get_coupon_info_resp message from the specified reader or buffer.
         * @function decode
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coupon.Get_coupon_info_resp} Get_coupon_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_coupon_info_resp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.coupon.Get_coupon_info_resp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coupon_info = $root.coupon.Coupon_info.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Get_coupon_info_resp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coupon.Get_coupon_info_resp} Get_coupon_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get_coupon_info_resp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Get_coupon_info_resp message.
         * @function verify
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Get_coupon_info_resp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coupon_info != null && message.hasOwnProperty("coupon_info")) {
                let error = $root.coupon.Coupon_info.verify(message.coupon_info);
                if (error)
                    return "coupon_info." + error;
            }
            return null;
        };

        /**
         * Creates a Get_coupon_info_resp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coupon.Get_coupon_info_resp} Get_coupon_info_resp
         */
        Get_coupon_info_resp.fromObject = function fromObject(object) {
            if (object instanceof $root.coupon.Get_coupon_info_resp)
                return object;
            let message = new $root.coupon.Get_coupon_info_resp();
            if (object.coupon_info != null) {
                if (typeof object.coupon_info !== "object")
                    throw TypeError(".coupon.Get_coupon_info_resp.coupon_info: object expected");
                message.coupon_info = $root.coupon.Coupon_info.fromObject(object.coupon_info);
            }
            return message;
        };

        /**
         * Creates a plain object from a Get_coupon_info_resp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coupon.Get_coupon_info_resp
         * @static
         * @param {coupon.Get_coupon_info_resp} message Get_coupon_info_resp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Get_coupon_info_resp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.coupon_info = null;
            if (message.coupon_info != null && message.hasOwnProperty("coupon_info"))
                object.coupon_info = $root.coupon.Coupon_info.toObject(message.coupon_info, options);
            return object;
        };

        /**
         * Converts this Get_coupon_info_resp to JSON.
         * @function toJSON
         * @memberof coupon.Get_coupon_info_resp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Get_coupon_info_resp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Get_coupon_info_resp;
    })();

    return coupon;
})();

export { $root as default };
