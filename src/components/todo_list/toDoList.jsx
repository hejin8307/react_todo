import React from 'react';
import ToDo from '../todo/toDo';
import styles from './toDoList.module.css';

const ToDoList = ({toDos, onDelete}) => {
  return (
    <section className={styles.content}>
      {toDos.length > 0 ? (
        toDos.map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} onDelete={onDelete} />
        ))
      ) : (
        <div className={styles.message}>Please add a todo</div>
      )}
    </section>
  );
};

export default ToDoList;
