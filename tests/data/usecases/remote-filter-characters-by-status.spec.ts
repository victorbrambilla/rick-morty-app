import { RemoteFilterCharactersByStatus } from '../../../src/data/usecases'
import { FilterCharactersByStatus } from '../../../src/domain/usecases'
import { CharactersRepository } from '../../../src/infra/db/repository'
import { api } from '../../../src/infra/http'

const makeSut = (): FilterCharactersByStatus => {
  const sut = new RemoteFilterCharactersByStatus(new CharactersRepository(api))
  return sut
}

describe('UseCase - filterCharactersByStatus', () => {
  it('should return a array of Alive characters', async () => {
    const sut = makeSut()
    const characters = await sut.perform({
      page: 1,
      status: 'Alive',
    })
    expect(characters?.results).toBeInstanceOf(Array)
    characters?.results.forEach((element) => {
      expect(element.status).toBe('Alive')
    })
  })
})
