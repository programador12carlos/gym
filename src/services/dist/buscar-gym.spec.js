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
var buscar_gym_1 = require("./buscar-gym");
var in_memory_gin_repository_1 = require("@/repositories/in-memory-gin-repository");
var crypto_1 = require("crypto");
var bancoDeDados;
var sut;
vitest_1.describe('testes do resumo checkin', function () {
    vitest_1.beforeEach(function () {
        bancoDeDados = new in_memory_gin_repository_1.InMemoryGinRepository();
        sut = new buscar_gym_1.BuscarGin(bancoDeDados);
    });
    vitest_1.it('DEVE SER POSSIVEL OBTER LISTA DE BUSCA', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gymList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bancoDeDados.CriarGym({
                        id: crypto_1.randomUUID(),
                        title: 'type',
                        descricption: 'melhor do mundo',
                        phone: '956467976',
                        latitule: 0,
                        longitude: 0
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, bancoDeDados.CriarGym({
                            id: crypto_1.randomUUID(),
                            title: 'java',
                            descricption: 'melhor do mundo',
                            phone: '95646356',
                            latitule: 0,
                            longitude: 0
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, sut.Buscar({
                            query: 'type',
                            pagina: 1
                        })];
                case 3:
                    gymList = (_a.sent()).gymList;
                    vitest_1.expect(gymList).toHaveLength(1);
                    vitest_1.expect(gymList).toEqual([vitest_1.expect.objectContaining({ title: 'type' })]);
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('DEVE SER POSSIVEL OBTER RESUMO PAGINADO', function () { return __awaiter(void 0, void 0, void 0, function () {
        var i, gymList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i <= 22)) return [3 /*break*/, 4];
                    return [4 /*yield*/, bancoDeDados.CriarGym({
                            title: "type " + i,
                            descricption: 'melhor do mundo',
                            phone: '95646356',
                            latitule: 0,
                            longitude: 0
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, sut.Buscar({
                        query: 'type',
                        pagina: 2
                    })];
                case 5:
                    gymList = (_a.sent()).gymList;
                    vitest_1.expect(gymList).toHaveLength(2);
                    vitest_1.expect(gymList).toEqual([
                        vitest_1.expect.objectContaining({ title: 'type 21' }),
                        vitest_1.expect.objectContaining({ title: 'type 22' }),
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
});
