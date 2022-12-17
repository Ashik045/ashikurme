import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './otherblog.module.scss'

const OtherBlog = ({blog}) => {
  console.log(blog.desc);
  return (
    <div className={styles.other_blog}>
    <Link href={`/blogs/${blog._id}`}>
        <Image alt='blog' src={blog.image} className={styles.other_blog_img} layout="responsive" height={80} width={100}/>
    </Link>

        <div className={styles.other_blog_text}>
            <Link href={`/blogs/${blog._id}`}>
                <h3>{blog.title}</h3>
            </Link>
            <p>{blog?.desc[0]}</p>
        </div>
    </div>
  )
}

export default OtherBlog