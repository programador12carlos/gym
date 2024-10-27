import { beforeEach, describe, expect, it} from 'vitest'
import { InMemoryCheckInRepository } from '../repositories/in-memory-checkin-repositore'
import { CheckinListUser } from './getList-user-checkin'

let bancoDeDados: InMemoryCheckInRepository
let sut: CheckinListUser

describe('testes do resumo checkin', async()=> {
  beforeEach(()=>{
     bancoDeDados = new InMemoryCheckInRepository()
     sut = new CheckinListUser(bancoDeDados)
  })
  it('DEVE SER POSSIVEL OBTER RESUMO DE CHECKIN FEITO PELO USER', async() => {
    await bancoDeDados.Criar({
      user_id:'CR-01',
      gin_id: 'GIN-01',

    })
     await bancoDeDados.Criar({
      user_id:'CR-01',
      gin_id: 'GIN-02', 
    })
   const {CheckinList} = await sut.listar({
    id: 'CR-01',
   })
   expect(CheckinList).toHaveLength(2)

   expect(CheckinList).toEqual([
    expect.objectContaining({gin_id: 'GIN-01' }),
    expect.objectContaining({gin_id: 'GIN-02' }),
   ])
     
  })
})