import { Gin } from '@prisma/client'
// interface com os metodos para aplicaçao no banco de dados
export interface FuncoesDoRepositorioGym {
  // [x] procurar o ginasio pelo id e retornar o ginasio ou null
  ProcurarId(id: string): Promise<Gin | null>
}
