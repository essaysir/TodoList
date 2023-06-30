import React from 'react';

export default function Todo({ item, onUpdate, onDelete}) {
    const { name, done } = item ;
    const handleChange= (e)=>{
        const status = e.target.checked ;
        // console.log(status);
        onUpdate({...item , done : status});
    };

    const handleDelete=()=>{
        onDelete(item);
    };
    
    return (
                    <li>
                        <input onChange={handleChange} type='checkbox' id={item.key} checked={done === true } />
                        <label htmlFor={item.key}>{name}</label>
                        <button onClick={handleDelete}>삭제</button>
                    </li>
        
    );
}

