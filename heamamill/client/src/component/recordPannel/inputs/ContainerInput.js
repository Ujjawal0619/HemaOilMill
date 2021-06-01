import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  rapper: {
    marginTop: '5px',
    padding: '8px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  title: {
    color: 'rgba(0, 0, 0, 0.54)',
    padding: '0',
    fontSize: '12px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1',
    letterSpacing: '0.00938em',
    textAlign: 'center',
    margin: '12px',
  },
}));

const ContainerInput = (props) => {
  const classes = useStyles();
  const { trigger, containersCount } = props;
  const onChange = (e) => {
    trigger(e.target);
  };

  return (
    <>
      <p className={classes.title}>Containers</p>
      <div className={classes.rapper}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField
              id='standard-number'
              label='15 kg'
              name='fifteen'
              value={containersCount.fifteen}
              onChange={onChange}
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id='standard-number'
              label='10 kg'
              name='ten'
              value={containersCount.ten}
              onChange={onChange}
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id='standard-number'
              label='5 kg'
              name='five'
              value={containersCount.five}
              onChange={onChange}
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContainerInput;
