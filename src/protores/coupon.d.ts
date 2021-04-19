import * as $protobuf from "protobufjs";
/** Namespace coupon. */
export namespace coupon {

    /** Represents a Coupon */
    class Coupon extends $protobuf.rpc.Service {

        /**
         * Constructs a new Coupon service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Coupon service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Coupon;

        /**
         * Calls Create_coupon_temp.
         * @param request Create_coupon_temp_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public create_coupon_temp(request: coupon.Create_coupon_temp_req, callback: coupon.Coupon.Create_coupon_tempCallback): void;

        /**
         * Calls Create_coupon_temp.
         * @param request Create_coupon_temp_req message or plain object
         * @returns Promise
         */
        public create_coupon_temp(request: coupon.Create_coupon_temp_req): Promise<coupon.Common_resp>;

        /**
         * Calls Create_coupons.
         * @param request Create_coupons_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public create_coupons(request: coupon.Create_coupons_req, callback: coupon.Coupon.Create_couponsCallback): void;

        /**
         * Calls Create_coupons.
         * @param request Create_coupons_req message or plain object
         * @returns Promise
         */
        public create_coupons(request: coupon.Create_coupons_req): Promise<coupon.Common_resp>;

        /**
         * Calls User_get_coupon.
         * @param request User_get_coupon_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public user_get_coupon(request: coupon.User_get_coupon_req, callback: coupon.Coupon.User_get_couponCallback): void;

        /**
         * Calls User_get_coupon.
         * @param request User_get_coupon_req message or plain object
         * @returns Promise
         */
        public user_get_coupon(request: coupon.User_get_coupon_req): Promise<coupon.Common_resp>;

        /**
         * Calls Get_user_coupon_infos.
         * @param request Get_user_coupon_infos_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Get_user_coupon_infos_resp
         */
        public get_user_coupon_infos(request: coupon.Get_user_coupon_infos_req, callback: coupon.Coupon.Get_user_coupon_infosCallback): void;

        /**
         * Calls Get_user_coupon_infos.
         * @param request Get_user_coupon_infos_req message or plain object
         * @returns Promise
         */
        public get_user_coupon_infos(request: coupon.Get_user_coupon_infos_req): Promise<coupon.Get_user_coupon_infos_resp>;

        /**
         * Calls Get_coupon_info.
         * @param request Get_coupon_info_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Get_coupon_info_resp
         */
        public get_coupon_info(request: coupon.Get_coupon_info_req, callback: coupon.Coupon.Get_coupon_infoCallback): void;

        /**
         * Calls Get_coupon_info.
         * @param request Get_coupon_info_req message or plain object
         * @returns Promise
         */
        public get_coupon_info(request: coupon.Get_coupon_info_req): Promise<coupon.Get_coupon_info_resp>;

        /**
         * Calls User_order.
         * @param request User_order_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public user_order(request: coupon.User_order_req, callback: coupon.Coupon.User_orderCallback): void;

        /**
         * Calls User_order.
         * @param request User_order_req message or plain object
         * @returns Promise
         */
        public user_order(request: coupon.User_order_req): Promise<coupon.Common_resp>;

        /**
         * Calls User_cancel_order.
         * @param request User_cancel_order_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public user_cancel_order(request: coupon.User_cancel_order_req, callback: coupon.Coupon.User_cancel_orderCallback): void;

        /**
         * Calls User_cancel_order.
         * @param request User_cancel_order_req message or plain object
         * @returns Promise
         */
        public user_cancel_order(request: coupon.User_cancel_order_req): Promise<coupon.Common_resp>;

        /**
         * Calls User_complete_order.
         * @param request User_complete_order_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public user_complete_order(request: coupon.User_complete_order_req, callback: coupon.Coupon.User_complete_orderCallback): void;

        /**
         * Calls User_complete_order.
         * @param request User_complete_order_req message or plain object
         * @returns Promise
         */
        public user_complete_order(request: coupon.User_complete_order_req): Promise<coupon.Common_resp>;

        /**
         * Calls Enable_coupons.
         * @param request Enable_coupons_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public enable_coupons(request: coupon.Enable_coupons_req, callback: coupon.Coupon.Enable_couponsCallback): void;

        /**
         * Calls Enable_coupons.
         * @param request Enable_coupons_req message or plain object
         * @returns Promise
         */
        public enable_coupons(request: coupon.Enable_coupons_req): Promise<coupon.Common_resp>;

        /**
         * Calls Disable_coupons.
         * @param request Disable_coupons_req message or plain object
         * @param callback Node-style callback called with the error, if any, and Common_resp
         */
        public disable_coupons(request: coupon.Disable_coupons_req, callback: coupon.Coupon.Disable_couponsCallback): void;

        /**
         * Calls Disable_coupons.
         * @param request Disable_coupons_req message or plain object
         * @returns Promise
         */
        public disable_coupons(request: coupon.Disable_coupons_req): Promise<coupon.Common_resp>;
    }

    namespace Coupon {

        /**
         * Callback as used by {@link coupon.Coupon#create_coupon_temp}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type Create_coupon_tempCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#create_coupons}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type Create_couponsCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#user_get_coupon}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type User_get_couponCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#get_user_coupon_infos}.
         * @param error Error, if any
         * @param [response] Get_user_coupon_infos_resp
         */
        type Get_user_coupon_infosCallback = (error: (Error|null), response?: coupon.Get_user_coupon_infos_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#get_coupon_info}.
         * @param error Error, if any
         * @param [response] Get_coupon_info_resp
         */
        type Get_coupon_infoCallback = (error: (Error|null), response?: coupon.Get_coupon_info_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#user_order}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type User_orderCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#user_cancel_order}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type User_cancel_orderCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#user_complete_order}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type User_complete_orderCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#enable_coupons}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type Enable_couponsCallback = (error: (Error|null), response?: coupon.Common_resp) => void;

        /**
         * Callback as used by {@link coupon.Coupon#disable_coupons}.
         * @param error Error, if any
         * @param [response] Common_resp
         */
        type Disable_couponsCallback = (error: (Error|null), response?: coupon.Common_resp) => void;
    }

    /** Properties of a Common_resp. */
    interface ICommon_resp {

        /** Common_resp Code */
        Code?: (number|null);

        /** Common_resp Msg */
        Msg?: (string|null);

        /** Common_resp Data */
        Data?: (string|null);
    }

    /** Represents a Common_resp. */
    class Common_resp implements ICommon_resp {

        /**
         * Constructs a new Common_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.ICommon_resp);

        /** Common_resp Code. */
        public Code: number;

        /** Common_resp Msg. */
        public Msg: string;

        /** Common_resp Data. */
        public Data: string;

        /**
         * Creates a new Common_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Common_resp instance
         */
        public static create(properties?: coupon.ICommon_resp): coupon.Common_resp;

        /**
         * Encodes the specified Common_resp message. Does not implicitly {@link coupon.Common_resp.verify|verify} messages.
         * @param message Common_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Common_resp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Common_resp message, length delimited. Does not implicitly {@link coupon.Common_resp.verify|verify} messages.
         * @param message Common_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Common_resp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Common_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Common_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Common_resp;

        /**
         * Decodes a Common_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Common_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Common_resp;

        /**
         * Verifies a Common_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Common_resp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Common_resp
         */
        public static fromObject(object: { [k: string]: any }): coupon.Common_resp;

        /**
         * Creates a plain object from a Common_resp message. Also converts values to other types if specified.
         * @param message Common_resp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Common_resp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Common_resp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Create_coupon_temp_req. */
    interface ICreate_coupon_temp_req {

        /** Create_coupon_temp_req name */
        name?: (string|null);

        /** Create_coupon_temp_req type */
        type?: (number|null);

        /** Create_coupon_temp_req discount */
        discount?: (number|null);

        /** Create_coupon_temp_req max_value */
        max_value?: (number|null);

        /** Create_coupon_temp_req value */
        value?: (number|null);

        /** Create_coupon_temp_req enable */
        enable?: (number|null);

        /** Create_coupon_temp_req start_time */
        start_time?: (number|null);

        /** Create_coupon_temp_req end_time */
        end_time?: (number|null);
    }

    /** Represents a Create_coupon_temp_req. */
    class Create_coupon_temp_req implements ICreate_coupon_temp_req {

        /**
         * Constructs a new Create_coupon_temp_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.ICreate_coupon_temp_req);

        /** Create_coupon_temp_req name. */
        public name: string;

        /** Create_coupon_temp_req type. */
        public type: number;

        /** Create_coupon_temp_req discount. */
        public discount: number;

        /** Create_coupon_temp_req max_value. */
        public max_value: number;

        /** Create_coupon_temp_req value. */
        public value: number;

        /** Create_coupon_temp_req enable. */
        public enable: number;

        /** Create_coupon_temp_req start_time. */
        public start_time: number;

        /** Create_coupon_temp_req end_time. */
        public end_time: number;

        /**
         * Creates a new Create_coupon_temp_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Create_coupon_temp_req instance
         */
        public static create(properties?: coupon.ICreate_coupon_temp_req): coupon.Create_coupon_temp_req;

        /**
         * Encodes the specified Create_coupon_temp_req message. Does not implicitly {@link coupon.Create_coupon_temp_req.verify|verify} messages.
         * @param message Create_coupon_temp_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Create_coupon_temp_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Create_coupon_temp_req message, length delimited. Does not implicitly {@link coupon.Create_coupon_temp_req.verify|verify} messages.
         * @param message Create_coupon_temp_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Create_coupon_temp_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Create_coupon_temp_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Create_coupon_temp_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Create_coupon_temp_req;

        /**
         * Decodes a Create_coupon_temp_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Create_coupon_temp_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Create_coupon_temp_req;

        /**
         * Verifies a Create_coupon_temp_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Create_coupon_temp_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Create_coupon_temp_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.Create_coupon_temp_req;

        /**
         * Creates a plain object from a Create_coupon_temp_req message. Also converts values to other types if specified.
         * @param message Create_coupon_temp_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Create_coupon_temp_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Create_coupon_temp_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Create_coupons_req. */
    interface ICreate_coupons_req {

        /** Create_coupons_req temp_id */
        temp_id?: (number|null);

        /** Create_coupons_req num */
        num?: (number|null);
    }

    /** Represents a Create_coupons_req. */
    class Create_coupons_req implements ICreate_coupons_req {

        /**
         * Constructs a new Create_coupons_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.ICreate_coupons_req);

        /** Create_coupons_req temp_id. */
        public temp_id: number;

        /** Create_coupons_req num. */
        public num: number;

        /**
         * Creates a new Create_coupons_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Create_coupons_req instance
         */
        public static create(properties?: coupon.ICreate_coupons_req): coupon.Create_coupons_req;

        /**
         * Encodes the specified Create_coupons_req message. Does not implicitly {@link coupon.Create_coupons_req.verify|verify} messages.
         * @param message Create_coupons_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Create_coupons_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Create_coupons_req message, length delimited. Does not implicitly {@link coupon.Create_coupons_req.verify|verify} messages.
         * @param message Create_coupons_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Create_coupons_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Create_coupons_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Create_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Create_coupons_req;

        /**
         * Decodes a Create_coupons_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Create_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Create_coupons_req;

        /**
         * Verifies a Create_coupons_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Create_coupons_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Create_coupons_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.Create_coupons_req;

        /**
         * Creates a plain object from a Create_coupons_req message. Also converts values to other types if specified.
         * @param message Create_coupons_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Create_coupons_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Create_coupons_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User_get_coupon_req. */
    interface IUser_get_coupon_req {

        /** User_get_coupon_req temp_id */
        temp_id?: (number|null);

        /** User_get_coupon_req user_id */
        user_id?: (number|null);
    }

    /** Represents a User_get_coupon_req. */
    class User_get_coupon_req implements IUser_get_coupon_req {

        /**
         * Constructs a new User_get_coupon_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IUser_get_coupon_req);

        /** User_get_coupon_req temp_id. */
        public temp_id: number;

        /** User_get_coupon_req user_id. */
        public user_id: number;

        /**
         * Creates a new User_get_coupon_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User_get_coupon_req instance
         */
        public static create(properties?: coupon.IUser_get_coupon_req): coupon.User_get_coupon_req;

        /**
         * Encodes the specified User_get_coupon_req message. Does not implicitly {@link coupon.User_get_coupon_req.verify|verify} messages.
         * @param message User_get_coupon_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.User_get_coupon_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User_get_coupon_req message, length delimited. Does not implicitly {@link coupon.User_get_coupon_req.verify|verify} messages.
         * @param message User_get_coupon_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.User_get_coupon_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User_get_coupon_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User_get_coupon_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.User_get_coupon_req;

        /**
         * Decodes a User_get_coupon_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User_get_coupon_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.User_get_coupon_req;

        /**
         * Verifies a User_get_coupon_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User_get_coupon_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User_get_coupon_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.User_get_coupon_req;

        /**
         * Creates a plain object from a User_get_coupon_req message. Also converts values to other types if specified.
         * @param message User_get_coupon_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.User_get_coupon_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User_get_coupon_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Get_user_coupon_infos_req. */
    interface IGet_user_coupon_infos_req {

        /** Get_user_coupon_infos_req user_id */
        user_id?: (number|null);
    }

    /** Represents a Get_user_coupon_infos_req. */
    class Get_user_coupon_infos_req implements IGet_user_coupon_infos_req {

        /**
         * Constructs a new Get_user_coupon_infos_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IGet_user_coupon_infos_req);

        /** Get_user_coupon_infos_req user_id. */
        public user_id: number;

        /**
         * Creates a new Get_user_coupon_infos_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Get_user_coupon_infos_req instance
         */
        public static create(properties?: coupon.IGet_user_coupon_infos_req): coupon.Get_user_coupon_infos_req;

        /**
         * Encodes the specified Get_user_coupon_infos_req message. Does not implicitly {@link coupon.Get_user_coupon_infos_req.verify|verify} messages.
         * @param message Get_user_coupon_infos_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Get_user_coupon_infos_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Get_user_coupon_infos_req message, length delimited. Does not implicitly {@link coupon.Get_user_coupon_infos_req.verify|verify} messages.
         * @param message Get_user_coupon_infos_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Get_user_coupon_infos_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Get_user_coupon_infos_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Get_user_coupon_infos_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Get_user_coupon_infos_req;

        /**
         * Decodes a Get_user_coupon_infos_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Get_user_coupon_infos_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Get_user_coupon_infos_req;

        /**
         * Verifies a Get_user_coupon_infos_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Get_user_coupon_infos_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Get_user_coupon_infos_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.Get_user_coupon_infos_req;

        /**
         * Creates a plain object from a Get_user_coupon_infos_req message. Also converts values to other types if specified.
         * @param message Get_user_coupon_infos_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Get_user_coupon_infos_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Get_user_coupon_infos_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Coupon_type enum. */
    enum Coupon_type {
        Coupon_type_begin = 0,
        Coupon_type_exp = 1,
        Coupon_type_discount = 2,
        Coupon_type_quantity = 3,
        Coupon_type_end = 4
    }

    /** Properties of a Coupon_info. */
    interface ICoupon_info {

        /** Coupon_info id */
        id?: (number|null);

        /** Coupon_info temp_id */
        temp_id?: (number|null);

        /** Coupon_info user_id */
        user_id?: (number|null);

        /** Coupon_info name */
        name?: (string|null);

        /** Coupon_info type */
        type?: (number|null);

        /** Coupon_info discount */
        discount?: (number|null);

        /** Coupon_info max_value */
        max_value?: (number|null);

        /** Coupon_info value */
        value?: (number|null);

        /** Coupon_info enable */
        enable?: (number|null);

        /** Coupon_info status */
        status?: (number|null);

        /** Coupon_info starttime */
        starttime?: (number|null);

        /** Coupon_info endtime */
        endtime?: (number|null);

        /** Coupon_info createdat */
        createdat?: (number|null);
    }

    /** Represents a Coupon_info. */
    class Coupon_info implements ICoupon_info {

        /**
         * Constructs a new Coupon_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.ICoupon_info);

        /** Coupon_info id. */
        public id: number;

        /** Coupon_info temp_id. */
        public temp_id: number;

        /** Coupon_info user_id. */
        public user_id: number;

        /** Coupon_info name. */
        public name: string;

        /** Coupon_info type. */
        public type: number;

        /** Coupon_info discount. */
        public discount: number;

        /** Coupon_info max_value. */
        public max_value: number;

        /** Coupon_info value. */
        public value: number;

        /** Coupon_info enable. */
        public enable: number;

        /** Coupon_info status. */
        public status: number;

        /** Coupon_info starttime. */
        public starttime: number;

        /** Coupon_info endtime. */
        public endtime: number;

        /** Coupon_info createdat. */
        public createdat: number;

        /**
         * Creates a new Coupon_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coupon_info instance
         */
        public static create(properties?: coupon.ICoupon_info): coupon.Coupon_info;

        /**
         * Encodes the specified Coupon_info message. Does not implicitly {@link coupon.Coupon_info.verify|verify} messages.
         * @param message Coupon_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Coupon_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Coupon_info message, length delimited. Does not implicitly {@link coupon.Coupon_info.verify|verify} messages.
         * @param message Coupon_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Coupon_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coupon_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Coupon_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Coupon_info;

        /**
         * Decodes a Coupon_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Coupon_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Coupon_info;

        /**
         * Verifies a Coupon_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Coupon_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Coupon_info
         */
        public static fromObject(object: { [k: string]: any }): coupon.Coupon_info;

        /**
         * Creates a plain object from a Coupon_info message. Also converts values to other types if specified.
         * @param message Coupon_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Coupon_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Coupon_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Get_user_coupon_infos_resp. */
    interface IGet_user_coupon_infos_resp {

        /** Get_user_coupon_infos_resp common_resp */
        common_resp?: (coupon.Common_resp|null);

        /** Get_user_coupon_infos_resp coupon_infos */
        coupon_infos?: (coupon.Coupon_info[]|null);
    }

    /** Represents a Get_user_coupon_infos_resp. */
    class Get_user_coupon_infos_resp implements IGet_user_coupon_infos_resp {

        /**
         * Constructs a new Get_user_coupon_infos_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IGet_user_coupon_infos_resp);

        /** Get_user_coupon_infos_resp common_resp. */
        public common_resp?: (coupon.Common_resp|null);

        /** Get_user_coupon_infos_resp coupon_infos. */
        public coupon_infos: coupon.Coupon_info[];

        /**
         * Creates a new Get_user_coupon_infos_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Get_user_coupon_infos_resp instance
         */
        public static create(properties?: coupon.IGet_user_coupon_infos_resp): coupon.Get_user_coupon_infos_resp;

        /**
         * Encodes the specified Get_user_coupon_infos_resp message. Does not implicitly {@link coupon.Get_user_coupon_infos_resp.verify|verify} messages.
         * @param message Get_user_coupon_infos_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Get_user_coupon_infos_resp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Get_user_coupon_infos_resp message, length delimited. Does not implicitly {@link coupon.Get_user_coupon_infos_resp.verify|verify} messages.
         * @param message Get_user_coupon_infos_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Get_user_coupon_infos_resp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Get_user_coupon_infos_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Get_user_coupon_infos_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Get_user_coupon_infos_resp;

        /**
         * Decodes a Get_user_coupon_infos_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Get_user_coupon_infos_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Get_user_coupon_infos_resp;

        /**
         * Verifies a Get_user_coupon_infos_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Get_user_coupon_infos_resp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Get_user_coupon_infos_resp
         */
        public static fromObject(object: { [k: string]: any }): coupon.Get_user_coupon_infos_resp;

        /**
         * Creates a plain object from a Get_user_coupon_infos_resp message. Also converts values to other types if specified.
         * @param message Get_user_coupon_infos_resp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Get_user_coupon_infos_resp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Get_user_coupon_infos_resp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User_order_req. */
    interface IUser_order_req {

        /** User_order_req user_id */
        user_id?: (number|null);

        /** User_order_req coupon_id */
        coupon_id?: (number|null);
    }

    /** Represents a User_order_req. */
    class User_order_req implements IUser_order_req {

        /**
         * Constructs a new User_order_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IUser_order_req);

        /** User_order_req user_id. */
        public user_id: number;

        /** User_order_req coupon_id. */
        public coupon_id: number;

        /**
         * Creates a new User_order_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User_order_req instance
         */
        public static create(properties?: coupon.IUser_order_req): coupon.User_order_req;

        /**
         * Encodes the specified User_order_req message. Does not implicitly {@link coupon.User_order_req.verify|verify} messages.
         * @param message User_order_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.User_order_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User_order_req message, length delimited. Does not implicitly {@link coupon.User_order_req.verify|verify} messages.
         * @param message User_order_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.User_order_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User_order_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.User_order_req;

        /**
         * Decodes a User_order_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.User_order_req;

        /**
         * Verifies a User_order_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User_order_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User_order_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.User_order_req;

        /**
         * Creates a plain object from a User_order_req message. Also converts values to other types if specified.
         * @param message User_order_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.User_order_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User_order_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User_cancel_order_req. */
    interface IUser_cancel_order_req {

        /** User_cancel_order_req user_id */
        user_id?: (number|null);

        /** User_cancel_order_req coupon_id */
        coupon_id?: (number|null);
    }

    /** Represents a User_cancel_order_req. */
    class User_cancel_order_req implements IUser_cancel_order_req {

        /**
         * Constructs a new User_cancel_order_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IUser_cancel_order_req);

        /** User_cancel_order_req user_id. */
        public user_id: number;

        /** User_cancel_order_req coupon_id. */
        public coupon_id: number;

        /**
         * Creates a new User_cancel_order_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User_cancel_order_req instance
         */
        public static create(properties?: coupon.IUser_cancel_order_req): coupon.User_cancel_order_req;

        /**
         * Encodes the specified User_cancel_order_req message. Does not implicitly {@link coupon.User_cancel_order_req.verify|verify} messages.
         * @param message User_cancel_order_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.User_cancel_order_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User_cancel_order_req message, length delimited. Does not implicitly {@link coupon.User_cancel_order_req.verify|verify} messages.
         * @param message User_cancel_order_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.User_cancel_order_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User_cancel_order_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User_cancel_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.User_cancel_order_req;

        /**
         * Decodes a User_cancel_order_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User_cancel_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.User_cancel_order_req;

        /**
         * Verifies a User_cancel_order_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User_cancel_order_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User_cancel_order_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.User_cancel_order_req;

        /**
         * Creates a plain object from a User_cancel_order_req message. Also converts values to other types if specified.
         * @param message User_cancel_order_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.User_cancel_order_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User_cancel_order_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User_complete_order_req. */
    interface IUser_complete_order_req {

        /** User_complete_order_req user_id */
        user_id?: (number|null);

        /** User_complete_order_req coupon_id */
        coupon_id?: (number|null);
    }

    /** Represents a User_complete_order_req. */
    class User_complete_order_req implements IUser_complete_order_req {

        /**
         * Constructs a new User_complete_order_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IUser_complete_order_req);

        /** User_complete_order_req user_id. */
        public user_id: number;

        /** User_complete_order_req coupon_id. */
        public coupon_id: number;

        /**
         * Creates a new User_complete_order_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User_complete_order_req instance
         */
        public static create(properties?: coupon.IUser_complete_order_req): coupon.User_complete_order_req;

        /**
         * Encodes the specified User_complete_order_req message. Does not implicitly {@link coupon.User_complete_order_req.verify|verify} messages.
         * @param message User_complete_order_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.User_complete_order_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User_complete_order_req message, length delimited. Does not implicitly {@link coupon.User_complete_order_req.verify|verify} messages.
         * @param message User_complete_order_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.User_complete_order_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User_complete_order_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User_complete_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.User_complete_order_req;

        /**
         * Decodes a User_complete_order_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User_complete_order_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.User_complete_order_req;

        /**
         * Verifies a User_complete_order_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User_complete_order_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User_complete_order_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.User_complete_order_req;

        /**
         * Creates a plain object from a User_complete_order_req message. Also converts values to other types if specified.
         * @param message User_complete_order_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.User_complete_order_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User_complete_order_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Enable_coupons_req. */
    interface IEnable_coupons_req {

        /** Enable_coupons_req temp_id */
        temp_id?: (number|null);
    }

    /** Represents an Enable_coupons_req. */
    class Enable_coupons_req implements IEnable_coupons_req {

        /**
         * Constructs a new Enable_coupons_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IEnable_coupons_req);

        /** Enable_coupons_req temp_id. */
        public temp_id: number;

        /**
         * Creates a new Enable_coupons_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Enable_coupons_req instance
         */
        public static create(properties?: coupon.IEnable_coupons_req): coupon.Enable_coupons_req;

        /**
         * Encodes the specified Enable_coupons_req message. Does not implicitly {@link coupon.Enable_coupons_req.verify|verify} messages.
         * @param message Enable_coupons_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Enable_coupons_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Enable_coupons_req message, length delimited. Does not implicitly {@link coupon.Enable_coupons_req.verify|verify} messages.
         * @param message Enable_coupons_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Enable_coupons_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Enable_coupons_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Enable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Enable_coupons_req;

        /**
         * Decodes an Enable_coupons_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Enable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Enable_coupons_req;

        /**
         * Verifies an Enable_coupons_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Enable_coupons_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Enable_coupons_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.Enable_coupons_req;

        /**
         * Creates a plain object from an Enable_coupons_req message. Also converts values to other types if specified.
         * @param message Enable_coupons_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Enable_coupons_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Enable_coupons_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Disable_coupons_req. */
    interface IDisable_coupons_req {

        /** Disable_coupons_req temp_id */
        temp_id?: (number|null);
    }

    /** Represents a Disable_coupons_req. */
    class Disable_coupons_req implements IDisable_coupons_req {

        /**
         * Constructs a new Disable_coupons_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IDisable_coupons_req);

        /** Disable_coupons_req temp_id. */
        public temp_id: number;

        /**
         * Creates a new Disable_coupons_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Disable_coupons_req instance
         */
        public static create(properties?: coupon.IDisable_coupons_req): coupon.Disable_coupons_req;

        /**
         * Encodes the specified Disable_coupons_req message. Does not implicitly {@link coupon.Disable_coupons_req.verify|verify} messages.
         * @param message Disable_coupons_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Disable_coupons_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Disable_coupons_req message, length delimited. Does not implicitly {@link coupon.Disable_coupons_req.verify|verify} messages.
         * @param message Disable_coupons_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Disable_coupons_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Disable_coupons_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Disable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Disable_coupons_req;

        /**
         * Decodes a Disable_coupons_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Disable_coupons_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Disable_coupons_req;

        /**
         * Verifies a Disable_coupons_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Disable_coupons_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Disable_coupons_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.Disable_coupons_req;

        /**
         * Creates a plain object from a Disable_coupons_req message. Also converts values to other types if specified.
         * @param message Disable_coupons_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Disable_coupons_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Disable_coupons_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Get_coupon_info_req. */
    interface IGet_coupon_info_req {

        /** Get_coupon_info_req coupon_id */
        coupon_id?: (number|null);
    }

    /** Represents a Get_coupon_info_req. */
    class Get_coupon_info_req implements IGet_coupon_info_req {

        /**
         * Constructs a new Get_coupon_info_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IGet_coupon_info_req);

        /** Get_coupon_info_req coupon_id. */
        public coupon_id: number;

        /**
         * Creates a new Get_coupon_info_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Get_coupon_info_req instance
         */
        public static create(properties?: coupon.IGet_coupon_info_req): coupon.Get_coupon_info_req;

        /**
         * Encodes the specified Get_coupon_info_req message. Does not implicitly {@link coupon.Get_coupon_info_req.verify|verify} messages.
         * @param message Get_coupon_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Get_coupon_info_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Get_coupon_info_req message, length delimited. Does not implicitly {@link coupon.Get_coupon_info_req.verify|verify} messages.
         * @param message Get_coupon_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Get_coupon_info_req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Get_coupon_info_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Get_coupon_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Get_coupon_info_req;

        /**
         * Decodes a Get_coupon_info_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Get_coupon_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Get_coupon_info_req;

        /**
         * Verifies a Get_coupon_info_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Get_coupon_info_req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Get_coupon_info_req
         */
        public static fromObject(object: { [k: string]: any }): coupon.Get_coupon_info_req;

        /**
         * Creates a plain object from a Get_coupon_info_req message. Also converts values to other types if specified.
         * @param message Get_coupon_info_req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Get_coupon_info_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Get_coupon_info_req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Get_coupon_info_resp. */
    interface IGet_coupon_info_resp {

        /** Get_coupon_info_resp coupon_info */
        coupon_info?: (coupon.Coupon_info|null);
    }

    /** Represents a Get_coupon_info_resp. */
    class Get_coupon_info_resp implements IGet_coupon_info_resp {

        /**
         * Constructs a new Get_coupon_info_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: coupon.IGet_coupon_info_resp);

        /** Get_coupon_info_resp coupon_info. */
        public coupon_info?: (coupon.Coupon_info|null);

        /**
         * Creates a new Get_coupon_info_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Get_coupon_info_resp instance
         */
        public static create(properties?: coupon.IGet_coupon_info_resp): coupon.Get_coupon_info_resp;

        /**
         * Encodes the specified Get_coupon_info_resp message. Does not implicitly {@link coupon.Get_coupon_info_resp.verify|verify} messages.
         * @param message Get_coupon_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coupon.Get_coupon_info_resp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Get_coupon_info_resp message, length delimited. Does not implicitly {@link coupon.Get_coupon_info_resp.verify|verify} messages.
         * @param message Get_coupon_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coupon.Get_coupon_info_resp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Get_coupon_info_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Get_coupon_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coupon.Get_coupon_info_resp;

        /**
         * Decodes a Get_coupon_info_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Get_coupon_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coupon.Get_coupon_info_resp;

        /**
         * Verifies a Get_coupon_info_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Get_coupon_info_resp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Get_coupon_info_resp
         */
        public static fromObject(object: { [k: string]: any }): coupon.Get_coupon_info_resp;

        /**
         * Creates a plain object from a Get_coupon_info_resp message. Also converts values to other types if specified.
         * @param message Get_coupon_info_resp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coupon.Get_coupon_info_resp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Get_coupon_info_resp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
