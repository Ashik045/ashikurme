import Image from 'next/image';
import React from 'react';
import AboutMe from '../../Components/AboutMe/AboutMe';
import HeaderTitle from '../../Components/HeaderTitle/HeaderTitle';
import Navbar from '../../Components/Navbar/Navbar';
import Services from '../../Components/Services/Services';
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
import vercel from '../../images/vercel.png';
import styles from '../../styles/about.module.scss';

const other_icons = [
    {
        id: 1,
        icon: github,
        name: 'github',
        size: 45,
    },
    {
        id: 2,
        icon: figma,
        name: 'figma',
        size: 45,
    },
    {
        id: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
        name: 'canva',
        size: 45,
    },
    {
        id: 4,
        icon: postman,
        name: 'postman',
        size: 45,
    },
    {
        id: 5,
        icon: heroku,
        name: 'heroku',
        size: 45,
    },
    {
        id: 6,
        icon: netlify,
        name: 'netlify',
        size: 45,
    },
    {
        id: 7,
        icon: vercel,
        name: 'vercel',
        size: 45,
        class: 'other_icon'
    },
    {
        id: 7,
        icon: aws,
        name: 'aws',
        size: 45,
        class: 'other_icon'
    },
    
]

const index = () => (
    <div className={styles.about_page}>
        <Navbar />
        <AboutMe pt="70px" />
        <HeaderTitle title="Skills"/>
        
        <div className={styles.main_sec}>
            <div className={styles.icons}>
                <div className={styles.icon_div}>
                    <Image className={styles.skill_icons} src={javascript} height={60} width={60} />
                    <h3>Javascript</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.reactjs}`} src={react} height={45} width={45} />
                    <h3>React</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.nextjs}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" height={45} width={45} />
                    <h3>Next.js</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.css}`} src={css} height={45} width={45} />
                    <h3>CSS3</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.html}`} src={html} height={45} width={45} />
                    <h3>HTML5</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={styles.skill_icons} src={sass} height={60} width={60} />
                    <h3>SASS</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.mui}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" height={50} width={50} />
                    <h3>Material UI</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.bootstap}`} src={bootstrap} height={45} width={45} />
                    <h3>BOOTSTRAP</h3>
                </div>
                
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.node}`} src={nodejs} height={45} width={45} />
                    <h3>NodeJS</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.express}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height={45} width={45} />
                    <h3>ExpressJs</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.mongodb}`} src={mongodb} height={45} width={45} />
                    <h3>MongoDB</h3>
                </div>
               
            </div>

            <div className={styles.others}>
                <h2>Others:</h2>

                <div className={styles.other_icons}>
                    {other_icons.map((items) => {
                        return <div key={items.id} className={styles.other_icon_div} >
                                <Image src={items.icon} style={{marginRight: '7px'}} className={items.class ? `${styles.round}` : `${styles.ot_icon}`} width={items.size} height={items.size} />
                                <h3>{items.name}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <Services />
    </div>
);

export default index;
