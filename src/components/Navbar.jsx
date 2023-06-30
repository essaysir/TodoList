import React from 'react';
import { FaCloudSun } from 'react-icons/fa'; 
import styles from './Navbar.module.css';

export default function Navbar( {filter , filters , onFilterChange} ) {
    return (
        <div className={styles.nav}>
            <button className={styles.sun}><FaCloudSun/></button>
            <ul className={styles.menubar}>
                {filters.map((item, index)=>
                    <li key={index}><button onClick={()=>onFilterChange(item)}>{item}</button></li>
                )};
                
            </ul>
        </div>
    );
}

