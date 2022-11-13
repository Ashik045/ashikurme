import React from 'react';
import styles from './headertitle.module.scss';

function HeaderTitle({ title }) {
    return (
        <div className={styles.header_title}>
            <h1>{title}</h1>

            <div className={styles.box}>
                <div className={styles.box1} />
                <div className={styles.box2} />
            </div>
        </div>
    );
}

export default HeaderTitle;
