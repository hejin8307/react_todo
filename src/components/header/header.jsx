import React from 'react';
import styles from './header.module.css';
import {BiSun} from 'react-icons/bi';

const Header = ({filters, filter, onFilterChange}) => {
  return (
    <header className={styles.contain}>
      <button className={styles.darkmodeBtn}>
        <BiSun className={styles.img} />
      </button>
      <ul className={styles.filter}>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
