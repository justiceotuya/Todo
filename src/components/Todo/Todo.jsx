import React, { useState } from 'react';
import styles from './Todo.module.scss';
import InputComponent from '../InputComponent/InputComponent';
import ListComponent from '../ListComponent/ListComponent';

const Todo = () => {
  // declare hooks
  const [items, setItems] = useState([]); // declare items as array
  const [input, setInput] = useState('');

  // input state contains inputed value
  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleAddItem = event => {
    event.preventDefault();
    // push inputed value into items state value
    if (input !== '') setItems(items.concat(input));
    // set the input value to empty
    setInput('');
  };

  const handleCheckboxClick = item => {
    //filter the array
    items.filter((arrayItem, index) => {
      //check if item in the array is same as item passed in the handleCheckboxClick argument
      if (arrayItem === item) {
        // if it is the same, remove it from the items array
        items.splice(index, 1);
      }
      // set the items state to show item hasben removed
      return setItems(items);
    });
  };

  return (
    <div className={styles.container}>
      <InputComponent handleInput={handleInput} handleAddItem={handleAddItem} value={input} />

      <div className={styles.todoItems}>
        <ListComponent items={items} handleCheckboxClick={handleCheckboxClick} />
      </div>
    </div>
  );
};

export default Todo;
