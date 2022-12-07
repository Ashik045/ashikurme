import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import Blogs from '../Components/Blogs/Blogs';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';
import Services from '../Components/Services/Services';
import styles from '../styles/home.module.scss';

export default function Home({projects, blogs}) {
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

    {/* show the beautiful eye loading animation */}
            {loading ? (
                <div className={styles.loader_main}>
                    <span className={styles.loader} />
                </div>
            ) : (
                <main className="main">
                    <Navbar />
                    <Header />
                    <AboutMe />
                    <Projects projects={projects} />
                    <Services />
                    <Blogs blogs={blogs} />
                </main>
            )}
        </div>
    );
}

// fetch the data from the server
export async function getStaticProps() {
    const res = await axios.get('http://localhost:4000/api/projects/all')
    const res2 = await axios.get('http://localhost:4000/api/blogs/all')

    const projects = await res.data.message;
    const blogs = await res2.data.message;

    return {
        props: {
            projects: projects,
            blogs: blogs,
        }
    }
}