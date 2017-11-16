import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});
const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
