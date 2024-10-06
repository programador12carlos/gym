import { Prisma, Checkin } from '@prisma/client'

// interface com os metodos para aplicaçao no banco de dados
export interface FuncoesDoRepositorioCheckin {
  /*
Funçoes do banco 
----------------------------------------------------------------------------
[x] Procurar chekin do usuario no banco
[x] Criar check-in no banco
   */

  // procurar check-in do usuario no banco e retornar o ckeck-in ou null
  procurarDataCheckinUser(userId: string, data: Date): Promise<Checkin | null>

  // efectuar o check-in em uma academia e retornar dados do check-in
  criar(data: Prisma.CheckinUncheckedCreateInput): Promise<Checkin>
}
