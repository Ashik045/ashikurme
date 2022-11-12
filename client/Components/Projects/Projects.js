import Link from 'next/link';
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

                <div className={styles.see_all_btn}>
                <Link href="/projects">

                    <button type='button' >See All Projects</button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;
