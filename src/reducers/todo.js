import moment from 'moment';
import { GET_TODOS, ADD_TODO, TOGGLE_TODO } from 'constants/actionTypes';

const initState = {
  loading: false,
  todos: [],
  error: false,
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case `${GET_TODOS}_REQUEST`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${GET_TODOS}_SUCCESS`:
      return {
        ...state,
        todos: action.res.todos.map(i => (
          {
            ...i,
            created_at: moment(i.created_at).calendar(),
            done_at: i.done_at && moment(i.done_at).calendar(),
          })),
        loading: false,
        error: false,
      };
    case `${GET_TODOS}_FAILURE`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case `${ADD_TODO}_REQUEST`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${ADD_TODO}_SUCCESS`:
      return {
        ...state,
        loading: false,
        todos: action.res.todos.map(i => ({
          ...i,
          created_at: moment(i.created_at).calendar(),
          done_at: i.done_at && moment(i.done_at).calendar(),
        })),
        error: false,
      };
    case `${ADD_TODO}_FAILURE`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case `${TOGGLE_TODO}_REQUEST`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${TOGGLE_TODO}_SUCCESS`:
      return {
        ...state,
        loading: false,
        error: false,
        todos: state.todos.map(todo => (todo.id === action.res.id ? ({
          ...action.res,
          created_at: moment(action.res.created_at).calendar(),
          done_at: action.res.done_at && moment(action.res.done_at).calendar(),
        }) : todo)),
      };
    case `${TOGGLE_TODO}_FAILURE`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
export default todos;
