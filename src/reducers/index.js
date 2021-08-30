import { createStore } from 'redux';
import reducer from './book';

const store = createStore(reducer);

export default store;
