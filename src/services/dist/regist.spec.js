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
var vitest_1 = require("vitest");
var register_1 = require("./register");
var in_memory_users_repositore_1 = require("../repositories/in-memory-users-repositore");
var bcryptjs_1 = require("bcryptjs");
var erro_email_1 = require("./erros/erro-email");
var userrepository;
var sut;
vitest_1.describe('testando a criacao de usuario', function () {
    vitest_1.beforeEach(function () {
        userrepository = new in_memory_users_repositore_1.InMemoryUserRepository();
        sut = new register_1.RegistarUserCase(userrepository);
    });
    vitest_1.it('deve ser possivel converter a senha para hash', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usuario, itpassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sut.execute({
                        name: 'carlos romao',
                        email: 'cadfjv56h@gmail.com',
                        password: '277323'
                    })];
                case 1:
                    usuario = (_a.sent()).usuario;
                    return [4 /*yield*/, bcryptjs_1["default"].compare('277323', usuario.password_has)];
                case 2:
                    itpassword = _a.sent();
                    vitest_1.expect(itpassword).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('verificar condição de e-mail', function () { return __awaiter(void 0, void 0, void 0, function () {
        var email;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = 'cadfjv56h@gmail.com';
                    return [4 /*yield*/, sut.execute({
                            name: 'carlos romao',
                            email: email,
                            password: '277273'
                        })];
                case 1:
                    _a.sent();
                    vitest_1.expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, sut.execute({
                                        name: 'carlos romao',
                                        email: email,
                                        password: '277323'
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).rejects.toBeInstanceOf(erro_email_1.VerificarEmailUsuario);
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('deve ser possivel criar usuario ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usuario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sut.execute({
                        name: 'carlos romao',
                        email: 'cadfjv56h@gmail.com',
                        password: '277323'
                    })];
                case 1:
                    usuario = (_a.sent()).usuario;
                    return [4 /*yield*/, vitest_1.expect(usuario.id).toEqual(vitest_1.expect.any(String))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
