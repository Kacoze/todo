import { getTasks, postTasks, setTaksDone } from 'constants/api';
import { GET_TODOS, ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actionTypes';

const requestGetTodos = () => ({
  type: `${GET_TODOS}_REQUEST`,
});
const successGetTodos = res => ({
  type: `${GET_TODOS}_SUCCESS`,
  res,
});
const failureGetTodos = res => ({
  type: `${GET_TODOS}_FAILURE`,
  res,
});

const requestAddTodo = () => ({
  type: `${ADD_TODO}_REQUEST`,
});
const successAddTodo = res => ({
  type: `${ADD_TODO}_SUCCESS`,
  res,
});
const failureAddTodo = res => ({
  type: `${ADD_TODO}_FAILURE`,
  res,
});

const requestToggleTodo = () => ({
  type: `${TOGGLE_TODO}_REQUEST`,
});
const successToggleTodo = res => ({
  type: `${TOGGLE_TODO}_SUCCESS`,
  res,
});
const failureToggleTodo = res => ({
  type: `${TOGGLE_TODO}_FAILURE`,
  res,
});

export function request({
  requestFunc = () => {},
  successFunc = () => {},
  failureFunc = () => {},
  url,
  method,
  body,
}) {
  return (dispatch) => {
    dispatch(requestFunc());
    return fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    })
      .then(response => response.json())
      .then((json) => {
        if (json && json.error) {
          dispatch(failureFunc(json.res.error));
        } else {
          dispatch(successFunc(json));
        }
      })
      .catch(error => dispatch(failureFunc(error)));
  };
}
export const getTodos = () => request({
  requestFunc: requestGetTodos,
  successFunc: successGetTodos,
  failureFunc: failureGetTodos,
  url: getTasks,
  method: 'GET',
});

export const addTodo = body => (
  request({
    requestFunc: requestAddTodo,
    successFunc: successAddTodo,
    failureFunc: failureAddTodo,
    url: postTasks,
    body: JSON.stringify({ body }),
    method: 'POST',
  })
);

export const toggleTodo = id => (
  request({
    requestFunc: requestToggleTodo,
    successFunc: successToggleTodo,
    failureFunc: failureToggleTodo,
    url: setTaksDone(id),
    method: 'POST',
  })
);

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
