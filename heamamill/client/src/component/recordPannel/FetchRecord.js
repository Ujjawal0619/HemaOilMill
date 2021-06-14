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
import PaymentCalenderContext from '../../context/paymentCalender/paymentCalenderContext';
import EmployeeListContext from '../../context/employeeList/employeeListContext';
import Button from '@material-ui/core/Button';

const FetchRecord = () => {
  const recordContext = useContext(RecordContext);
  const inputContext = useContext(InputContext);
  const paymentCalenderContext = useContext(PaymentCalenderContext);
  const {
    records,
    getRecords,
    loadInputForm,
    deleteRecord,
    trigger,
    setPaymentToRecord,
  } = recordContext;
  const employeeListContext = useContext(EmployeeListContext);
  const { type } = inputContext;
  const { employeeId, payments, loadPayments, deletePayment } =
    paymentCalenderContext;
  const { currentImp } = employeeListContext;

  useEffect(() => {
    if (type === 'payments') {
      if (payments) setPaymentToRecord(payments);
    } else {
      getRecords(type);
    }
  }, [type, trigger, payments]);

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
    const options = {
      weekday: undefined,
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    let dt = new Date(date);

    //return dt.toLocaleDateString("en-US"); // 9/17/2016
    return dt.toLocaleDateString('en-US', options); // Saturday, September 17, 2016
    // return dt.toLocaleDateString('hi-IN', options); // शनिवार, 17 सितंबर 2016
    // return dt.toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
  };

  const update = (e) => {
    loadInputForm(e.currentTarget.value); // populate input
  };

  const onDelete = (e) => {
    if (type === 'payments') {
      deletePayment(e.currentTarget.value);
    } else {
      deleteRecord(type, e.currentTarget.value);
    }
    e.disable = true;
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
                  {head.date && <TableCell>Date</TableCell>}
                  {head.name && <TableCell>Name</TableCell>}
                  {head.mobile && <TableCell>Mobile</TableCell>}
                  {head.quantity !== undefined && (
                    <TableCell>Quantity</TableCell>
                  )}
                  {head.rate !== undefined && <TableCell>Rate</TableCell>}
                  {head.transport !== undefined && <TableCell>Trans</TableCell>}
                  {head.container && <TableCell>Container</TableCell>}
                  {head.expenseType && <TableCell>Type</TableCell>}
                  {head.salary !== undefined && <TableCell>Salary</TableCell>}
                  {head.amount !== undefined && <TableCell>Amount</TableCell>}
                  {head.total !== undefined && <TableCell> Total</TableCell>}
                  {head.paid !== undefined && <TableCell> Paid</TableCell>}
                  {head.advance !== undefined && <TableCell> Adv</TableCell>}
                  {head.due !== undefined && <TableCell> Due</TableCell>}
                </TableRow>
              </TableHead>

              <TableBody>
                {records &&
                  records.map((obj, index) => (
                    <TableRow key={obj._id}>
                      {obj.date && (
                        <TableCell> {formateDate(obj.date)}</TableCell>
                      )}
                      {obj.name && <TableCell> {obj.name}</TableCell>}
                      {obj.mobile && <TableCell> {obj.mobile}</TableCell>}
                      {obj.quantity !== undefined && (
                        <TableCell> {obj.quantity}</TableCell>
                      )}
                      {obj.rate !== undefined && (
                        <TableCell> {obj.rate}</TableCell>
                      )}
                      {obj.transport !== undefined && (
                        <TableCell> {obj.transport}</TableCell>
                      )}
                      {type === 'containers' && (
                        <TableCell>
                          {obj.container.type && obj.container.type}
                        </TableCell>
                      )}
                      {type === 'oil' && (
                        <TableCell>
                          {obj.container.count &&
                            `5(${obj.container.count.five}) 10(${obj.container.count.ten}) 15(${obj.container.count.fifteen})`}
                        </TableCell>
                      )}
                      {obj.expenseType && (
                        <TableCell>{obj.expenseType}</TableCell>
                      )}
                      {obj.salary !== undefined && (
                        <TableCell>{obj.salary}</TableCell>
                      )}
                      {obj.amount !== undefined && (
                        <TableCell>{obj.amount}</TableCell>
                      )}
                      {obj.paid !== undefined && (
                        <TableCell>{obj.paid}</TableCell>
                      )}
                      {obj.advance !== undefined && (
                        <TableCell>{obj.advance}</TableCell>
                      )}
                      {obj.due !== undefined && (
                        <TableCell>{obj.due}</TableCell>
                      )}
                      {((type === 'payments' && index === 0) ||
                        (type !== 'payments' && type !== 'transactions')) && (
                        <TableCell align='center'>
                          <Button
                            value={obj._id}
                            variant='contained'
                            onClick={update}
                            className={classes.btn}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      )}
                      {type !== 'payments' && type !== 'transactions' && (
                        <TableCell align='center'>
                          <Button
                            variant='contained'
                            color='secondary'
                            value={obj._id}
                            onClick={onDelete}
                            className={classes.btn}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      )}
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
