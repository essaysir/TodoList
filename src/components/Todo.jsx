import React from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa'
export default function Todo({ item, onUpdate, onDelete }) {
    const { name, done } = item;
    const handleChange = (e) => {
        const status = e.target.checked;
        // console.log(status);
        onUpdate({ ...item, done: status });
    };

    const handleDelete = () => {
        onDelete(item);
    };

    return (
        <li className={styles.todo}>
            <input className={styles.checkbox} onChange={handleChange} type='checkbox' id={item.key} checked={done === true} />
            <label className={styles.text} htmlFor={item.key}>{name}</label>
            <span className={styles.icon}>
                <button className={styles.button} onClick={handleDelete}><FaTrashAlt /></button>
            </span>
        </li>

    );
}

