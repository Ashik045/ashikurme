import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import styles from './blogs.module.scss';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Link from 'next/link';
import { Autoplay, Pagination } from "swiper";
import Blog from '../BLog/Blog';

const Blogs = ({blogs}) => {
  return (
    <div className={styles.blogs_sec}>
        <HeaderTitle title="Recent Blogs" />
        <div className={styles.blogs_sec_main}>
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
            {blogs.map((blog) => {
                return (
                    <SwiperSlide key={blog._id} >
                        <Blog blog={blog} />
                    </SwiperSlide>
                )
            })}
        </Swiper>  
        </div>

        <div className={styles.see_all_btn}>
            <Link href="/blogs">
                <button type='button' >See All Blogs</button>
            </Link>
        </div>
    </div>
  )
}

export default Blogs