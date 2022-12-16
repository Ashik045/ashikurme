import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Project from '../../Components/Project/Project'
import styles from '../../styles/projects.module.scss'

const index = ({projects}) => {
  return (
    <div className={styles.project}>
        <Head>
            <title>Projects</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.project_page}>
          <Navbar />
          
          <div className={styles.project_page_main}>
            {projects.map((items) => {
              return <Project key={items._id} project={items} />
            })}
          </div>

          <Footer />
        </div>

    </div>
  )
}

export default index

export async function getStaticProps() {
  const res = await axios.get('https://ashikurme-backend.onrender.com/api/projects/all')

  const projectData = await res.data.message

  return {
    props: {
      projects: projectData
    }
  }
}