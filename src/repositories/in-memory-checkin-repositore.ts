import { Prisma, Checkin } from '@prisma/client'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { FuncoesDoRepositorioCheckin } from './uso-repositorio-checkin'
import { randomUUID } from 'crypto'

// Extensão dos plugins necessários para as comparações
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

// Criar um banco de dados local para testes
export class InMemoryCheckInRepository implements FuncoesDoRepositorioCheckin {
  // criar um array para armazenar os dados com type user
  public items: Checkin[] = []

  /*
Funçoes do banco check-in
----------------------------------------------------------------------------
[x] verificar se é possivel efectuar check-in
     na nova academia se baseando na data do check-in anterior
[x] Criar user no banco
   */

  /*  [x] verificar se é possivel efectuar check-in 
  na nova academia se baseando na data do check-in anterior
*/
  procurarDataCheckinUser(userId: string, data: Date): Promise<Checkin | null> {
    const startOfDay = dayjs(data).startOf('day')
    const endOfDay = dayjs(data).endOf('day')
    const verificarCheckinUser = this.items.find((checkin) => {
      const dataOfCadastro = dayjs(checkin.create_time)
      const verificarData =
        dataOfCadastro.isSameOrAfter(startOfDay) &&
        dataOfCadastro.isSameOrBefore(endOfDay)
      return checkin.user_id === userId && verificarData
    })

    return Promise.resolve(verificarCheckinUser || null)
  }

  // [x] Criar user no banco
  async criar(data: Prisma.CheckinUncheckedCreateInput): Promise<Checkin> {
    const checkin = {
      id: randomUUID(),
      create_time: new Date(),
      validade_at: data.validade_at ? new Date(data.validade_at) : null,
      user_id: data.user_id,
      gin_id: data.gin_id,
    }
    this.items.push(checkin)
    return checkin
  }
}
