import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from './project.module.scss';

const Project = ({project}) => {
  return (
    <div className={styles.projectt}>
        {project.left ? (
            <div className={styles.l_t_r}>
                <div className={styles.l_t_r_txt}>
                    <h2>{project.title}</h2>
                    <span><FaGithub /> <FaExternalLinkAlt /></span>

                    <p>{project.detail}</p>
                    <p>{project.tools}</p>
                </div>

                <Image src={project.images[0]} alt="website" height={500} width={600} />
            </div>
        ): (
            <div className={styles.r_t_l}>
                <Image src={project.images[0]} alt="website" height={500} width={600} />

                <div className={styles.r_t_l_txt}>
                    <h2>{project.title}</h2>
                    <span>
                    <Link href={project.githubLink}>
                        <FaGithub className={styles.icon} size={23} />
                    </Link>
                    <Link href={project.liveLink}>
                        <FaExternalLinkAlt size={20} className={styles.icon2} />
                    </Link>
                    </span>

                    <p>{project.detail}</p>
                    <p className={styles.r_t_l_tools}>
                    {project.tools.map((tool, i) => {
                        return <span key={i}>{tool}</span>
                    })}
                    </p>
                </div>

            </div>
        )}
    </div>
  )
}

export default Project