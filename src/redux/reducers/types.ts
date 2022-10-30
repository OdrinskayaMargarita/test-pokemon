export interface IStore {
  list: IListOfCharacter;
}

export interface IListOfCharacter {
  characterList: IOneCharacter[],
  allCharacterList: IOneCharacter[],
  activeCharacter: null | IFullCharacter,
  pagination: IPagination
}

export interface IOneCharacter {
  name: string,
  url: string,
}

export interface IFullCharacter {
  weight: number,
  base_experience: number,
  name: string,
  stats: IStat[],
  types: IType[],
  sprites: {
    back_default: string,
    front_default: string,
    back_shiny: string,
    front_shiny: string,
  }
}

interface IStat {
  base_stat: number
}
interface IType {
  type: { name: string }
}

export interface IPagination {
  offset: number,
  limit: number
}
