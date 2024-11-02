import { Gin, Prisma } from '@prisma/client'
import { FuncoesDoRepositorioGym } from './uso-repositories-gyn'
import { randomUUID } from 'crypto'

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
  async ProcurarId(id: string): Promise<Gin | null> {
    const procurarid = this.items.find((item) => item.id === id)

    if (!procurarid) {
      return null
    }
    return procurarid
  }

  async BuscarGym(query: string, pagina: number) {
    return this.items
      .filter((dados) => dados.title.includes(query)) // Usando includes para busca parcial dentro de uma frase
      .slice((pagina - 1) * 20, pagina * 20)
  }

  /*
A função slice em JavaScript é usada para extrair uma porção de um array sem
 modificar o array original. 
Ela retorna uma nova cópia de um segmento do array especificado por índices de
 início e fim.
*/
  CriarGym(data: Prisma.GinCreateInput): Promise<Gin> {
    const gym = {
      id: randomUUID(),
      title: data.title,
      descricption: data.descricption ?? null,
      phone: data.phone ?? null,
      latitule: new Prisma.Decimal(data.longitude.toString()),
      longitude: new Prisma.Decimal(data.latitule.toString()),
    }
    this.items.push(gym)
    return Promise.resolve(gym)
  }
}
