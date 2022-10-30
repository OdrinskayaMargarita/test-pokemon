import React from "react";

import { Pagination } from "@mui/material";

import {
    setCharacterList,
    setPaginationOffset
} from "../../redux/actions/list-of-characters.action";
import { IOneCharacter } from "../../redux/reducers/types";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";

import { getCurrentPokemons } from "./get-current-pokemons.helper";
import { limitPagination } from "./limit-pagination";

export const PaginationComponent = () => {
    const dispatch = useAppDispatch();
    const  { allCharacterList, pagination }  = useAppSelector(({ CharactersReducer }) => CharactersReducer);

    const handlePaginationChange = (event: any, value: number) => {
        const currentOffset = {
            offset: value === 0 ? value : value - 1,
            limit: limitPagination,
        };
        dispatch(setPaginationOffset(currentOffset));
        getCurrentPokemons(allCharacterList, currentOffset);
        const currentList = getCurrentPokemons(allCharacterList, currentOffset);
        dispatch(setCharacterList(currentList as IOneCharacter[]));
    };

    if (allCharacterList?.length <= limitPagination) return <></>;

    return (
        <div className="pagination">
                    <Pagination
                        page={pagination.offset === 0 ? 1 : pagination.offset + 1}
                        count={Math.ceil(allCharacterList.length / limitPagination)}
                        color="primary"
                        onChange={handlePaginationChange}/>
        </div>
    );
};
