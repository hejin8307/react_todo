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
    <li className={styles.toDo}>
      <input
        className={styles.checkbox}
        id={toDo.id}
        type="checkbox"
        checked={toDo.status === 'completed'}
        onChange={handleChange}
      />
      <div className={styles.title}>{toDo.name}</div>
      <span className={styles.icon}>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default ToDo;
