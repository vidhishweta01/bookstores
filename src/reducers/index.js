import { combineReducers } from 'redux';
import BookReducer from './book';
import filterReducer from './Filter';

const RootReducer = combineReducers({
  BookReducer,
  filterReducer,
});

export default RootReducer;
