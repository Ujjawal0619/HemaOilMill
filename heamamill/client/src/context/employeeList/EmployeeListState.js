import React, { useReducer } from 'react';
import axios from 'axios';
import EmployeeListContext from './employeeListContext';
import employeeListReducer from './employeeListReducer';

import { EMP_LOADED, SET_EMP } from '../types';

const EmployeeListState = (props) => {
  const initialState = {
    employees: null,
    currentEmp: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(employeeListReducer, initialState);

  const accessToken = localStorage.getItem('token');

  const loadEmployees = async () => {
    try {
      const res = await axios.get(`/api/employees`);
      dispatch({ type: EMP_LOADED, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const setEmp = async (id) => {
    try {
      const res = axios.get(`/api/employees/${id}`);
      dispatch({ type: SET_EMP, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EmployeeListContext.Provider
      value={{
        employees: state.employees,
        loading: state.loading,
        error: state.error,
        loadEmployees,
        setEmp,
      }}
    >
      {props.children}
    </EmployeeListContext.Provider>
  );
};

export default EmployeeListState;
