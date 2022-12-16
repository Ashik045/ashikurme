import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Blog from '../../Components/BLog/Blog'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../../styles/blogs.module.scss'

const index = ({blog}) => {
  const [blogs, setBlogs] = useState(blog);
  const [tag, setTag] = useState(false);
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [filterBlogByTag, setFilterBlogByTag] = useState([]);
  const [input, setInput] = useState('')
  
  useEffect(() => {
    if (input?.length === 0) {
      setFilterBlogs(blogs);
  }
  }, [input, blogs])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input?.length > 0) {
      const filterData = blogs?.filter((blog) => {
        return Object.values(blog.title).join('').toLowerCase().includes(input?.toLowerCase())
      })
      setFilterBlogs(filterData)
    } else {
      setFilterBlogs(blogs)
    }
  }

  const handleTag = async (tagg) => {
    setTag(true)
    console.log(tag);
    if (tagg) {
      if (tagg === 'all') {
        const res2 = await axios.get(`http://localhost:4000/api/blogs/all`)
        setBlogs(res2.data.message)
      } else {
        const res = await axios.get(`http://localhost:4000/api/blogs/all?tag=${tagg}`)
        console.log(res.data.message);
        setBlogs(res.data.message)
    }
    } else {
      setBlogs(blogs)
    }
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
                <span onClick={() => handleTag('all')}>All</span>
                <span onClick={() => handleTag('javascript')}>Javascript</span>
                <span onClick={() => handleTag('security')}>Security</span>
                <span onClick={() => handleTag('website')}>Website</span>
                <span onClick={() => handleTag('css')}>CSS</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {blogs.length === 0 || filterBlogs.length === 0 ? (
              <p style={{textAlign: 'center', color: '#ccd6f6'}}>No blog found!</p>
            ) : (filterBlogs || blogs)?.map((blog) => {
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