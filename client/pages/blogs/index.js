import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Blog from '../../Components/BLog/Blog'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../../styles/blogs.module.scss'

const index = ({blog}) => {
  const [blogs, setBlogs] = useState(blog);
  const [tag, setTag] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true)
    // console.log(tag);
    if (tagg) {
      if (tagg === 'all') {
        const res2 = await axios.get(`https://ashikurme-backend.onrender.com/api/blogs/all`)
        setBlogs(res2.data.message)
      } else {
        const res = await axios.get(`https://ashikurme-backend.onrender.com/api/blogs/all?tag=${tagg}`)
        setBlogs(res.data.message)
    }
    setLoading(false)
    } else {
      setBlogs(blogs)
      setLoading(false)
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
                <span onClick={() => handleTag('react')}>React</span>
                <span onClick={() => handleTag('website')}>NodeJS</span>
                <span onClick={() => handleTag('css')}>CSS</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {loading ? <div className={styles.right_skeleton}>
                          <div>
                            <Skeleton height={180} baseColor="#ccd6f6" />
                            <Skeleton
                                height={40}
                                style={{ marginTop: '15px', marginBottom: '10px' }}
                                baseColor="#ccd6f6"
                            />
                            <Skeleton count={4} baseColor="#ccd6f6" />
                          </div>
                          <div>
                            <Skeleton height={180} baseColor="#ccd6f6" />
                            <Skeleton
                                height={40}
                                style={{ marginTop: '15px', marginBottom: '10px' }}
                                baseColor="#ccd6f6"
                            />
                            <Skeleton count={4} baseColor="#ccd6f6" />
                          </div>
                          <div>
                            <Skeleton height={180} baseColor="#ccd6f6" />
                            <Skeleton
                                height={40}
                                style={{ marginTop: '15px', marginBottom: '10px' }}
                                baseColor="#ccd6f6"
                            />
                            <Skeleton count={4} baseColor="#ccd6f6" />
                          </div>
                          <div>
                            <Skeleton height={180} baseColor="#ccd6f6" />
                            <Skeleton
                                height={40}
                                style={{ marginTop: '15px', marginBottom: '10px' }}
                                baseColor="#ccd6f6"
                            />
                            <Skeleton count={4} baseColor="#ccd6f6" />
                          </div>
                      </div> : blogs.length === 0 || filterBlogs.length === 0 ? (
              <p style={{textAlign: 'center', color: '#ccd6f6'}}>No blog found!</p>
            ) : <div className={styles.right_main_blogs}> {(filterBlogs || blogs)?.map((blog) => {
              return <Blog key={blog._id} blog={blog} />
            }) }
              </div> 
            }
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default index

export async function getStaticProps() {
  const res2 = await axios.get('https://ashikurme-backend.onrender.com/api/blogs/all')

  const blogs = await res2.data.message;

  return {
      props: {
          blog: blogs,
      }
  }
}