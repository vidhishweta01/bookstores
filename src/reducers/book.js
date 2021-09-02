import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      return [...state, action.obj];
    }
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.obj.id);
    default: return state;
  }
};

export default reducer;
