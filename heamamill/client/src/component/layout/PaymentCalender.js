import React, { useState } from 'react';
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
  cell: {
    height: '1rem',
    borderRadius: '25px',
    background: ' #ddd',
  },
  MuiLinearProgressBar: {
    borderRadius: '25px',
    height: '1rem',
  },
  advance: {
    color: '#fafafa',
    background: '#00c300',
    padding: '2px 5px',
    borderRadius: '4px',
    fontWeight: '800',
  },
  due: {
    color: '#fafafa',
    background: '#ff5555',
    padding: '2px 5px',
    borderRadius: '4px',
    fontWeight: '800',
  },
});

export default function PaymentCalender() {
  const classes = useStyles();
  const [prevStatus, setPrevStatus] = useState({
    advance: 0,
    due: 1000,
  });
  return (
    <>
      <div className={classes.root}>
        {arr.map((ele, i) => (
          <div key={i} className={classes.month}>
            <p className={classes.heading}>{ele.month}</p>
            <BorderLinearProgress
              className={classes.cell}
              // classes={classes.MuiLinearProgressBar}
              variant='determinate'
              value={i * 10 - 10}
            />
          </div>
        ))}
      </div>
      <div style={{ marginLeft: '1.5rem' }}>
        {prevStatus.advance !== 0 && (
          <p>
            Advance payment:{' '}
            <span className={classes.advance}>{prevStatus.advance} ₹</span>
          </p>
        )}
        {prevStatus.due !== 0 && (
          <p>
            Due payment: <span className={classes.due}>{prevStatus.due} ₹</span>
          </p>
        )}
        {prevStatus.advance === prevStatus.due && <p>All Clear</p>}
      </div>
    </>
  );
}
