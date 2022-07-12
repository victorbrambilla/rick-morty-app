import { FilterCharactersByGender } from '../../domain/usecases'
import { FilterCharactersByGenderRepository } from '../protocols/filter-characters-by-gender-repository'

export class RemoteFilterCharactersByGender implements FilterCharactersByGender {
  constructor(
    private readonly filterCharactersByGenderRepository: FilterCharactersByGenderRepository,
  ) {}
  async perform(params: FilterCharactersByGender.Params): Promise<FilterCharactersByGender.Result> {
    const characters = await this.filterCharactersByGenderRepository.filterByGender(params)
    return characters
  }
}
