import React, {useContext} from 'react';
import styles from './header.module.css';
import {BiMoon, BiSun} from 'react-icons/bi';
import {useDarkMode} from '../../context/darkModeContext';

const Header = ({filters, filter, onFilterChange}) => {
  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <header className={styles.container}>
      <button className={styles.darkmodeBtn} onClick={toggleDarkMode}>
        {darkMode ? <BiSun /> : <BiMoon />}
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
