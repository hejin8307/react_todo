import React from 'react';
import styles from './toDo.module.css';
import {FaTrashAlt} from 'react-icons/fa';

const ToDo = ({toDo, onDelete}) => {
  const handleDelete = () => {
    onDelete(toDo);
  };

  return (
    <div className={styles.toDoList}>
      <input type="checkbox" />
      <li className={styles.title}>
        {toDo.name} {toDo.id}
      </li>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default ToDo;
