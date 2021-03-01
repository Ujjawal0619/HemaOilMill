import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
  MUSTARD_POST,
  SET_TYPE,
  LOAD_RECORD,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_RECORD:
      return {
        ...state,
        records: action.payload,
      };
    default:
      return state;
  }
};
