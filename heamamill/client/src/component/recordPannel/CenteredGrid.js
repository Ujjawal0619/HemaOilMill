import React, { useContext } from 'react';
import Input from './Input';
import FetchRecord from './FetchRecord';
import Grid from '@material-ui/core/Grid';
import InputContext from '../../context/input/inputContext';

export default function CenteredGrid() {
  const inputContext = useContext(InputContext);
  const { type } = inputContext;

  return (
    <Grid container spacing={2}>
      {type !== 'dues' && (
        <Grid item xs={12} sm={4}>
          <Input />
        </Grid>
      )}
      <Grid item xs={12} sm={type === 'dues' ? 12 : 8}>
        <FetchRecord />
      </Grid>
    </Grid>
  );
}
