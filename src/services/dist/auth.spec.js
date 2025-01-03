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
var in_memory_users_repositore_1 = require("../repositories/in-memory-users-repositore");
var bcryptjs_1 = require("bcryptjs");
var erroauth_1 = require("./erros/erroauth");
var auth_1 = require("./auth");
var BancoDeDados;
var sut;
vitest_1.describe('testes de auth', function () {
    vitest_1.beforeEach(function () {
        BancoDeDados = new in_memory_users_repositore_1.InMemoryUserRepository();
        sut = new auth_1.Auth(BancoDeDados);
    });
    vitest_1.it('O usuario Nao pode se cadastrar com email existente', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vitest_1.expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, sut.execute({
                                        email: 'carlo667@gmail.com',
                                        password: '123456'
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).rejects.toBeInstanceOf(erroauth_1.VerificarAuth)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('O usuario Nao pode se cadastrar com senha errada', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = BancoDeDados).criar;
                    _c = {
                        name: 'carlos romao',
                        email: 'carlos3@gmail.com'
                    };
                    return [4 /*yield*/, bcryptjs_1["default"].hash('123456', 6)];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_c.password_has = _d.sent(),
                            _c)])];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, vitest_1.expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sut.execute({
                                            email: 'carlo667@gmail.com',
                                            password: '123456'
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).rejects.toBeInstanceOf(erroauth_1.VerificarAuth)];
                case 3:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('O usuario deve conseguir se autenticar', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, user;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = BancoDeDados).criar;
                    _c = {
                        name: 'carlos romao',
                        email: 'carlos3@gmail.com'
                    };
                    return [4 /*yield*/, bcryptjs_1["default"].hash('123456', 6)];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_c.password_has = _d.sent(),
                            _c)])];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, sut.execute({
                            email: 'carlos3@gmail.com',
                            password: '123456'
                        })];
                case 3:
                    user = (_d.sent()).user;
                    return [4 /*yield*/, vitest_1.expect(user.id).toEqual(vitest_1.expect.any(String))];
                case 4:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
