import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaStream, FaTimes } from "react-icons/fa";
import styles from './navbar.module.scss';

function Navbar() {
    const [srlHeight, setSrlHeight] = useState(false);
    const [toggle, setToggle] = useState(false);
    const router = useRouter()

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line func-names
        window.onscroll = function () {
            if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
                setSrlHeight(true);
            } else {
                setSrlHeight(false);
            }
        };
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div
            className={styles.navbar}
            style={{
                boxShadow:
                    srlHeight &&
                    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                backgroundColor: srlHeight && '#0b1a30f1',
                transition: 'all 0.3s ease',
            }}
        >
            <div className={styles.navbar_main}>
                <Link href="/">
                    <div className={styles.brand}>
                        <h3>Ashikur</h3>
                        <span>I&apos;m a programmer</span>
                    </div>
                </Link>

                <div className={styles.menus}>
                    <Link href="/">
                        <p className={router.pathname === '/' ? `${styles.active}` : ''}>Home</p>
                    </Link>
                    <Link href="/about">
                        <p className={router.pathname === '/about' ? `${styles.active}` : ''}>About</p>
                    </Link>
                    <Link href="/projects">
                        <p className={router.pathname === '/projects' ? `${styles.active}` : ''}>Portfolio</p>
                    </Link>
                    <Link href="/blogs">
                        <p className={router.pathname === '/blogs' ? `${styles.active}` : ''}>Blogs</p>
                    </Link>
                </div>

                <div className={styles.responsive_navbar}>
                    {!toggle &&  <FaStream onClick={handleToggle} className={styles.toggle_icon}/>}
                </div>

                {toggle && (
                    <div className={styles.res_nav_menus}>
                        <FaTimes className={styles.times_icon} onClick={handleToggle} />
                        <div className={styles.res_nav_menu}>
                            <Link href="/">
                                <p onClick={handleToggle} className={router.pathname === '/' ? `${styles.active}` : ''}>Home</p>
                            </Link>
                            <Link href="/about">
                                <p onClick={handleToggle} className={router.pathname === '/about' ? `${styles.active}` : ''}>About</p>
                            </Link>
                            <Link href="/projects">
                                <p onClick={handleToggle} className={router.pathname === '/projects' ? `${styles.active}` : ''}>Portfolio</p>
                            </Link>
                            <Link href="/blogs">
                                <p onClick={handleToggle} className={router.pathname === '/blogs' ? `${styles.active}` : ''}>Blogs</p>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default Navbar;
