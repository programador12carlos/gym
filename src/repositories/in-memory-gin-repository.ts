import { Gin } from '@prisma/client'
import { FuncoesDoRepositorioGym } from './uso-repositories-gyn'

// Criar um banco de dados local para testes
export class InMemoryGinRepository implements FuncoesDoRepositorioGym {
  // criar um array para armazenar os dados com type user
  public items: Gin[] = []

  /*
Funçoes do banco 
----------------------------------------------------------------------------
[x] Procurar user pelo id no banco
[x] Criar user no banco
   */

  // [x] Procurar user pelo id e retorna o user
  ProcurarId(id: string): Promise<Gin | null> {
    const procurarid = this.items.find((item) => item.id === id)

    if (!procurarid) {
      return Promise.resolve(null)
    }
    return Promise.resolve(procurarid)
  }
}
