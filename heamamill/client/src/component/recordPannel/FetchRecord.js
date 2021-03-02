import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RecordContext from '../../context/record/recordContext';

const FetchRecord = () => {
  const recordContext = useContext(RecordContext);
  const { records } = recordContext;
  const useStyles = makeStyles(() => ({
    dataBox: {
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#fff',
      color: '#999',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    table: {
      minWidth: 700,
    },
  }));

  const classes = useStyles();
  const tableHead = [];
  let head = null;
  if (records) {
    head = records[0];
    for (const [key, value] of Object.entries(records[0]))
      if (key !== 'id') if (key !== 'desc') tableHead.push(key);
  }

  const formateDate = (date) => {
    let dt = new Date(date);
    return dt.toLocaleDateString();
  };
  console.log(head);
  return (
    <div className={classes.dataBox}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='caption table'>
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              {/* {tableHead.map((key) => (
                <TableCell style={{ textTransform: 'capitalize' }}>
                  {' '}
                  {key}
                </TableCell>
              ))} */}
              <TableCell>{head.date && 'Date'}</TableCell>
              <TableCell>{head.name && 'Name'}</TableCell>
              <TableCell>{head.joining && 'Joining'}</TableCell>
              <TableCell>{head.mobile && 'Mobile'}</TableCell>
              <TableCell>{head.quantity && 'Quantity'}</TableCell>
              <TableCell>{head.rate && 'Rate'}</TableCell>
              <TableCell>{head.transport && 'Transport'}</TableCell>
              <TableCell>{head.containerType && 'Container'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {records.map((item, index) => {
              return (
                <TableRow key={index}>
                  {item.map((Obj) => (
                    <TableCell align='right'>{Object.value(Obj)}</TableCell>
                  ))}
                </TableRow>
              );
            })} */}
            {records &&
              records.map((obj, index) => (
                <TableRow key={index}>
                  <TableCell>{obj.date && formateDate(obj.date)}</TableCell>
                  <TableCell>{obj.name && obj.name}</TableCell>
                  <TableCell>
                    {obj.joining && formateDate(obj.joining)}
                  </TableCell>
                  <TableCell>{obj.mobile && obj.mobile}</TableCell>
                  <TableCell>{obj.quantity && obj.quantity}</TableCell>
                  <TableCell>{obj.rate && obj.rate}</TableCell>
                  <TableCell>{obj.transport && obj.transport}</TableCell>
                  <TableCell>
                    {obj.containerType && obj.containerType}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FetchRecord;
