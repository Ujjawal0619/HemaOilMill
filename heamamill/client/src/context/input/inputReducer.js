import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
  MUSTARD_POST,
  SET_TYPE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
