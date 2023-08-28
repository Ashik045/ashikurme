import Image from 'next/image';
import React from 'react';
import aws from '../../images/aws.png';
import bootstrap from '../../images/bootstrap.png';
import css from '../../images/css.png';
import figma from '../../images/figma.png';
import github from '../../images/github.png';
import heroku from '../../images/heroku.png';
import html from '../../images/html.png';
import javascript from '../../images/javascript.png';
import mongodb from '../../images/mongodb.png';
import netlify from '../../images/netlify.png';
import nodejs from '../../images/nodejs.png';
import postman from '../../images/postman.png';
import react from '../../images/react.png';
import sass from '../../images/sass.png';
import typescript from '../../images/typescript_icon.png';
import vercel from '../../images/vercel.png';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import styles from './skills.module.scss';

const Skills = () => {
    const other_icons = [
        {
            id: 1,
            icon: github,
            name: 'github',
            size: 40,
        },
        {
            id: 2,
            icon: figma,
            name: 'figma',
            size: 40,
        },
        {
            id: 3,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
            name: 'canva',
            size: 40,
        },
        {
            id: 4,
            icon: postman,
            name: 'postman',
            size: 40,
        },
        {
            id: 5,
            icon: heroku,
            name: 'heroku',
            size: 40,
        },
        {
            id: 6,
            icon: netlify,
            name: 'netlify',
            size: 40,
        },
        {
            id: 7,
            icon: vercel,
            name: 'vercel',
            size: 40,
            class: 'other_icon'
        },
        {
            id: 8,
            icon: aws,
            name: 'aws',
            size: 40,
            class: 'other_icon'
        },
        
    ]
    
  return (
    <div className={styles.skills_sec}>
        <HeaderTitle title="Skills"/>

        <div className={styles.main_sec}>
            <div className={styles.icons}>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.typescript}`} src={typescript} height={45} width={45} />
                    <h3>TypeScript</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.javascript}`} src={javascript} height={55} width={55} />
                    <h3>Javascript</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.reactjs}`} src={react} height={40} width={40} />
                    <h3>React</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.nextjs}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" height={40} width={40} />
                    <h3>Next.js</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.css}`} src={css} height={40} width={40} />
                    <h3>CSS3</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.html}`} src={html} height={40} width={40} />
                    <h3>HTML5</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={styles.skill_icons} src={sass} height={55} width={55} />
                    <h3>SASS</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.mui}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" height={45} width={45} />
                    <h3>Material UI</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.bootstap}`} src={bootstrap} height={40} width={40} />
                    <h3>Bootstrap</h3>
                </div>
                
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.node}`} src={nodejs} height={40} width={40} />
                    <h3>NodeJS</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.express}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height={40} width={40} />
                    <h3>ExpressJs</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image alt="ashikur ashikur045" className={`${styles.skill_icons} ${styles.mongodb}`} src={mongodb} height={40} width={40} />
                    <h3>MongoDB</h3>
                </div>
               
            </div>

            <div className={styles.others}>
                <h2>Others:</h2>

                <div className={styles.other_icons}>
                    {other_icons.map((items) => {
                        return <div key={items.id} className={styles.other_icon_div} >
                                <Image alt="ashikur ashikur045" src={items.icon} style={{marginRight: '7px'}} className={items.class ? `${styles.round}` : `${styles.ot_icon}`} width={items.size} height={items.size} />
                                <h3>{items.name}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills