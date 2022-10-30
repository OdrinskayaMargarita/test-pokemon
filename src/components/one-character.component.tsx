import React from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import img from '../images/img.png';
import { asyncGetOneCharacter } from "../redux/actions/list-of-characters.action";
import { useAppDispatch } from "../redux/store/store";

interface ICharacter {
  name: string;
  url: string;
  handleModalVisible: () => void;
}

export const OneCharacterComponent: React.FC<ICharacter> = ({
  name,
  url, handleModalVisible
}) => {
  const dispatch = useAppDispatch();


  const handleOpenModal = () => {
    const idPokemon = url.split('/').slice(-2, -1).join();
    dispatch(asyncGetOneCharacter(idPokemon));
    handleModalVisible();
  };

  return (
      <Grid item md={3} xs={6}>
        <div style={{ textAlign: "center" }} onClick={handleOpenModal}>
          <img src={img} alt="Logo" style={{ width: 100, height: 100 }}/>
          <Typography variant="subtitle1" gutterBottom>{name}</Typography>
        </div>
      </Grid>
  );
};
