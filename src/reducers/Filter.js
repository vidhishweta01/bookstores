import { filterState } from './initialState';

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return action.filterby;
    }
    default: return state;
  }
};

export default filterReducer;
