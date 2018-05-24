import React from 'react';
import Todo from 'components/Todo';
import styles from './style.scss';

const App = () => (
  <div className={styles.app}>
    <Todo />
  </div>
);

export default App;
