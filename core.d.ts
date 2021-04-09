declare interface ClassOf<T> {
    new (...args: any[]): T;
}

type int64 = number;
type int32 = number;
type int8 = number;
type int = number;

// event
type BUTTON_CLICK = "click";

type VoidCallback = () => void;

declare interface ArrArgs {
    receiver: any;
    property: string;
    value: any;
    path: string;
}

declare type UpdateData = { newVal: any; oldVal: any; arrArgs: ArrArgs };
declare interface IPresenter {
    update(a: UpdateData, p: IPresenter);
}
