import Image from 'next/image';
import React from 'react';
import AboutMe from '../../Components/AboutMe/AboutMe';
import HeaderTitle from '../../Components/HeaderTitle/HeaderTitle';
import Navbar from '../../Components/Navbar/Navbar';
import Services from '../../Components/Services/Services';
import javascript from '../../images/javascript.png';
import styles from '../../styles/about.module.scss';

const index = () => (
    <div className={styles.about_page}>
        <Navbar />
        <AboutMe pt="70px" />
        <HeaderTitle title="Skills"/>
            <div className={styles.about_page_main}>
            

            <Image className={styles.skill_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={100} width={100} />

            <Image className={styles.skill_icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height={100} width={100} />

            <Image className={styles.skill_icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height={100} width={100} />

            <Image className={styles.skill_icons} src={javascript} height={100} width={100} />
          
            </div>
        <Services />
    </div>
);

export default index;
