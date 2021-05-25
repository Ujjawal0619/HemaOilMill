import { UPDATE, LOAD_RECORD } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_RECORD:
      return {
        ...state,
        records: action.payload,
      };
    case UPDATE:
      return {
        ...state,
        loadInput: state.records.filter((record) => {
          return record.id == action.payload;
        })[0],
      };
    default:
      return state;
  }
};
