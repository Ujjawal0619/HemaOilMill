import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputContext from '../../context/input/inputContext';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const Input = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    quantity: '',
    rate: '',
    transport: '',
    address: '',
    desc: '',
    containerType: '15 ltr recycle',
    identity: '',
    employee: '',
    amount: '',
    expenseType: 'Electric Bill',
    total: '',
    paid: '',
    due: '',
  });

  const inputContext = useContext(InputContext);

  const {
    type,
    name,
    mobile,
    quantity,
    rate,
    transport,
    address,
    desc,
    containerType,
    photo,
    identity,
    employee,
    amount,
    expenseType,
    postInput,
  } = inputContext;

  const containers = [
    {
      value: '5 ltr',
      label: '5 ltr',
    },
    {
      value: '10 ltr',
      label: '10 ltr',
    },
    {
      value: '15 ltr',
      label: '15 ltr',
    },
    {
      value: '15 ltr recycle',
      label: '15 ltr recycle',
    },
  ];

  const expenses = [
    {
      value: 'Electric Bill',
      label: 'Electric Bill',
    },
    {
      value: 'Bag',
      label: 'Bag',
    },
    {
      value: 'Machinary',
      label: 'Machinary',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    // let total = ;
    // setFormData({ ...formData, [amount]: total });
    postInput(formData, type);
  };

  const useStyles = makeStyles(() => ({
    dataBox: {
      borderRadius: '8px',
      padding: '15px 15px 4rem 15px',
      backgroundColor: '#fff',
      color: '#999',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    inputField: {
      marginTop: '1rem',
    },
    btn: {
      float: 'right',
      marginLeft: '1rem',
      marginTop: '1rem',
    },
    uploadField: {
      marginTop: '1rem',
      padding: '12px',
      width: '100%',
      border: '1px #ccc solid',
      borderRadius: '4px',
    },
  }));

  const classes = useStyles();

  // Main Input Components
  return (
    <div className={classes.dataBox}>
      <form noValidate autoComplete='off'>
        {/* name */}
        {['mustard', 'oil', 'containers', 'employees', 'cake', 'dues'].includes(
          type
        ) && (
          <TextField
            fullWidth
            onChange={onChange}
            className={classes.inputField}
            id='outlined-text'
            value={formData.name}
            label='Name'
            name='name'
            type='text'
            variant='outlined'
          />
        )}

        {/* mobile */}
        {['mustard', 'oil', 'containers', 'payments', 'cake', 'dues'].includes(
          type
        ) && (
          <TextField
            fullWidth
            onChange={onChange}
            className={classes.inputField}
            id='outlined-number'
            value={formData.mobile}
            label='Phone'
            name='mobile'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
          />
        )}

        {/* quantity */}
        {['mustard', 'oil', 'cake'].includes(type) && (
          <FormControl
            fullWidth
            className={clsx(classes.inputField)}
            variant='outlined'
          >
            <OutlinedInput
              id='outlined-adornment-weight'
              value={formData.weight}
              onChange={onChange}
              name='quantity'
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              aria-describedby='outlined-weight-helper-text'
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
            <FormHelperText id='outlined-weight-helper-text'>
              Weight
            </FormHelperText>
          </FormControl>
        )}

        {/* rate */}
        {['mustard', 'oil', 'containers', 'cake'].includes(type) && (
          <FormControl
            fullWidth
            className={classes.inputField}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-amount'>Rate</InputLabel>
            <OutlinedInput
              id='outlined-adornment-amount'
              value={formData.rate}
              onChange={onChange}
              name='rate'
              startAdornment={
                <InputAdornment position='start'>&#8377;</InputAdornment>
              }
              labelWidth={34}
            />
          </FormControl>
        )}

        {/* transport */}
        {['mustard', 'oil', 'containers', 'cake'].includes(type) && (
          <FormControl
            fullWidth
            className={classes.inputField}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-amount'>
              Transport Charge
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-amount'
              value={formData.transport}
              onChange={onChange}
              name='transport'
              startAdornment={
                <InputAdornment position='start'>&#8377;</InputAdornment>
              }
              labelWidth={130}
            />
          </FormControl>
        )}

        {/* address */}
        {[
          'mustard',
          'oil',
          'containers',
          'employees',
          'payments',
          'cake',
        ].includes(type) && (
          <TextField
            fullWidth
            onChange={onChange}
            className={classes.inputField}
            id='outlined-multiline-static'
            label='Address'
            name='address'
            value={formData.address}
            multiline
            rows={2}
            defaultValue=''
            variant='outlined'
          />
        )}

        {/* containerType  */}
        {['containers'].includes(type) && (
          <TextField
            fullWidth
            onChange={onChange}
            name='containerType'
            className={classes.inputField}
            id='outlined-select-currency-native'
            select
            label='Container Type'
            value={formData.containerType}
            SelectProps={{
              native: true,
            }}
            helperText='Please select container type'
            variant='outlined'
          >
            {containers.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        )}

        {/* identity */}
        {['employees'].includes(type) && (
          <input
            accept='image/*'
            //   style={{ display: 'none' }}
            className={classes.uploadField}
            id='contained-button-file'
            multiple
            type='file'
          />
        )}

        {/* employee */}
        {/* amount */}
        {[
          'mustard',
          'oil',
          'containers',
          'payments',
          'cake',
          'other',
          'dues',
        ].includes(type) && (
          <FormControl
            fullWidth
            className={classes.inputField}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-amount'>
              Total Amount
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-amount'
              value={
                (formData.amount = (
                  parseFloat(formData.quantity === '' ? 0 : formData.quantity) *
                    parseFloat(formData.rate === '' ? 0 : formData.rate) +
                  parseFloat(formData.transport === '' ? 0 : formData.transport)
                ).toFixed(2))
              }
              readOnly
              name='amount'
              startAdornment={
                <InputAdornment position='start'>&#8377;</InputAdornment>
              }
              labelWidth={90}
            />
          </FormControl>
        )}

        {/* expenseType */}
        {['other'].includes(type) && (
          <TextField
            fullWidth
            className={classes.inputField}
            id='outlined-select-currency-native'
            select
            label='Expense Type'
            value={formData.expenseType}
            name='expenseType'
            onChange={onChange}
            SelectProps={{
              native: true,
            }}
            helperText='Please select other expense type'
            variant='outlined'
          >
            {expenses.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        )}

        {/* payed */}
        {['mustard', 'oil', 'containers', 'payments', 'cake'].includes(
          type
        ) && (
          <FormControl
            fullWidth
            className={classes.inputField}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-amount'>
              Paid Amount
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-amount'
              value={formData.paid}
              name='paid'
              onChange={onChange}
              startAdornment={
                <InputAdornment position='start'>&#8377;</InputAdornment>
              }
              labelWidth={90}
            />
          </FormControl>
        )}

        {/* duse */}
        {[
          'mustard',
          'oil',
          'containers',
          'employees',
          'payments',
          'cake',
        ].includes(type) && (
          <FormControl
            fullWidth
            className={classes.inputField}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-amount'>
              Due Amount
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-amount'
              value={
                (formData.due = (
                  parseFloat(formData.amount === '' ? 0 : formData.amount) -
                  parseFloat(formData.paid === '' ? 0 : formData.paid)
                ).toFixed(2))
              }
              name='due'
              readOnly
              startAdornment={
                <InputAdornment position='start'>&#8377;</InputAdornment>
              }
              labelWidth={85}
            />
          </FormControl>
        )}

        {/* desc */}
        {[
          'mustard',
          'oil',
          'containers',
          'employees',
          'payments',
          'cake',
          'other',
          'dues',
        ].includes(type) && (
          <TextField
            fullWidth
            onChange={onChange}
            name='desc'
            value={formData.desc}
            className={classes.inputField}
            id='outlined-multiline-static'
            label='Description'
            multiline
            rows={2}
            defaultValue=''
            variant='outlined'
          />
        )}

        {/* Button */}
        <Button variant='contained' className={classes.btn}>
          Clear
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={onSubmit}
          className={classes.btn}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default Input;
