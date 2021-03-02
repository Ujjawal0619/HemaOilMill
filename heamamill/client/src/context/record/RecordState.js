import React, { useReducer } from 'react';
import axios from 'axios';
import RecordContext from './recordContext';
import RecordReducer from './recordReducer';

import { SET_TYPE, LOAD_RECORD } from '../types';

const RecordState = (props) => {
  const initialState = {
    records: null,
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
      const res = await axios.get(`/api/${type}`);
      console.log(res.data);
      dispatch({ type: LOAD_RECORD, payload: res.data });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <RecordContext.Provider
      value={{
        records: state.records,
        getRecords,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordState;
