import React from 'react';
import styles from './navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.navbar}>
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
