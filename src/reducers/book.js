import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CreateBook': {
      return [...state, action.obj];
    }
    case 'RemoveBook':
      return state.filter((book) => book.id !== action.obj.id);
    default: return state;
  }
};

export default reducer;
