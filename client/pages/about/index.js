import Image from 'next/image';
import React from 'react';
import AboutMe from '../../Components/AboutMe/AboutMe';
import HeaderTitle from '../../Components/HeaderTitle/HeaderTitle';
import Navbar from '../../Components/Navbar/Navbar';
import Services from '../../Components/Services/Services';
import bootstrap from '../../images/bootstrap.png';
import css from '../../images/css.png';
import html from '../../images/html.png';
import javascript from '../../images/javascript.png';
import mongodb from '../../images/mongodb.png';
import nodejs from '../../images/nodejs.png';
import react from '../../images/react.png';
import sass from '../../images/sass.png';
import styles from '../../styles/about.module.scss';

const index = () => (
    <div className={styles.about_page}>
        <Navbar />
        <AboutMe pt="70px" />
        <HeaderTitle title="Skills"/>
        
            <div className={styles.icons}>
                <div className={styles.icon_div}>
                    <Image className={styles.skill_icons} src={javascript} height={70} width={70} />
                    <h3>Javascript</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.reactjs}`} src={react} height={55} width={55} />
                    <h3>React</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.nextjs}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" height={55} width={55} />
                    <h3>Next.js</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.css}`} src={css} height={55} width={55} />
                    <h3>CSS3</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.html}`} src={html} height={55} width={55} />
                    <h3>HTML5</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={styles.skill_icons} src={sass} height={70} width={70} />
                    <h3>SASS</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.bootstap}`} src={bootstrap} height={55} width={55} />
                    <h3>BOOTSTRAP</h3>
                </div>
                
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.node}`} src={nodejs} height={55} width={55} />
                    <h3>NodeJS</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.express}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height={55} width={55} />
                    <h3>ExpressJs</h3>
                </div>
                <div className={styles.icon_div}>
                    <Image className={`${styles.skill_icons} ${styles.mongodb}`} src={mongodb} height={55} width={55} />
                    <h3>MongoDB</h3>
                </div>
               
            </div>
        <Services />
    </div>
);

export default index;
