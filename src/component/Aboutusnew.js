import React from 'react';
import styles from './AboutUsnew.module.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const AboutUsNew = () => {
  return (
    <>
    <div className={styles.outerContainer}>
      <div className={styles.centeredContainer}>
        <p className='display-6'><b>About Us</b></p>
        <img src="images\Robotic-Labs.jpg.webp" alt="Your Image" className={styles.centeredImage} />
        <p className={styles.centeredText}>
          <b>AdanPradan</b> is an innovative platform for workshop management platform designed to streamline the process of organizing and attending workshops.
          <br /><br />
          For <b>schools</b>, it provides a full solution to easily manage workshop details, such as scheduling, participant registration, and tracking.
          <br /><br />
          For <b>students</b>, it provides a user-friendly interface to explore various workshops,
          register for those of interest, and receive updates and reminders. It simplifies the workshop experience, 
          making it easier for students to engage with new learning opportunities and for colleges to manage 
        </p>
      </div>
    </div>
    <div className={styles.faqContainer}>
    <Link to='/faq' className={styles.faqLink}>
      <p className={`${styles.faqText} display-6`}><b>Faq</b></p>
    </Link>
    <Link to='/faq'>
    <div className={styles.arrowContainer}>
      <span className={styles.arrow}></span>
      <span className={styles.arrow}></span>
      <span className={styles.arrow}></span>
    </div>
    </Link>
  </div>
  </>
  );
};

export default AboutUsNew;
