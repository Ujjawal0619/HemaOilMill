import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EmployeeListContext from '../../../context/employeeList/employeeListContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: '1rem',
    width: '100%',
  },
}));

export default function EmployeesList() {
  const [id, setId] = useState('');
  const classes = useStyles();

  const employeeListContext = useContext(EmployeeListContext);
  const { employees, setEmp } = employeeListContext;

  const handleChange = (e) => {
    setId(e.target.value);
    if (id !== '') setEmp(id);
  };

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>
          Employees
        </InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={id}
          onChange={handleChange}
          label='Employees'
        >
          <MenuItem value=''>Select Employee</MenuItem>
          {employees?.map((emp) => (
            <MenuItem value={emp.id} key={emp.id}>
              {emp.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
