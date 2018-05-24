import { combineReducers } from 'redux';
import todosState from './todo';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todosState,
  visibilityFilter,
});
