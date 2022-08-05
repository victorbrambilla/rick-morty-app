import { RemoteFilterCharactersByName } from '../../../src/data/usecases'
import { FilterCharactersByName } from '../../../src/domain/usecases'
import { CharactersRepository } from '../../../src/infra/db/repository'
import { api } from '../../../src/infra/http'

const makeSut = (): FilterCharactersByName => {
  const sut = new RemoteFilterCharactersByName(new CharactersRepository(api))
  return sut
}

describe('UseCase - filterCharactersByName', () => {
  it('should return a array of ricks', async () => {
    const sut = makeSut()
    const characters = await sut.perform({
      page: 1,
      name: 'rick',
    })
    expect(characters?.results).toBeInstanceOf(Array)
    characters?.results.forEach((element) => {
      expect(element.name).toContain('Rick')
    })
  })
})
