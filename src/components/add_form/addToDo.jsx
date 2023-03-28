import React from 'react';
import styles from './addToDo.module.css';

const AddToDo = ({toDos, onAdd}) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const newToDo = inputRef.current.value;
    newToDo && onAdd(newToDo);
    inputRef.current.value = '';
  };
  return (
    <section className={styles.contain}>
      <form ref={formRef} className={styles.addForm} onSubmit={handleAdd}>
        <input
          className={styles.addBox}
          ref={inputRef}
          type="text"
          id="name"
          name="name"
          value={toDos.name}
          placeholder="Add Todo"
        />
        <button className={styles.addBtn}>Add</button>
      </form>
    </section>
  );
};

export default AddToDo;
