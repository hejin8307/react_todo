import React from 'react';
import styles from './toDo.module.css';
import {FaTrashAlt} from 'react-icons/fa';

const ToDo = ({toDo, onUpdate, onDelete}) => {
  const handleChange = (event) => {
    onUpdate({
      ...toDo,
      status: event.target.checked ? 'completed' : 'active',
    });
  };

  const handleDelete = () => {
    onDelete(toDo);
  };

  return (
    <li className={styles.toDoList}>
      <input
        id={toDo.id}
        type="checkbox"
        checked={toDo.status === 'completed'}
        onChange={handleChange}
      />
      <div className={styles.title}>{toDo.name}</div>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default ToDo;
