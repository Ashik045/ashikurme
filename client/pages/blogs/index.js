import axios from 'axios'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Blog from '../../Components/BLog/Blog'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../../styles/blogs.module.scss'

const index = ({blog}) => {
  const [blogs, setBlogs] = useState(blog);
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [input, setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input?.length > 0) {
      const filterData = blogs?.filter((blog) => {
        Object.values(blog.title).join('').toLowerCase().includes(input?.toLowerCase())
      })
      setFilterBlogs(filterData)
      console.log(input);
    } else {
      setFilterBlogs(blogs)
    }

    // 
    //   if (input?.length === 0) {
    //     setFilterBlogs(blogs);
    // }
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

            <div className={styles.tag_sec}>
              <h2>Tags:</h2>
              <div className={styles.tags}>
                <span>Website</span>
                <span>Javascript</span>
                <span>Security</span>
                <span>Website</span>
                <span>CSS</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {blogs?.map((blog) => {
              return <Blog key={blog._id} blog={blog} />
            })}
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default index

export async function getStaticProps() {
  const res2 = await axios.get('http://localhost:4000/api/blogs/all')

  const blogs = await res2.data.message;

  return {
      props: {
          blog: blogs,
      }
  }
}