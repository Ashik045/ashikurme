import Image from 'next/image';
import React from 'react';
import profilePic from '../../images/up-dp-removebg-preview (3).jpg';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import styles from './aboutme.module.scss';

function AboutMe() {
    return (
        <div className={styles.aboutme}>
            <HeaderTitle title="About Me" />
            <div className={styles.aboutme_main}>
                <Image
                    src={profilePic}
                    className={styles.profileImg}
                    alt="web developer"
                    height={400}
                    width={400}
                />

                <div className={styles.text}>
                    <h2>Hello, My name is Ashikur</h2>
                    <p>
                        I build things for web. I work with clients to identify their website goals
                        and work with them to find a solution that meets their needs. I am here to
                        assist you with any needs you may have. I have the positive attitude and
                        expertise to assist you with any project, regardless of how small or large
                        it might be.
                    </p>

                    <p className={styles.expertise}>Among my areas of expertise are:</p>
                    <ul>
                        <li>Javascript</li>
                        <li>React Js</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>HTML5</li>
                        <li>Bootstap5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;