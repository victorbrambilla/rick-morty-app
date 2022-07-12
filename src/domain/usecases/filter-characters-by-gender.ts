import { CharacterResponseModel } from '../models'

export interface FilterCharactersByGender {
  perform(params: FilterCharactersByGender.Params): Promise<FilterCharactersByGender.Result>
}

export namespace FilterCharactersByGender {
  export type Params = {
    gender: string
    page: number
  }
  export type Result = CharacterResponseModel | null
}
