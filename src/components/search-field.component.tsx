import React, { useEffect, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

import {
  asyncGetAllCharacterList,
  setAllCharacterList,
  setPaginationOffset
} from "../redux/actions/list-of-characters.action";
import { useAppDispatch, useAppSelector } from "../redux/store/store";

import { limitPagination } from "./Pagination/limit-pagination";

export const SearchField = () => {
  const dispatch = useAppDispatch();
  const [nameSearch, setNameSearch] = useState('');
  const { allCharacterList } = useAppSelector(({ CharactersReducer }) => CharactersReducer);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameSearch(event.target.value);
  };

  const handleSearch = () => {
    const res = allCharacterList.filter((item: { name: string; }) => item.name.includes(nameSearch));
    dispatch(setPaginationOffset({ offset: 0, limit: limitPagination }));
    dispatch(setAllCharacterList(res));
  };

  const handleClearSearch = () => {
    setNameSearch('');
    dispatch(setPaginationOffset({ offset: 0, limit: limitPagination }));
    dispatch(asyncGetAllCharacterList());
  };

  useEffect(() => {
    if(!nameSearch.length) handleClearSearch();
  },[dispatch, nameSearch]);


  return (
    <Grid container alignItems='center' justifyContent='space-between'>
      <Grid item md={11}>
        <div style={{ position: 'relative' }}>
          <TextField
            style={{ width: '100%' }}
            label="Search"
            value={nameSearch}
            onChange={handleChange}
          />
          <Button style={{ position: "absolute", right: 0, top: 0, bottom: 0, margin: 'auto' }} onClick={handleSearch} disabled={!nameSearch.length}>
            <SearchIcon/>
          </Button>
        </div>
      </Grid>
      <Grid item md={1}>
        <Button onClick={handleClearSearch} variant={'contained'} style={{  marginLeft: 20 }}>Clear</Button>
      </Grid>
    </Grid>
  );
};
