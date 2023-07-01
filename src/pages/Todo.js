import React, { useState } from 'react';
import styles from './Todo.module.css';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

const filters = ['all', 'active', 'done'];
export default function Todo() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <div className={styles.container}>
            <Navbar filters={filters} filter={filter} onFilterChange={setFilter} />
            <Main filter={filter} />
        </div>
    );
}

