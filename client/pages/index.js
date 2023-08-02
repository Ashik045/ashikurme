import axios from 'axios';
import Head from 'next/head';
import AboutMe from '../Components/AboutMe/AboutMe';
import Blogs from '../Components/Blogs/Blogs';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';
import Services from '../Components/Services/Services';

export default function Home({projects, blogs}) {

    return (
        <div className="container">
            <Head>
                <title>Portfolio - Ashikur</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

                <main className="main">
                    <Navbar />
                    <Header />
                    <AboutMe />
                    <Projects projects={projects} />
                    <Services />
                    <Blogs blogs={blogs} />
                    <Contact />
                    <Footer />
                </main>
        </div>
    );
}

// fetch the data from the server
export async function getStaticProps() {
    const res = await axios.get('https://ashikurme-backend.onrender.com/api/projects/all')
    const res2 = await axios.get('https://ashikurme-backend.onrender.com/api/blogs/all')

    const projects = await res.data.message;
    const blogs = await res2.data.message;

    return {
        props: {
            projects: projects,
            blogs: blogs.slice(0, 5),
        }
    }
}