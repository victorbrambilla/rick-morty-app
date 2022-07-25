import { RemoteGetCharacters } from '../../../src/data/usecases'
import { GetCharacters } from '../../../src/domain/usecases'
import { CharactersRepository } from '../../../src/infra/db/repository'
import { api } from '../../../src/infra/http'

const makeSut = (): GetCharacters => {
  const sut = new RemoteGetCharacters(new CharactersRepository(api))
  return sut
}

describe('UseCase - getCharacters', () => {
  it('should return an array of characters', async () => {
    const sut = makeSut()
    const characters = await sut.perform({
      page: 1,
    })
    expect(characters.results).toBeInstanceOf(Array)
    expect(characters.results.length).toBeGreaterThan(0)
  })
})
