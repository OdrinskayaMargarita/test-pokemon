import { Dispatch } from "redux";

import { api } from "../../api/api";
import { getCurrentPokemons } from "../../components/Pagination/get-current-pokemons.helper";
import { limitPagination } from "../../components/Pagination/limit-pagination";
import { SET_ALL_CHARACTER_LIST, SET_CHARACTER_LIST, SET_ACTIVE_CHARACTER, SET_PAGINATION_OFFSET } from "../constants/Constants";
import { IFullCharacter, IOneCharacter } from "../reducers/types";


export interface IActions {
  type: string;
  data: DataType;
}

type DataType = IOneCharacter[] | IFullCharacter | string | any ;


//Get list of pages
export const setCharacterList = (data: IOneCharacter[]) => ({
  type: SET_CHARACTER_LIST,
  data: data,
});

//Get all list of Pokemon
export const setAllCharacterList = (data: IOneCharacter[]) => ({
  type: SET_ALL_CHARACTER_LIST,
  data: data,
});

export const asyncGetAllCharacterList = () => async (dispatch: Dispatch<IActions>) => {
  await api.getCharacterListPage()
    .then((data: { data: { results: IOneCharacter[] } }) => {
      const { results } = data.data;
      dispatch(setAllCharacterList(results));
      const currentList = getCurrentPokemons(results, {
        offset: 0,
        limit: limitPagination
      });
      dispatch(setCharacterList(currentList as IOneCharacter[]));
    });
};


//Set pagination offset
export const setPaginationOffset = (data: {offset: number, limit: number}) => ({
  type: SET_PAGINATION_OFFSET,
  data: data,
});


//Set Active Pokemon
export const setActiveCharacter = (data: IFullCharacter) => ({
  type: SET_ACTIVE_CHARACTER,
  data: data,
});


//Clear Active Pokemon
export const clearActiveCharacter = () => ({
  type: SET_ACTIVE_CHARACTER,
  data: null,
});



//Get description of one Pokemon
export const asyncGetOneCharacter = (idPokemon: string) => async (dispatch: Dispatch<IActions>) => {
  await api.getOneCharacter(idPokemon)
    .then((data: { data: IFullCharacter  }) => {
      dispatch(setActiveCharacter(data.data));
    });
};
