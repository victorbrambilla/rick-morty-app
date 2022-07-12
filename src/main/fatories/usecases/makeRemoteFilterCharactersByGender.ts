import { RemoteFilterCharactersByGender } from '../../../data/usecases/remote-filter-characters-by-gender'
import { FilterCharactersByGender } from '../../../domain/usecases'
import { CharactersRepository } from '../../../infra/db/repository'
import { api } from '../../../infra/http'

export const makeRemoteFilterCharactersByGender = (): FilterCharactersByGender => {
  return new RemoteFilterCharactersByGender(new CharactersRepository(api))
}
