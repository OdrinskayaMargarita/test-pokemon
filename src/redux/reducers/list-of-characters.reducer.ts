import { limitPagination } from "../../components/Pagination/limit-pagination";
import { IActions } from "../actions/list-of-characters.action";
import {
  SET_CHARACTER_LIST,
  SET_PAGINATION_OFFSET,
  SET_ACTIVE_CHARACTER,
  SET_ALL_CHARACTER_LIST,
} from "../constants/Constants";

import { IStore } from "./types";

type Store = IStore['list'];

const initialState: Store = {
  characterList: [],
  allCharacterList: [],
  activeCharacter: null,
  pagination: {
    offset: 0,
    limit: limitPagination
  }
};


export const ListOfCharactersReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case SET_CHARACTER_LIST: {
      return { ...state, characterList: action.data };
    }
    case SET_ALL_CHARACTER_LIST: {
      return { ...state, allCharacterList: action.data };
    }
    case SET_PAGINATION_OFFSET: {
      return { ...state, pagination: action.data };
    }
    case SET_ACTIVE_CHARACTER: {
      return { ...state, activeCharacter: action.data };
    }
    default:
      return state;
  }
};
