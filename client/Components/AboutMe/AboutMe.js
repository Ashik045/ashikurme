import Image from 'next/image';
import React from 'react';
import resume from '../../images/Ashikur.pdf';
import profilePic from '../../images/up-dp-removebg-preview (3).jpg';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import SocialIcon from '../SocialIcon/SocialIcon';
import styles from './aboutme.module.scss';

function AboutMe({pt, social}) {
    // 
    return (
        <div className={styles.aboutme} style={{paddingTop: pt ? `${pt}` : '0px'}}> 
            <HeaderTitle title="About Me"  />
            <div className={styles.aboutme_main} >
                <Image
                    src={profilePic}
                    className={styles.profileImg}
                    alt="web developer"
                    height={410}
                    width={400}
                    layout="responsive"
                />

                <div className={styles.text}>
                    <h2 style={{margin: social && "0px"}}>Hi, my name is Ashikur</h2>
                    <p >
                    As a seasoned MERN stack developer, I possess a profound understanding of software
                    architecture and database coordination. Proficient in NodeJS, MongoDB, JavaScript,
                    TypeScript, ReactJS, and Next.JS.

                    </p>
                    <p style={{margin: social && "-10px 0px"}}>
                    My strong drive for learning and adapting to new technologies has enabled me to stay
                    up-to-date with the latest trends and continuously improve my skills.
                    </p>

                    <p className={styles.expertise}>Among my areas of expertise are:</p>
                    <ul>
                        <li>Next.Js</li>
                        <li>React Js</li>
                        <li>TypeScript</li>
                        <li>Javascript</li>
                        <li>Node.Js</li>
                        <li>MongoDB</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>HTML5</li>
                        <li>Bootstap5</li>
                    </ul>

                    {social && (
                        <div style={{paddingTop: '0px'}}>
                        <p style={{margin: social && "0px 0px 5px"}}>Socials: </p>
                            <SocialIcon />
                        </div>
                    )}

                    <div className={styles.resume_btn}>
                        <a href={resume} download="AshikurFull-stack.pdf">Download Resume</a>
                    </div>
                </div>

               
            </div>
        </div>
    );
}

export default AboutMe;
