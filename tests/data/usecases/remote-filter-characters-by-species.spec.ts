import { RemoteFilterCharactersBySpecies } from '../../../src/data/usecases'
import { FilterCharactersBySpecies } from '../../../src/domain/usecases'
import { CharactersRepository } from '../../../src/infra/db/repository'
import { api } from '../../../src/infra/http'

const makeSut = (): FilterCharactersBySpecies => {
  const sut = new RemoteFilterCharactersBySpecies(new CharactersRepository(api))
  return sut
}

describe('UseCase - filterCharactersBySpecies', () => {
  it('should return a array of Human ', async () => {
    const sut = makeSut()
    const characters = await sut.perform({
      page: 1,
      species: 'Human',
    })
    expect(characters?.results).toBeInstanceOf(Array)
    characters?.results.forEach((element) => {
      expect(element.species).toContain('Human')
    })
  })

  it('should return a array of Alien ', async () => {
    const sut = makeSut()
    const characters = await sut.perform({
      page: 1,
      species: 'Alien',
    })
    expect(characters?.results).toBeInstanceOf(Array)
    characters?.results.forEach((element) => {
      expect(element.species).toContain('Alien')
    })
  })
})
