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
exports.VerificarAuth = void 0;
var VerificarAuth = /** @class */ (function (_super) {
    __extends(VerificarAuth, _super);
    function VerificarAuth() {
        var _this = _super.call(this, 'verifica o email ou senha') || this;
        _this.name = 'verifica o email ou senha';
        return _this;
    }
    return VerificarAuth;
}(Error));
exports.VerificarAuth = VerificarAuth;
