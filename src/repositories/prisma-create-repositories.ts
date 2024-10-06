import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { FuncoesDoRepositorio } from './uso-repositorio'

// Class para manipulação directa no banco de dados

export class Operacao_no_Banco implements FuncoesDoRepositorio {
  /*
Funçoes do banco 
----------------------------------------------------------------------------
[x] Procurar user pelo id no banco
[x] Procurar user pelo email no banco
[x] Criar user no banco
   */

  // [x] Procurar user pelo id e retorna o user
  async procurarIdUsuario(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return user
  }

  // [x] Procurar o user pelo emaile retornar user
  async procurarGmailUsuario(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  // [x] Criar usuario e retornar usuario
  async criar(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }
}
