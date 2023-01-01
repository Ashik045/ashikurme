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
                        A self-motivated MERN stack developer. Being a fast learner, I am always looking to learn new technologies and constantly trying to keep up with new trends. I bring ideas to life with excellent design & coding skills. I have the positive attitude and expertise to assist you with any project, regardless of how small or large it might be.
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
