import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './blog.module.scss'

const Blog = ({blog}) => {
  return (
    <div className={styles.blog_component}>
      <Link href={`/blogs/${blog._id}`}>
          <Image src={blog.image} className={styles.image} alt="web blogs" width={400} height={300} layout="responsive" objectFit='cover' />
        </Link>
        <Link href={`/blogs/${blog._id}`}>
          <h2>{blog.title}</h2>
        </Link>
        <p>{blog?.desc[0]}</p>

      {/* go to details page */}
      <Link href={`/blogs/${blog._id}`}>
        <p className={styles.continue_reading} >Continue Reading <FaArrowRight className={styles.continue_reading_icon} /></p>
        </Link>
    </div>
  )
}

export default Blog