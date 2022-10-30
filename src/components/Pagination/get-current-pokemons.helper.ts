import { IOneCharacter, IPagination } from "../../redux/reducers/types";

export const getCurrentPokemons = (list: IOneCharacter[], pagination: IPagination) => {
    if (!list.length) return;
    const startNumber = pagination.offset * pagination.limit;
    const endNumber = pagination.offset * pagination.limit + pagination.limit;
    const currentListPokemons = list.slice(startNumber, endNumber);
    return currentListPokemons;
};
