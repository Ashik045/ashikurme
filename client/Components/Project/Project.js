import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from 'react-tilt';
import styles from './project.module.scss';

const Project = ({project}) => {
  return (
    <div className={styles.projectt}>
        {project.left ? (
            <div className={styles.l_t_r}>
                <div className={styles.l_t_r_txt}>
                    <Link href={`/projects/${project._id}`}>
                        <h2>{project.title}</h2>
                    </Link>
                    <span className={styles.iconss}>
                        <Link href={project.githubLink} target="_blank">
                            <FaGithub className={styles.icon} size={23} />
                        </Link>
                        <Link href={project.liveLink} target="_blank">
                            <FaExternalLinkAlt size={20} className={styles.icon2} />
                        </Link>
                    </span>

                    <p>{project.detail}</p>
                    <p className={styles.r_t_l_tools}>
                        {project.tools.slice(0, 5).map((tool, i) => {
                            return <span key={i}>{tool},</span>
                        })}
                    </p>
                </div>
                
                <Link href={`/projects/${project._id}`}>
                    <Tilt className={styles.Tilt} options={{ max : 25 }} >
                        <Image src={project.images[0]} className={styles.project_img} alt="website" height={370} width={500} layout="responsive" />
                    </Tilt>
                </Link>
            </div>
        ): (
            <div className={styles.r_t_l}>
            <Link href={`/projects/${project._id}`}>
                <Tilt className={styles.Tilt} options={{ max : 25 }} >
                <Image src={project.images[0]} className={styles.project_img} alt="website" height={370} width={500} layout="responsive" />
                </Tilt>
            </Link>

                <div className={styles.r_t_l_txt}>
                    <Link href={`/projects/${project._id}`}>
                        <h2>{project.title}</h2>
                    </Link>
                    <span className={styles.iconss}>
                        <Link href={project.githubLink} target="_blank">
                            <FaGithub className={styles.icon} size={23} />
                        </Link>
                        <Link href={project.liveLink} target="_blank">
                            <FaExternalLinkAlt size={20} className={styles.icon2} />
                        </Link>
                    </span>

                    <p>{project.detail}</p>
                    <p className={styles.r_t_l_tools}>
                        {project.tools.slice(0, 5).map((tool, i) => {
                            return <span key={i}>{tool},</span>
                        })}
                    </p>
                </div>

            </div>
        )}
    </div>
  )
}

export default Project