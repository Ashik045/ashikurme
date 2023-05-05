import Image from 'next/image';
import React from 'react';
import profilePic from '../../images/up-dp-removebg-preview (3).jpg';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import SocialIcon from '../SocialIcon/SocialIcon';
import styles from './aboutme.module.scss';

function AboutMe({pt, social}) {
    return (
        <div className={styles.aboutme} style={{paddingTop: pt ? `${pt}` : '0px'}}> 
            <HeaderTitle title="About Me"  />
            <div className={styles.aboutme_main} >
                <Image
                    src={profilePic}
                    className={styles.profileImg}
                    alt="web developer"
                    height={400}
                    width={400}
                    layout="responsive"
                />

                <div className={styles.text}>
                    <h2>Hi, my name is Ashikur</h2>
                    <p>
                    As an accomplished MERN stack developer, I possess a profound understanding
                    of software architecture and database design.
                    </p>
                    <p>
                    My strong drive for learning and adapting to new technologies has enabled me to
                    stay up-to-date with the latest trends and continuously improve my skills.
                    </p>

                    <p className={styles.expertise}>Among my areas of expertise are:</p>
                    <ul>
                        <li>Next.js</li>
                        <li>React Js</li>
                        <li>TypeScript</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>HTML5</li>
                        <li>Bootstap5</li>
                    </ul>

                    {social && (
                        <div style={{paddingTop: '5px'}}>
                        <p>Socials: </p>
                            <SocialIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
