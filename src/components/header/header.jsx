import React from 'react';
import styles from './header.module.css';
import {BiSun} from 'react-icons/bi';

const Header = ({filters, filter, onFilterChange}) => {
  return (
    <header className={styles.container}>
      <button className={styles.darkmodeBtn}>
        <BiSun />
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
