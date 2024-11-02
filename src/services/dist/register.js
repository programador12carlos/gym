"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
exports.RegistarUserCase = void 0;
var bcryptjs_1 = require("bcryptjs");
var erro_email_1 = require("./erros/erro-email");
// [x] criacao da funçao principal Register use case
var RegistarUserCase = /** @class */ (function () {
    function RegistarUserCase(funcoesdorepositorio) {
        this.funcoesdorepositorio = funcoesdorepositorio;
    }
    /*
      condiçoes para a criacao do usuario
  -------------------------------------------------------------------------------
    [x] verificar se o email existe
    [x] criar senha e criptografar senha com bcrypt
    [x] verificar a existencia de email
      */
    RegistarUserCase.prototype.execute = function (_a) {
        var name = _a.name, email = _a.email, password = _a.password;
        return __awaiter(this, void 0, Promise, function () {
            var password_hash, userEmail, usuario;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, bcryptjs_1["default"].hash(password, 6)
                        // [x] verificar a existencia de email
                    ];
                    case 1:
                        password_hash = _b.sent();
                        return [4 /*yield*/, this.funcoesdorepositorio.procurarGmailUsuario(email)];
                    case 2:
                        userEmail = _b.sent();
                        if (userEmail) {
                            throw new erro_email_1.VerificarEmailUsuario();
                        }
                        return [4 /*yield*/, this.funcoesdorepositorio.criar({
                                name: name,
                                email: email,
                                password_has: password_hash
                            })];
                    case 3:
                        usuario = _b.sent();
                        return [2 /*return*/, {
                                usuario: usuario
                            }];
                }
            });
        });
    };
    return RegistarUserCase;
}());
exports.RegistarUserCase = RegistarUserCase;
