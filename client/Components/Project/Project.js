import Image from 'next/image';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from './project.module.scss';

const Project = ({project}) => {
  return (
    <div className={styles.projectt}>
        {project.left ? (
            <div className={styles.l_t_r}>
                <div className={styles.l_t_r_txt}>
                    <h1>{project.title}</h1>
                    <span><FaGithub /> <FaExternalLinkAlt /></span>

                    <p>{project.detail}</p>
                    <p>{project.tools}</p>
                </div>

                <Image src={project.images} alt="website" />
            </div>
        ): (
            <div className={styles.r_t_l}>
                <Image src={project.images} alt="website" />

                <div className={styles.r_t_l_txt}>
                    <h1>{project.title}</h1>
                    <span><FaGithub /> <FaExternalLinkAlt /></span>

                    <p>{project.detail}</p>
                    <p>{project.tools}</p>
                </div>

            </div>
        )}
    </div>
  )
}

export default Project