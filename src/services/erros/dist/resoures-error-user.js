"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ResouresError = void 0;
var ResouresError = /** @class */ (function (_super) {
    __extends(ResouresError, _super);
    function ResouresError() {
        return _super.call(this, 'Erros nas credencias') || this;
    }
    return ResouresError;
}(Error));
exports.ResouresError = ResouresError;
