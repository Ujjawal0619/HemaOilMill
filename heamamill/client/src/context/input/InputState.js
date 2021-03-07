import React, { useReducer } from 'react';
import axios from 'axios';
import InputContext from './inputContext';
import InputReducer from './inputReducer';

import { MUSTARD_POST, SET_TYPE, DATA_SENT, SENT_ERROR } from '../types';

const InputState = (props) => {
  const initialState = {
    type: null,
    name: null,
    mobile: null,
    quantity: null,
    rate: null,
    transport: null,
    address: null,
    desc: null,
    containerType: null,
    identity: null,
    employee: null,
    amount: null,
    expenseType: null,
    total: null,
    paid: null,
    due: null,
  };

  const [state, dispatch] = useReducer(InputReducer, initialState); //

  // when clicked on drawer option
  const setType = (type) => {
    dispatch({ type: SET_TYPE, payload: type });
  };

  // when submit form
  const postInput = async (formData, type) => {
    try {
      const accessToken = localStorage.getItem('token');
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${accessToken}`;
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
      );
      const res = await axios.post(`/api/${type}/`, formData);
      dispatch({ type: DATA_SENT, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: SENT_ERROR, payload: err.response });
    }
  };

  return (
    <InputContext.Provider
      value={{
        type: state.type,
        name: state.name,
        mobile: state.mobile,
        quantity: state.quantity,
        rate: state.rate,
        transport: state.transport,
        address: state.address,
        desc: state.desc,
        containerType: state.containerType,
        identity: state.identity,
        employee: state.employee,
        amount: state.amount,
        expenseType: state.expenseType,
        total: state.total,
        paid: state.paid,
        due: state.due,
        setType,
        postInput,
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputState;
