import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo';



export default function Main({ filter }) {

    const [todo, setTodo] = useState(readlocaltodo);
    // * 주의할 점 => const [todo, setTodo] = useState(readlocaltodo());
    //   위와 같이 하면, 위의 함수가 계속해서 실행됨. 예를 들어, change가 될 때마다 , 해당함수가 실행됨 
    //   이를 해결하기 위해서 , const [todo, setTodo] = useState(readlocaltodo); 
    //   또는 
    //   const [todo, setTodo] = useState( ()=>( realocaltodo() ) );
    //   해줌으로써 해결 할 수 있다. 

    // const name = useRef('');
    // const type = useRef('');

    // const handleAdd = () => {
    //     // 새로운 todo 를 업데이트 해야함 
    //     const new_todo = { key: uuidv4(), type: type.current.value, name: name.current.value, done: false };
    //     console.log(new_todo);
    //     setTodo((todos) => [...todos, new_todo]);
    //     name.current.value = '';
    // };

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);


    const handleAdd2 = (todo) => {
        // console.log(todo);
        setTodo((todos) => [...todos, todo]);
    };

    const handleUpdate = (updated) => setTodo(todo.map((t) => (t.key === updated.key ? updated : t)));

    const handleDelete = (deleted) => {
        setTodo(todo.filter((t) => t.key !== deleted.key));
    };
    const filtered = getfilteredtodo(todo, filter) || [];

    // console.log(filtered);
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
function readlocaltodo() {
    // console.log(' 하이하이 ');
    const todo = localStorage.getItem('todo');
    // console.log(' todo 는 : ' + todo);
    if (todo === 'undefined') return [];
    else return JSON.parse(todo);
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
