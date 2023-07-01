import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ filter, filters, onFilterChange }) {
    return (
        <div className={styles.nav}>
            <ul className={styles.filters}>
                {filters.map((item, index) =>
                    <li key={index} ><button className={`${styles.filter} ${filter === item && styles.selected}`} onClick={() => onFilterChange(item)}>{item}</button></li>
                )}

            </ul>
        </div >
    );
}

