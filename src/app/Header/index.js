'use client'
import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image'

const handleClick = (e, id, block='center') => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block });
  };
  

const Header = () => {
    return <span className={styles.header} >
        <Image style={{cursor: 'pointer'}} onClick={(e) => handleClick(e, 'main', 'start')} src={'/hakolLogo.svg'} width={48} height={48}/>
        <span className={styles.navigation}>
           <a  href='#episodes' onClick={(e) => handleClick(e, 'episodes')}>פרקים נוספים</a>
            <a href='#interview' onClick={(e) => handleClick(e, 'interview')}>כתבה על הפודקאסט</a>
            <a href='#about' onClick={(e) => handleClick(e, 'about')}>אודות</a>
        </span>
        <a href="#contact" ><button onClick={(e) => handleClick(e, 'contact')}>ליצירת קשר</button></a>
    </span>
}

export default Header;
