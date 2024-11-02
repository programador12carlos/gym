"use strict";
exports.__esModule = true;
exports.makeregisterservice = void 0;
var prisma_create_repositories_1 = require("@/repositories/prisma-create-repositories");
var register_1 = require("../register");
function makeregisterservice() {
    var operacao_no_baco = new prisma_create_repositories_1.Operacao_no_Banco();
    var registerUseCase = new register_1.RegistarUserCase(operacao_no_baco);
    return registerUseCase;
}
exports.makeregisterservice = makeregisterservice;
