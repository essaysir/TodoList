import React, { useState, useRef } from 'react';
import styles from './Main.module.css';
import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo';

import { v4 as uuidv4 } from 'uuid';



export default function Main({ filter }) {
    const [todo, setTodo] = useState([
        { key: 1, type: 'Weekly', name: '리액트 공부하기', done: false },
        { key: 2, type: 'Weekly', name: '포트폴리오 준비', done: false }
    ]);
    const name = useRef('');
    const type = useRef('');

    const handleAdd = () => {
        // 새로운 todo 를 업데이트 해야함 
        const new_todo = { key: uuidv4(), type: type.current.value, name: name.current.value, done: false };
        console.log(new_todo);
        setTodo((todos) => [...todos, new_todo]);
        name.current.value = '';
    };

    const handleAdd2 = (todo) => {
        // console.log(todo);
        setTodo((todos) => [...todos, todo]);
    };

    const handleUpdate = (updated) => setTodo(todo.map((t) => (t.key === updated.key ? updated : t)));

    const handleDelete = (deleted) => {
        setTodo(todo.filter((t) => t.key !== deleted.key));
    };
    const filtered = getfilteredtodo(todo, filter);
    console.log(filtered);
    return (
        <div className={styles.mainContainer}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo
                        key={item.key}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                        item={item}
                    />
                )
                )}
            </ul>

            <AddTodo onAdd={handleAdd2} />

            {/* <select ref={type} >
                <option>Weekly</option>
                <option>Monthly</option>
            </select>
            <input ref={name} className={styles.add} type='text' placeholder='해야할 일을 입력하시오' />
            <button className={styles.add} onClick={handleAdd}>Add2</button> */}
        </div>
    );
}

function getfilteredtodo(todo, filter) {
    if (filter === 'all') {
        return todo;
    }
    else if (filter === 'active') {
        return todo.filter(todo => todo.done === false);
    }
    else if (filter === 'done') {
        return todo.filter(todo => todo.done === true);
    }
    return todo;
};
