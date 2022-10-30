import { combineReducers } from "redux";

import { ListOfCharactersReducer } from "./list-of-characters.reducer";

export const rootReducer = combineReducers({ CharactersReducer: ListOfCharactersReducer });
