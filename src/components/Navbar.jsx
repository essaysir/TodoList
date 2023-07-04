import React from 'react';
import styles from './Navbar.module.css';
import { useDarkMode } from '../context/DarkModeContext';
import { HiSun, HiMoon } from 'react-icons/hi'

export default function Navbar({ filter, filters, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={styles.nav}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
            <ul className={styles.filters}>
                {filters.map((item, index) =>
                    <li key={index} ><button className={`${styles.filter} ${filter === item && styles.selected}`} onClick={() => onFilterChange(item)}>{item}</button></li>
                )}

            </ul>
        </div >
    );
}

