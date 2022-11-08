import Head from 'next/head';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

export default function Home() {
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
            </main>
        </div>
    );
}