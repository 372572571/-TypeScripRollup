(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.howLongUntilLunch = {}));
}(this, (function (exports) { 'use strict';

    var Frame = /** @class */ (function () {
        function Frame() {
        }
        Frame.frame = "frame";
        return Frame;
    }());

    exports.Frame = Frame;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
