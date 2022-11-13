import React from 'react';
import { FaDatabase, FaDesktop, FaTools } from "react-icons/fa";
import { MdAdminPanelSettings, MdViewCarousel, MdViewQuilt } from "react-icons/md";
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import styles from './services.module.scss';

const serviceDetails = [
  {
    id: 1,
    title: 'FullStack Development',
    icon: <FaDesktop className={styles.s_icon} />,
    text: 'Experienced in MERN stack development. Expert in MongoDB, Express, React.js and Nodejs.'
  },
  {
    id: 2,
    title: 'Frontend Development',
    icon: <MdViewQuilt className={styles.s_icon} />,
    text: 'More than 3 years of experience in React.js, Next.js, JS, HTML5, CSS3, SASS, and Bootstrap5.'
  },
  {
    id: 3,
    title: 'Backend Development',
    icon: <FaDatabase className={styles.s_icon} />,
    text: 'Expert in Node.js, Express.js, and MongoDB backend and API development.'
  },
  {
    id: 4,
    title: 'BUG FIXING',
    icon: <FaTools className={styles.s_icon} />,
    text: 'Solid experienced in MERN stack bug fixing and fix API issues.'
  },
  {
    id: 5,
    title: 'RESPONSIVE DESIGN',
    icon: <MdViewCarousel className={styles.s_icon} />,
    text: 'Experienced in building fully responsive and user-friendly websites.'
  },
  {
    id: 6,
    title: 'Admin Template',
    icon: <MdAdminPanelSettings className={styles.s_icon} />,
    text: 'Solid understanding of creating an admin dashboard.'
  }
]

const Services = () => {
  return (
    <div className={styles.services}>
    <HeaderTitle title="My Expertise"/>
      <div className={styles.services_main}>
          {serviceDetails.map((items) => {
            return (
              <div className={styles.services_card} key={items.id}>
                <div className={styles.services_card_top}>
                  <span>{items.icon}</span>
                  <h2>{items.title}</h2>
                </div>
                
                <div className={styles.services_card_btm}>
                  {`<h4>`} <p className={styles.services_card_txt}>{items.text}</p> {`</h4>`}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Services