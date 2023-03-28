import React from 'react';
import ToDo from '../todo/toDo';
import styles from '../todo_list/toDoList.module.css';

const ActiveList = ({filters, onCheck, onDelete}) => {
  return (
    <section className={styles.contain}>
      {filters.map((filter) => (
        <ToDo
          key={filter.id}
          filter={filter}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
};

export default ActiveList;
