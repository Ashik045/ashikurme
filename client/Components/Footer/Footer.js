import Link from 'next/link';
import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import SocialIcon from '../SocialIcon/SocialIcon';
import styles from './footer.module.scss';

const Footer = () => {
  return (
      <div className={styles.footer_sec}>
        <div className={styles.footer_main}>
            <div className={styles.footer_main_hr}></div>
            <div className={styles.footer_main_component}>
                <div className={styles.footer_left}>
                    <h1>Ashikur</h1>
                    <p>MERN stack developer. With years of experience in both front-end and back-end technologies and a good deal of experience in creating dynamic, professional and responsive web applications.</p>

                    <div className={styles.footer_contact}>
                        <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank">
                            <p>ashikislam0455@gmail.com</p>
                        </Link>
                        <SocialIcon />
                    </div>
                </div>

                <div className={styles.footer_right}>
                        <Link href="/">
                            <p >Home</p>
                        </Link>
                        <Link href="/about">
                            <p >About</p>
                        </Link>
                        <Link href="/projects">
                            <p >Portfolio</p>
                        </Link>
                        <Link href="/blogs">
                            <p >Blogs</p>
                        </Link>
                        <Link href="/contact">
                            <p >Contact</p>
                        </Link>
                </div>
            </div>

            <div className={styles.copyright}>
                <p> <AiOutlineCopyright style={{marginRight: '3px'}} /> Copyrights Ashikur 2022. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer