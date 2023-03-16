import React from 'react';
import styles from './addToDo.module.css';

const AddToDo = ({toDos, onInput, onAdd}) => {
  return (
    <form className={styles.addToDo} onSubmit={onAdd}>
      <input
        type="text"
        id="name"
        name="name"
        value={toDos.name}
        placeholder="Add Todo"
        onChange={onInput}
      />
      <button className={styles.addBtn} onSubmit={onAdd}>
        Add
      </button>
    </form>
  );
};

export default AddToDo;
