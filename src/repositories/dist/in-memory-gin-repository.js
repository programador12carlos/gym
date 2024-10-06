"use strict";
exports.__esModule = true;
exports.InMemoryGinRepository = void 0;
// Criar um banco de dados local para testes
var InMemoryGinRepository = /** @class */ (function () {
    function InMemoryGinRepository() {
        // criar um array para armazenar os dados com type user
        this.items = [];
    }
    /*
  Funçoes do banco
  ----------------------------------------------------------------------------
  [x] Procurar user pelo id no banco
  [x] Criar user no banco
     */
    // [x] Procurar user pelo id e retorna o user
    InMemoryGinRepository.prototype.ProcurarId = function (id) {
        var procurarid = this.items.find(function (item) { return item.id === id; });
        if (!procurarid) {
            return Promise.resolve(null);
        }
        return Promise.resolve(procurarid);
    };
    return InMemoryGinRepository;
}());
exports.InMemoryGinRepository = InMemoryGinRepository;
