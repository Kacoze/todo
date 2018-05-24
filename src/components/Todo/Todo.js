import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.scss';

const Todo = ({ onClick, todo }) => (
  <li className={styles.taskLi}>
    <button
      onClick={onClick}
      // style={{
      //   textDecoration: todo.done_at ? 'line-through' : 'none',
      // }}
      className={`${styles.task} ${todo.done_at && styles.taskDone}`}
    >
      {todo.message || 'There is no message'}
      <p>Created: {todo.created_at}</p>
      {todo.done_at && <p>{todo.done_at}</p>}
    </button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    done_at: PropTypes.string,
    id: PropTypes.number.isRequired,
    message: PropTypes.string,
  }).isRequired,
};

export default Todo;
