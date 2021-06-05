import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RecordContext from '../../context/record/recordContext';
import InputContext from '../../context/input/inputContext';
import Button from '@material-ui/core/Button';

const FetchRecord = () => {
  const recordContext = useContext(RecordContext);
  const inputContext = useContext(InputContext);
  const { records, getRecords, loadInputForm, deleteRecord, trigger } =
    recordContext;
  const { type } = inputContext;

  useEffect(() => {
    getRecords(type);
  }, [type, trigger]);

  const useStyles = makeStyles(() => ({
    dataBox: {
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#fff',
      color: '#999',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    tableContainer: {},
    table: {
      width: '100%',
    },
    noDues: {
      color: '#02a802',
      background: '#009e0038',
      borderRadius: '10px',
    },
    dues: {
      color: 'red',
      background: '#ff00002e',
      borderRadius: '10px',
    },
    btn: {
      marginLeft: '1rem',
      marginTop: '1rem',
    },
  }));

  const classes = useStyles();
  let head = null;

  if (records) {
    head = records[0];
  }

  const formateDate = (date) => {
    let dt = new Date(date);
    return dt.toLocaleDateString();
  };

  const update = (e) => {
    loadInputForm(e.currentTarget.value); // populate input
    // PUT request (according to 'loadInput' state, PUT or POST )
    // clear current state
    // fetch updated record
  };

  const onDelete = (e) => {
    deleteRecord(type, e.currentTarget.value);
    e.disable = true;
    // clearRecords();
    // fetch updated reocrd (inside input.js according to type)
  };

  return (
    <div className={classes.dataBox}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='caption table'>
          <caption>
            {records
              ? `last ${records.length} records.`
              : 'no data in this field'}
          </caption>
          {head ? (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>{head.date && 'Date'}</TableCell>
                  <TableCell>{head.name && 'Name'}</TableCell>
                  <TableCell>{head.joining && 'Joining'}</TableCell>
                  <TableCell>{head.mobile && 'Mobile'}</TableCell>
                  <TableCell>{head.quantity && 'Quantity'}</TableCell>
                  <TableCell>{head.rate && 'Rate'}</TableCell>
                  <TableCell>{head.transport && 'Transport'}</TableCell>
                  <TableCell>{head.rate && head.quantity && 'Cost'}</TableCell>
                  <TableCell>{head.containerType && 'Container'}</TableCell>
                  <TableCell>{head.expenseType && 'Type'}</TableCell>
                  <TableCell>{head.amount && 'Amount'}</TableCell>
                  {type === 'dues' ? (
                    <>
                      <TableCell>{head.total && 'Total'}</TableCell>
                      <TableCell>{head.paid && 'Paid'}</TableCell>
                      <TableCell>{head.due && 'Due'}</TableCell>
                    </>
                  ) : (
                    ''
                  )}
                  <TableCell align='center'>{'Update'}</TableCell>
                  <TableCell align='center'>{'Delete'}</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {records &&
                  records.map((obj) => (
                    <TableRow>
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
                        {obj.rate &&
                          obj.quantity &&
                          (
                            parseFloat(obj.rate) * parseFloat(obj.quantity) +
                            parseFloat(obj.transport)
                          ).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {obj.containerType && obj.containerType}
                      </TableCell>
                      <TableCell>
                        {obj.expenseType && obj.expenseType}
                      </TableCell>
                      <TableCell>{obj.amount && obj.amount}</TableCell>
                      {type === 'dues' ? (
                        <>
                          <TableCell>{obj.total && obj.total}</TableCell>
                          <TableCell
                            className={
                              obj.total === obj.paid ? classes.noDues : ''
                            }
                          >
                            {obj.paid && obj.paid}
                          </TableCell>
                          <TableCell
                            className={
                              obj.total !== obj.paid ? classes.dues : ''
                            }
                          >
                            {obj.due && obj.due}
                          </TableCell>
                        </>
                      ) : (
                        ''
                      )}
                      <TableCell align='center'>
                        <Button
                          value={obj.id}
                          variant='contained'
                          onClick={update}
                          className={classes.btn}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          variant='contained'
                          color='secondary'
                          value={obj.id}
                          onClick={onDelete}
                          className={classes.btn}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </>
          ) : (
            <TableHead>
              <TableRow>
                <TableCell>No Data To Show!</TableCell>
              </TableRow>
            </TableHead>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default FetchRecord;
