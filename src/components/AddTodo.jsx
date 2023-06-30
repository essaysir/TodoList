import React , {useRef} from 'react';
import styles from './Main.module.css'; 
import {v4 as uuidv4} from 'uuid'

export default function AddTodo({onAdd}) {
    let name = useRef(null);
    let type = useRef(null);
    // useRef 란 어떤 것이고, 어떻게 사용해야하고, 문제가 있다면 어느 것인가?
    
    // 다음과 같이, useRef 를 통해
    // const [name, setName] = useState('');
    // const [type , setType] = useState('');

    const handleAdd =()=>{
        onAdd({key: uuidv4() , name : name.current.value , type : type.current.value , done : false });
        name.current.value='';
    }
    
    const handleEnter =(e)=>{
        if(e.key === 'Enter'){
            handleAdd();
        }
    };
    return (
        <div>
            
            <select ref={type}>
                <option>Weekly</option>
                <option>Monthly</option>
            </select>
            <input ref={name} className={styles.add} onKeyDown={handleEnter} type='text' placeholder='해야할 일을 입력하시오' />
            <button className={styles.add} onClick={handleAdd}>Add1</button>
        {/* - 자바스크립트 에서 onClick 뒤에 함수명만 오는 것과 함수명( ) 과 오는 것의 차이점
            ⇒ 함수명만 오면 해당 함수를 실행하지만, 함수명 (  ) 과 같이 오면 , 함수를 실행한 값이 할당되는 것인 차이가 존재한다 . */}
            
        </div>
    );
}

