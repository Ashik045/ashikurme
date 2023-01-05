import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import styles from '../../styles/projectdetail.module.scss';

const projectDetail = ({project}) => {
  const [sliderNum, setSliderNum] = useState(0)
  
  return (
    <div className={styles.project}>
        <Head>
            <title>Project/{project.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <div className={styles.project_detail}>
        <Navbar />

        <div className={styles.project_detail_main}>
          <div className={styles.project_detail_left}>
            <div className={styles.project_detail_slider}>
              <Image src={project.images[sliderNum]} alt="website" className={styles.project_images} width={650} height={450} layout="responsive" />

              {/* imgs */}
              <div className={styles.slider_btm_imgs}>
                {project.images.map((img, i) => {
                  return <Image key={i} src={img} onClick={() => setSliderNum(i)} alt="project img" className={styles.slider_btm_img} height={50} width={90} />
                })}
              </div>
            </div>


            {/* features that include on mobile devices */}
            <div className={styles.responsive_detail}>
              <h1>{project?.title}</h1>

              <span className={styles.iconsss}>
                  <Link href={project.githubLink} target="_blank">
                    <p> <FaGithub className={styles.icon} size={20} /> Github </p>
                  </Link>
                  <Link href={project.liveLink} target="_blank">
                    <p> <FaExternalLinkAlt size={20} className={styles.icon} /> Live Link </p>
                  </Link>
              </span>
            </div>

            <h2>Project Details:</h2>
            <p>{project?.detail}</p>

            <h2>Features:</h2>
            <ul>
              {project.features.map((feature, i) => {
               return <li key={i}><MdDoneAll style={{marginRight: '5px'}} /> {feature}</li>
              })}
            </ul>

            <div className={styles.responsive_detail2}>
              <h3>Technologies & Tools:</h3>
              <div className={styles.technologies}>
                  {project.tools.slice(0, 5).map((tool, i) => {
                      return <span key={i}>{tool}</span>
                  })}
              </div>
            </div>
          </div>

          <div className={styles.project_detail_right}>

            <h1>{project?.title}</h1>

            <span className={styles.iconsss}>
                <Link href={project.githubLink} target="_blank">
                   <p> <FaGithub className={styles.icon} size={20} /> Github </p>
                </Link>
                <Link href={project.liveLink} target="_blank">
                   <p> <FaExternalLinkAlt size={20} className={styles.icon} /> Live Link </p>
                </Link>
            </span>

            <h3>Technologies & Tools:</h3>
            <div className={styles.technologies}>
                {project.tools.slice(0, 5).map((tool, i) => {
                    return <span key={i}>{tool}</span>
                })}
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  )
}

export default projectDetail;

// static site generation
export async function getStaticPaths() {
  const res = await axios.get('https://ashikurme-backend.onrender.com/api/projects/all')
  const datas = await res.data.message;

  const paths = datas.map((data) => ({
      params: {
        projectid: data._id
      }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

// fetch the project data by its projectid
export async function getStaticProps(context) {
  const params = context.params;

  const res = await axios.get(`https://ashikurme-backend.onrender.com/api/projects/${params.projectid}`)

  const project = await res.data.message;

  return {
    props: {
      project: project,
    },
    revalidate: 10,
  }
}