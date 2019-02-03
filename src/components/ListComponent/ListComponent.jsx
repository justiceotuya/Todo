import React from 'react';
import styles from '../Todo/Todo.module.scss';
// import PropTypes from 'prop-types';

export default props => {
  const { items, handleCheckboxClick } = props;
  return items.length !== 0 ? (
    items.map((item, index) => {
      return (
        // <div >
        <label
          htmlFor={item}
          className={styles.todoItems__item}
          name="checkbox"
          key={`${item}_${index}`}
        >
          <input
            className={styles.todoItems__checkbox}
            type="checkbox"
            name={item}
            id={item}
            onClick={() => handleCheckboxClick(item)} //pass the item as argument
          />
          {item}
        </label>
      );
    })
  ) : (
    <div className={styles.todoItems__empty}>Add items to this list</div>
  );
};
