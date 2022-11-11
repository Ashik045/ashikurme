import React from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import styles from './projects.module.scss';

function Projects() {
    return (
        <div className={styles.projects}>
            <HeaderTitle title="Latest Projects" />
            <div className={styles.projects_main}>
                <p>projects</p>
            </div>
        </div>
    );
}

export default Projects;
