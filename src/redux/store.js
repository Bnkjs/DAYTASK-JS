import { createStore } from 'redux';
import { showTaskReducer } from './showtaskReducer';

export const store = createStore(showTaskReducer);
store.subscribe(() => console.log(store.getState()))


