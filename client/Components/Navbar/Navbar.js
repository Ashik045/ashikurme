import React, { useState } from 'react';
import styles from './navbar.module.scss';

function Navbar() {
    const [srlHeight, setSrlHeight] = useState(false);

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
                <div className={styles.brand}>
                    <h3>Ashikur</h3>
                    <span>I&apos;m a programmer</span>
                </div>

                <div className={styles.menus}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Portfolio</p>
                    <p>Contact</p>
                </div>

                {/* <div className="toggler">
                    <button
                        class="hamburger hamburger--elastic"
                        type="button"
                        aria-label="Menu"
                        aria-controls="navigation"
                    >
                        <span class="hamburger-box">
                            <span class="hamburger-inner" />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
