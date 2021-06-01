import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 25,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 400 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

// const arr = [0,1,2,3,4,5,6,7,8,9,10,11];
const arr = [
  {
    month: 'Jan',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Feb',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Mar',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Apr',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'May',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Jun',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Jly',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Aug',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Sep',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Oct',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Nov',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
  {
    month: 'Dec',
    bonus: 50,
    salary: 2000,
    payment: 2050,
  },
];
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1rem',
  },
  month: {
    flex: '20%',
    margin: '5px 10px',
  },
  heading: {
    margin: 0,
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',

    fontWeight: 1000,
    color: '#888',
  },
});

export default function PaymentCalender() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {arr.map((ele, i) => (
        <div className={classes.month}>
          <p className={classes.heading}>{ele.month}</p>
          <BorderLinearProgress variant='determinate' value={i * 10 - 10} />
        </div>
      ))}
    </div>
  );
}