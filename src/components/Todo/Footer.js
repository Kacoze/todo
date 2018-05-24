import React from 'react';
import FilterButton from 'components/Todo/Button';
import { VisibilityFilters } from 'actions';
import styles from './Todo.scss';

const Footer = () => (
  <div className={styles.footer}>
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterButton>
  </div>
);

export default Footer;
