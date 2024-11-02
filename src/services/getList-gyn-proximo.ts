import { Gin } from '@prisma/client'
import { FuncoesDoRepositorioGym } from '@/repositories/uso-repositories-gyn'

/*
 [x] criaçao das interfaces de entrada e saida da funcao
 -----------------------------------------------------------------------
*/
interface BuscarGymProximoRequest {
  userLatitude: number
  userLongitude: number
}

interface BuscarGymproximoResponse {
  gymList: Gin[]
}
/*
LOGICA POR TRÁS DA RESOLUÇÃO 

[x] - CRIAR AS INTERFACES DE ENTRADA E SAIDA DA FUNCAO BUSCAR QUE RETORNA UMA LISTA
[x] - CRIAR A INTERFACE DE ACESSO AO BANCO DE DADOS 
[x] - CRIAR O METODO NO BANCO DE DADOS 
[x] - FINALIZAR A FUNCAO BUSCAR E FAZER OS TESTES
-----------------------------------------------------------------------------
*/
export class BuscarGin {
  constructor(private FuncoesRepositorio: FuncoesDoRepositorioGym) {}
  // [x] criar a funcao responsavel por buscar ginasio

  async Buscar({
    userLatitude,
    userLongitude,
  }: BuscarGymProximoRequest): Promise<BuscarGymproximoResponse>{
    const gymList = await this.FuncoesRepositorio.BuscarGym(query, pagina)
    return { gymList }
  }
}