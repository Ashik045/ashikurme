/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { TypeAnimation } from 'react-type-animation';
import { loadFull } from 'tsparticles';
import styles from './header.module.scss';

function Header() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className={styles.header}>
            {/* <Particles options={options} init={customInit} /> */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#64ffda',
                        },
                        links: {
                            color: '#64ffda',
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/*  */}
            <div className={styles.header_main}>
                <p>Hi, my name is</p>
                <h1>Ashikur Islam.</h1>
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
                    style={{ fontSize: '4em', color: '#ccd6f6', fontWeight: 'bold' }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                />

                <p>
                    I&apos;m a full-stack developer. I have a solid understanding of both front-end
                    and back-end technologies and a good deal of experience developing web
                    applications.
                </p>
            </div>
        </div>
    );
}

export default Header;
