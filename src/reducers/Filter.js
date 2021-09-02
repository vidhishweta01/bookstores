import { filterState } from './initialState';

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'ChangeFilter': {
      return action.filterby;
    }
    default: return state;
  }
};

export default filterReducer;
