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
exports.VerificarEmailUsuario = void 0;
var VerificarEmailUsuario = /** @class */ (function (_super) {
    __extends(VerificarEmailUsuario, _super);
    function VerificarEmailUsuario() {
        var _this = _super.call(this, 'email nao existe') || this;
        _this.name = 'verificar email usuario';
        return _this;
    }
    return VerificarEmailUsuario;
}(Error));
exports.VerificarEmailUsuario = VerificarEmailUsuario;
