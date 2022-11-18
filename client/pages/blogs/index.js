import axios from 'axios'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Blog from '../../Components/BLog/Blog'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../../styles/blogs.module.scss'

const index = ({blogs}) => {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input);
  }
  return (
    <div className={styles.blog_page}>
        <Navbar />

        <div className={styles.blog_page_main}>
          <div className={styles.left}>
            <div className={styles.form}>
              <form action='' onSubmit={handleSubmit}>
                <div className={styles.form_div}>
                  <input type="text" placeholder='Search..' value={input} onChange={(e) => setInput(e.target.value)} />
                  <FaSearch className={styles.submit_icon} size={22} type="submit" onClick={handleSubmit} />
                </div>
              </form>
            </div>

            <div className={styles.tags}>
              <h3>Tags:</h3>
              <span>Website</span>
              <span>Javascript</span>
              <span>Security</span>
              <span>Website</span>
              <span>CSS</span>
            </div>
          </div>

          <div className={styles.right}>
            {blogs.map((blog) => {
              return <Blog key={blog._id} blog={blog} />
            })}
          </div>
        </div>
    </div>
  )
}

export default index

export async function getStaticProps() {
  const res2 = await axios.get('http://localhost:4000/api/blogs/all')

  const blogs = await res2.data.message;

  return {
      props: {
          blogs: blogs,
      }
  }
}