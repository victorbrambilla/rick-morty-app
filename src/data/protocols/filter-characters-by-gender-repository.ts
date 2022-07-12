import { FilterCharactersByGender } from '../../domain/usecases'

export interface FilterCharactersByGenderRepository {
  filterByGender: (
    params: FilterCharactersByGenderRepository.Params,
  ) => Promise<FilterCharactersByGenderRepository.Result>
}

export namespace FilterCharactersByGenderRepository {
  export type Params = FilterCharactersByGender.Params
  export type Result = FilterCharactersByGender.Result
}
