import React from 'react';
import styles from './header.module.css';
import {BiSun} from 'react-icons/bi';

const Header = (props) => {
  return (
    <section className={styles.contain}>
      <button className={styles.darkmodeBtn}>
        <BiSun />
      </button>
      <div className={styles.filter}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </section>
  );
};

export default Header;
