import React from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Project from '../Project/Project';
import styles from './projects.module.scss';

function Projects({projects}) {
    return (
        <div className={styles.projects}>
            <HeaderTitle title="Latest Projects" />
            <div className={styles.projects_main}>
                {projects.map((item) => {
                    return <Project key={item._id} project={item} />
                })}
            </div>
        </div>
    );
}

export default Projects;
