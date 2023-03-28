import React from 'react';
import styles from './header.module.css';
import {BiSun} from 'react-icons/bi';

const Header = ({toDos, onFilters}) => {
  const handleAll = () => {
    const all = localStorage.getItem('toDos');
    onFilters(all);
  };

  const handleActive = () => {
    const checked = toDos.filter((toDo) => toDo.isChecked === false);
    onFilters(checked);
  };

  const handleComplete = () => {
    const checked = toDos.filter((toDo) => toDo.isChecked === true);
    onFilters(checked);
  };

  return (
    <section className={styles.contain}>
      <button className={styles.darkmodeBtn}>
        <BiSun className={styles.img} />
      </button>
      <div className={styles.filter}>
        <button onClick={handleAll}>All</button>
        <button onClick={handleActive}>Active</button>
        <button onClick={handleComplete}>Completed</button>
      </div>
    </section>
  );
};

export default Header;
