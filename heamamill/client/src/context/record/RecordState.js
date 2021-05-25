import React, { useReducer } from 'react';
import axios from 'axios';
import RecordContext from './recordContext';
import RecordReducer from './recordReducer';

import { UPDATE, LOAD_RECORD } from '../types';

const RecordState = (props) => {
  const initialState = {
    records: null,
    loadInput: null,
  };

  const [state, dispatch] = useReducer(RecordReducer, initialState);

  // Methods goes here
  const getRecords = async (type) => {
    const accessToken = localStorage.getItem('token');
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // };
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

      let res = await axios.get(`/api/${type}`);
      if (type === 'payments') {
        try {
          const emp = await axios.get(`/api/employees`);
          const idName = new Map();

          emp.data.map((person) => {
            idName.set(person.id, person.name);
          });

          res.data.forEach((payment) => {
            payment.name = idName.get(parseInt(payment.employee));
          });
        } catch (err) {
          console.log(err);
        }
      }
      // debug
      dispatch({ type: LOAD_RECORD, payload: res.data });
      console.log(state);
    } catch (err) {
      localStorage.removeItem('token');
      console.log(err.response.data);
    }
  };

  const loadInputForm = (id) => {
    if (id) {
      dispatch({ type: UPDATE, payload: id });
    } else {
      console.log('update id is not valid');
    }
  };

  return (
    <RecordContext.Provider
      value={{
        records: state.records,
        loadInput: state.loadInput,
        getRecords,
        loadInputForm,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordState;
