import React from 'react';
import ToDo from '../todo/toDo';
import styles from './toDoList.module.css';

const ToDoList = ({toDos, onCheck, onDelete}) => {
  return (
    <section className={styles.contain}>
      {toDos.length > 0 ? (
        toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className={styles.message}>Please add a todo</div>
      )}
    </section>
  );
};

export default ToDoList;
