import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import OtherBlog from '../../Components/OtherBlog/OtherBlog';
import styles from '../../styles/blogdetail.module.scss';

const blogDetail = ({blogDetail, otherBlogs}) => {
  // console.log(otherBlogs);
  return (
    <div className={styles.blogdetail_page}>
      <Head>
            <title>Blogs/{blogDetail.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.blog_detail}>
        <Navbar />

        <div className={styles.blog_detail_main}>
          <div className={styles.main_blogdetail}>
            <h1>{blogDetail.title}</h1>
            <Image src={blogDetail.image} className={styles.blogdetail_img} height={400} width={700} layout='responsive' alt='blogs' />

            <p>{blogDetail.desc}</p>

            <h2>{blogDetail.subtitle1}</h2>
            <p>{blogDetail.subdesc1}</p>

            <h2>{blogDetail.subtitle2}</h2>
            <p>{blogDetail.subdesc2}</p>
          </div>

          <div className={styles.blogdetail_right}>
            <h2>You might also like</h2>

            {otherBlogs.filter((blog) => blog._id !== blogDetail._id).slice(0, 3).map((blogg) => {
              return <OtherBlog key={blogg._id} blog={blogg} />
            })}
          </div>
        </div>
        </div>
    </div>
  )
}

export default blogDetail

// getStaticPaths 
export async function getStaticPaths() {
  const res = await axios.get('http://localhost:4000/api/blogs/all');

  const data = await res.data.message;

  const paths = data.map((item) => {
    return {
      params: {
        blogid: item._id
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

// getStaticProps
export async function getStaticProps(context) {
  const params = context.params
  const res = await axios.get(`http://localhost:4000/api/blogs/${params.blogid}`)
  const res2 = await axios.get(`http://localhost:4000/api/blogs/all`)

  const data = await res.data.message;
  const data2 = await res2.data.message;

  return {
    props: {
      blogDetail: data,
      otherBlogs: data2,
    }
  }
}