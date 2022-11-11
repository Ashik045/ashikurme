import Head from 'next/head';
import { useState } from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import styles from '../styles/home.module.scss';

export default function Home() {
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const timer = setTimeout(() => {
    //         console.log('run');
    //         setLoading(false);
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="container">
            <Head>
                <title>Portfolio - Ashikur</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? (
                <div className={styles.loader_main}>
                    <span className={styles.loader} />
                </div>
            ) : (
                <main className="main">
                    <Navbar />
                    <Header />
                    <AboutMe />
                </main>
            )}
        </div>
    );
}
