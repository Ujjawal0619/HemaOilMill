import {
  UPDATE,
  LOAD_RECORD,
  CLEAR_RECORDS,
  CLEAR_LOAD_INPUT,
  DELETE_RECORD,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_RECORD:
      return {
        ...state,
        records: action.payload,
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: state.records?.filter(
          (record) => record.id !== action.payload
        ),
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        records: null,
      };
    case UPDATE:
      return {
        ...state,
        loadInput: state.records.filter((record) => {
          return record.id == action.payload;
        })[0],
      };
    case CLEAR_LOAD_INPUT:
      return {
        ...state,
        loadInput: null,
      };
    default:
      return state;
  }
};
