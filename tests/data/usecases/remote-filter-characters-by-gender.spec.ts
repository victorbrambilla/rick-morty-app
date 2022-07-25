import { RemoteFilterCharactersByGender } from '../../../src/data/usecases/remote-filter-characters-by-gender'
import { FilterCharactersByGender } from '../../../src/domain/usecases'
import { CharactersRepository } from '../../../src/infra/db/repository'
import { api } from '../../../src/infra/http'

const makeSut = (): FilterCharactersByGender => {
  const sut = new RemoteFilterCharactersByGender(new CharactersRepository(api))
  return sut
}

describe('UseCase - filterCharactersByGender', () => {
  it('should return a male character array', async () => {
    const sut = makeSut()
    const characters = await sut.perform({
      page: 1,
      gender: 'male',
    })
    expect(characters?.results).toBeInstanceOf(Array)
    characters?.results.forEach((element) => {
      expect(element.gender).toBe('Male')
    })
  })
})
