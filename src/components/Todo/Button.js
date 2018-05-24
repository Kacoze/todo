import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibilityFilter } from 'actions';
import styles from './Todo.scss';

const Button = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    className={styles.filterButton}
  >
    {children}
  </button>
);

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
