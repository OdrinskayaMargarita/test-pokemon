import React, { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { ModalCharacter } from "./components/modal-character.component";
import { OneCharacterComponent } from "./components/one-character.component";
import { PaginationComponent } from "./components/Pagination/pagination.component";
import { SearchField } from "./components/search-field.component";
import {
  asyncGetAllCharacterList, clearActiveCharacter, setActiveCharacter,
} from "./redux/actions/list-of-characters.action";
import { useAppDispatch, useAppSelector } from "./redux/store/store";

export const App = () => {
  const dispatch = useAppDispatch();
  const [isModalVisibility, setIsModalVisibility] = useState<boolean>(false);
  const { characterList }  = useAppSelector(({ CharactersReducer }) => CharactersReducer);

  useEffect(() => {
    dispatch(asyncGetAllCharacterList());
  }, []);

  const closeModal = () => {
    dispatch(clearActiveCharacter());
    setIsModalVisibility(false);
  };

  return (
    <div className="App">
      <Container style={{ paddingBottom: 50, paddingTop: 50 }}>
        <Typography variant='h4'>Pokemons</Typography>
        <Grid container style={{ marginTop: 50, marginBottom: 50 }}>
            <SearchField/>
        </Grid>
        <Grid container>
          {characterList.map((item: {name: string, url: string}, key: number) =>
            <OneCharacterComponent key={key}
                                   name={item.name}
                                   url={item.url} handleModalVisible={() => setIsModalVisibility(!isModalVisibility)}/>)}
        </Grid>
        <Grid container justifyContent={"center"} alignItems={'center'} style={{ marginTop: 50 }}>
          <Grid item>
            <PaginationComponent />
          </Grid>
        </Grid>
      </Container>
      <ModalCharacter modalStatus={isModalVisibility} onClose={closeModal}/>
    </div>
  );
};
