import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Todo/Todo.module.scss';

const InputComponent = props => {
  const { handleInput, handleAddItem, value } = props;
  return (
    <form className={styles.todoAddItem} onSubmit={handleAddItem}>
      <input
        type="text"
        className={styles.todoAddItem__input}
        placeholder="Create a task"
        onChange={handleInput}
        value={value}
      />
      <button type="submit" className={styles.todoAddItem__button}>
        &rarr;
      </button>
    </form>
  );
};
export default InputComponent;

InputComponent.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired
};
