import React, { useReducer } from 'react';
import axios from 'axios';
import PaymentCalenderContext from './paymentCalenderContext';
import paymentCalenderReducer from './paymentCalenderReducer';

import { AUTH_ERROR, EMP_LOADED } from '../types';

const PaymentCalenderState = (props) => {
  const initialState = {
    employee: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(paymentCalenderReducer, initialState);

  const loadEmployee = async () => {
    const accessToken = localStorage.getItem('token');
    try {
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${accessToken}`;
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
      );

      const payment = axios.get(`/api/payments/${id}`);
      const emp = axios.get(`/api/employee/${id}`);

      dispatch({ type: EMP_LOADED, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PaymentCalenderContext.Provider
      value={{
        employee: state.employee,
        loading: state.loading,
        error: state.error,
        loadEmployee,
      }}
    >
      {props.children}
    </PaymentCalenderContext.Provider>
  );
};

export default PaymentCalenderState;
