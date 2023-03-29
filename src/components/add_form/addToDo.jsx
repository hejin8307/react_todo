import React from 'react';
import styles from './addToDo.module.css';
import {v4 as uuidv4} from 'uuid';

const AddToDo = ({toDos, onAdd}) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const newToDo = {
      id: uuidv4(),
      name: inputRef.current.value,
      status: 'active',
    };
    newToDo.name && onAdd(newToDo);
    inputRef.current.value = '';
  };
  return (
    <form ref={formRef} className={styles.addForm} onSubmit={handleAdd}>
      <input
        className={styles.addInput}
        ref={inputRef}
        type="text"
        id="name"
        name="name"
        value={toDos.name}
        placeholder="Add Todo"
      />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
};

export default AddToDo;
