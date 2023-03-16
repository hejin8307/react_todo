import React from 'react';
import ToDo from '../todo/toDo';
import styles from './toDoList.module.css';

const ToDoList = ({toDos, onDelete}) => {
  return (
    <section className={styles.content}>
      {toDos.map((title) => (
        <ToDo key={title.id} toDo={title} onDelete={onDelete} />
      ))}
    </section>
  );
};

export default ToDoList;
