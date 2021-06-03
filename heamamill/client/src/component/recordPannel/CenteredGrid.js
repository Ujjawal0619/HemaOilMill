import React, { useContext, useState, useEffect } from 'react';
import Input from './Input';
import FetchRecord from './FetchRecord';
import Grid from '@material-ui/core/Grid';
import InputContext from '../../context/input/inputContext';

export default function CenteredGrid() {
  const inputContext = useContext(InputContext);
  const { type } = inputContext;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Input />
      </Grid>
      <Grid item xs={12}>
        <FetchRecord />
      </Grid>
    </Grid>
  );
}
