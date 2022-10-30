import React from "react";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

import { useAppSelector } from "../redux/store/store";


interface IModal {
  modalStatus: boolean;
  onClose: () => void;
}

export const ModalCharacter: React.FC<IModal> = ({ modalStatus = false, onClose }) => {
  const  { activeCharacter } = useAppSelector(({ CharactersReducer }) => CharactersReducer);

  if(!activeCharacter) return <></>;

  return (
    <Modal open={modalStatus} onClose={onClose}>
      <Box style={{ backgroundColor: '#ffffff', width: '70%', height: '70%', top: '50%', margin: 'auto' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Grid container justifyContent='space-around' alignItems={'center'}>
                <Grid item md={5}><img style={{ width: 200 }} src={activeCharacter.sprites.back_default} alt='pokemon'/></Grid>
                <Grid item md={5}><img style={{ width: 200 }} src={activeCharacter.sprites.front_default} alt='pokemon'/></Grid>
                <Grid item md={5}><img style={{ width: 200 }} src={activeCharacter.sprites.back_shiny} alt='pokemon'/></Grid>
                <Grid item md={5}><img style={{ width: 200 }} src={activeCharacter.sprites.front_shiny} alt='pokemon'/></Grid>
              </Grid>
            </Grid>
            <Grid item md={5}>
              <div>
                <p>Name: <b>{activeCharacter.name}</b></p>
                <p>Base Experience:<b>{activeCharacter.base_experience}</b></p>
                <p>Weight:<b>{activeCharacter.weight}</b></p>
                <ul>
                  <p>Stats</p>
                  {activeCharacter.stats.map((item: any, key: number) => <li key={key}>{item.base_stat}</li>)}
                </ul>
                <ul>
                  <p>Types</p>
                  {activeCharacter.types.map((item: any, key: number) => <li key={key}>{item.type.name}</li>)}
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Modal>
  );
};

