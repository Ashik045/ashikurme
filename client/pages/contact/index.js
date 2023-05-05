import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../../styles/contact.module.scss'

const index = () => {

    return (
    <div className={styles.contact_page}>
    <div className={styles.contact_page_main}>
        <Navbar />

        <Contact />
        <Footer />
        </div>
    </div>
  )
}

export default index