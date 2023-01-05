import Link from 'next/link';
import React from 'react';
import { FaBehanceSquare, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from './socialicon.module.scss';

const SocialIcon = () => {
  return (
    <div className={styles.social_links}>
        <Link href="https://github.com/Ashik045" target="_blank">
            <FaGithub className={styles.social_link} />
        </Link>
        <Link href="https://www.linkedin.com/in/ashikur045/" target="_blank">
            <FaLinkedin className={styles.social_link} />
        </Link>
        <Link href="https://twitter.com/ashikur045" target="_blank">
            <FaTwitter className={styles.social_link} />
        </Link>
        <Link href="https://web.facebook.com/profile.php?id=100022588012173" target="_blank">
            <FaFacebook className={styles.social_link} />
        </Link>
        <Link href="https://www.behance.net/ashikur045" target="_blank">
            <FaBehanceSquare className={styles.social_link} />
        </Link>
    </div>
  )
}

export default SocialIcon