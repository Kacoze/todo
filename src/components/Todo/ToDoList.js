import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters, getTodos } from 'actions';
import Todo from 'components/Todo/Todo';
import styles from './Todo.scss';

class TodoList extends Component {
  state = { error: false }
  componentDidMount() {
    this.props.updateTodos();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 3000);
    }
  }
  render() {
    const { todos, toggle } = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onClick={() => toggle(todo.id)}
            />
          ))}
        </ul>
        {this.state.error && (
          <div className={styles.error}>
            <p>An error occurred! Try again later!</p>
          </div>
        )}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    done_at: PropTypes.string,
    id: PropTypes.number.isRequired,
    message: PropTypes.string,
  }).isRequired).isRequired,
  toggle: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.done_at);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.done_at);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todosState.todos, state.visibilityFilter),
  error: state.todosState.error,
});

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodo(id)),
  updateTodos: () => dispatch(getTodos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
