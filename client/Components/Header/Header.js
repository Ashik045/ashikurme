/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import headerBg from '../../images/bg3.png';
import styles from './header.module.scss';

function Header() {

    return (
        <div className={styles.header}>
            

            
            <div className={styles.header_main}>
                <div className={styles.header_main_left}>
                    <p className={styles.name}>Hello, I'm</p>
                    <h1>Ashikur Islam.</h1>
                    <div className={styles.header_animated_txt}>
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            'I am a fullstack developer.',
                            1000,
                            'I am a frontend expert.',
                            1000,
                            'I am a programmer.',
                            1000,
                        ]}
                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                        style={{ fontSize:  '4em', color: '#ccd6f6', fontWeight: 'bold' }}
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        className={styles.aimatedTxt}
                    />
                    </div>

                    <p>
                    With years of experience in MERN stack development, I specialize in creating
                    dynamic, professional and responsive web applications.
                    </p>

                    {/* <SocialIcon /> */}
                </div>

            </div>
                <Image src={headerBg} className={styles.header_bg} />
        </div>
    );
}

export default Header;
