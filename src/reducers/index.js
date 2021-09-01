import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import BookReducer from './book';

const reducer = combineReducers({
  BookReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
