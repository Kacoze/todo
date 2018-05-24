import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from 'actions';
import styles from './Todo.scss';

const AddTodo = ({ newTodo }) => {
  let input;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        newTodo(input.value);
        input.value = '';
      }}
    >
      <input ref={node => input = node} className={styles.inputField} placeholder="Add new task..." />
      <button type="submit" className={styles.submitButton}>
        Add Todo
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  newTodo: propTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  newTodo: id => dispatch(addTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
