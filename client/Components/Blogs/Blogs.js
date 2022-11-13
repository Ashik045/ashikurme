import React from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import styles from './blogs.module.scss'

const Blogs = () => {
  return (
    <div className={styles.blogs_sec}>
        <HeaderTitle title="Recent Blogs" />
        <div className={styles.blogs_sec_main}>
            blog
        </div>
    </div>
  )
}

export default Blogs