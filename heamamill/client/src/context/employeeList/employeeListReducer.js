import { EMP_LOADED, SET_EMP } from '../types';

export default (state, action) => {
  switch (action.type) {
    case EMP_LOADED:
      return {
        ...state,
        employees: action.payload,
      };
    case SET_EMP:
      return {
        ...state,
        currentEmp: action.payload,
      };
    default:
      return state;
  }
};
