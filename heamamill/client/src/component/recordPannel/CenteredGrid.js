import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';
import FetchRecord from './FetchRecord';
import Grid from '@material-ui/core/Grid';
import InputContext from '../../context/input/inputContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  heading: {
    margin: '3.5rem auto',
    marginBottom: '0',
    borderRadius: '5px',
    width: 'fit-content',
    padding: '10px 50px',
    backgroundColor: '#fff',
    color: '#3f51b5',
    fontWeight: '1000',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    textTransform: 'capitalize',
  },
}));

export default function CenteredGrid() {
  const inputContext = useContext(InputContext);
  const { type } = inputContext;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 className={classes.heading}> {type}</h2>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Input />
        </Grid>
        <Grid item xs={12} sm={8}>
          <FetchRecord />
        </Grid>
      </Grid>
    </div>
  );
}
