import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './blog.module.scss'

const Blog = ({blog}) => {
  return (
    <div className={styles.blog_component}>
        <Image src={blog.image} className={styles.image} alt="web blogs" width={400} height={300} layout="responsive" objectFit='cover' />
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>

        <p className={styles.continue_reading} >Continue Reading <FaArrowRight className={styles.continue_reading_icon} /></p>
    </div>
  )
}

export default Blog