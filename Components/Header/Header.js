import React from 'react';
import styles from './header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_main}>
                <p>Hi, my name is</p>
                <h1>Ashikur Islam.</h1>
                <h1>I build things for the web.</h1>
            </div>
        </div>
    );
}

export default Header;
