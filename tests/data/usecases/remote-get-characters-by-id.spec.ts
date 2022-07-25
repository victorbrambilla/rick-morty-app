import { RemoteGetCharactersById } from '../../../src/data/usecases'
import { GetCharacterById } from '../../../src/domain/usecases'
import { CharactersRepository } from '../../../src/infra/db/repository'
import { api } from '../../../src/infra/http'

const makeSut = (): GetCharacterById => {
  const sut = new RemoteGetCharactersById(new CharactersRepository(api))
  return sut
}

describe('UseCase - getCharacterById', () => {
  it('should return a rick character', async () => {
    const sut = makeSut()
    const character = await sut.perform({
      id: 1,
    })
    expect(character.name).toBe('Rick Sanchez')
    expect(character.status).toBe('Alive')
    expect(character.species).toBe('Human')
    expect(character.gender).toBe('Male')
    expect(character.origin.name).toBe('Earth (C-137)')
  })
})
