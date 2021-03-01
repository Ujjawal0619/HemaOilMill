import React, { useReducer } from 'react';
import axios from 'axios';
import InputContext from './inputContext';
import InputReducer from './inputReducer';

import { MUSTARD_POST, SET_TYPE } from '../types';

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
    photo: null,
    identity: null,
    employee: null,
    amount: null,
    expenseType: null,
  };

  const [state, dispatch] = useReducer(InputReducer, initialState); //

  // Methods goes here
  const setType = (type) => {
    dispatch({ type: SET_TYPE, payload: type });
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
        photo: state.photo,
        identity: state.identity,
        employee: state.employee,
        amount: state.amount,
        expenseType: state.expenseType,
        setType,
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputState;
