import React from 'react';
import styles from './header.module.css';
import {BiSun} from 'react-icons/bi';

const Header = ({isChecked, onActive, onComplete}) => {
  const handleActive = () => {
    const checked = isChecked.filter((checked) => checked.isChecked === false);
    onActive(checked);
  };

  const handleComplete = () => {
    const checked = isChecked.filter((checked) => checked.isChecked === true);
    onComplete(checked);
  };

  return (
    <section className={styles.contain}>
      <button className={styles.darkmodeBtn}>
        <BiSun />
      </button>
      <div className={styles.filter}>
        <button>All</button>
        <button onClick={handleActive}>Active</button>
        <button onClick={handleComplete}>Completed</button>
      </div>
    </section>
  );
};

export default Header;
