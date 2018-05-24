import React from 'react';
import Footer from 'components/Todo/Footer';
import AddTodo from 'components/Todo/AddTodo';
import ToDoList from 'components/Todo/ToDoList';
import styles from './Todo.scss';

const App = () => (
  <div className={styles.todoContainer}>
    <AddTodo />
    <ToDoList />
    <Footer />
  </div>
);

export default App;
