import React, { useEffect, useState } from "react";
import "./homepagestyles.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import Faq from "./Faq";
import Contact from "./Contact";
import AboutUsNew from "./Aboutusnew";
import styles from "./AboutUsnew.module.css";
import KUTE, { colors } from "kute.js";
import Blobbro from "./Blobbro";
export default function Home() {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scriptindex, setscriptIndex] = useState(0);
  const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
  const script = [
    "ncfhuikbn kjvbvnkdv",
    "fuhshuvn fkhjbinvk",
    "njibshkjn jvndbkvb ",
    "kiubsk snm sibk v",
  ];
  const images = [
    `images/kmeccollege.jpg`,
    `images/kmitcollege.jpg`,
    `images/mcv16311_malla.png`,
    `images/ngitcollegereal.jpeg`,
    `images/osmaniacollege.jpg`,
    `images/tirumalaengineeringcollege.jpg`,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // Change text based on scroll position
      if (scrollPosition < 300) {
        setTextIndex(0);
        setscriptIndex(0);
      } else if (scrollPosition >= 400 && scrollPosition < 500) {
        setTextIndex(1);
        setscriptIndex(1);
      } else if (scrollPosition >= 600 && scrollPosition < 700) {
        setTextIndex(2);
        setscriptIndex(2);
      } else {
        setTextIndex(3);
        setscriptIndex(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const handleScrollEnd = () => {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Adjust the duration of the transition as needed
    };

    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);
 
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div id="A" style={{ marginTop: "1.9cm" }}>
            <div className="container-expand ">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="images\homepagephoto.jpg"
                      alt="not loaded 1st item"
                      className="img-fluid"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images\lastEedit1.jpg"
                      alt="not loaded 2nd item"
                      className="img-fluid"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images\lastEdit2.jpg"
                      alt="not loaded 2nd item"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="container my-5  wrappingDiv">
              <p className="fontfortextaboveadanpradan">
                <center>Welcome to workshop slot reservation platform.</center>
              </p>
              <p className="fontforadanpradan">
                <center>Adan Pradan</center>
              </p>
            </div>
            {/* <div className="container-fluid middletemp">
              <h1> hello hello 123</h1>

            </div> */}
            {/* <div className={`${styles.spacer} ${styles.layerforhome}`}> */}
              {/* <p1 className="display-1 fontforaboutus"> About us </p1> */}
              {/* <img
                src="images\Robotic-Labs.jpg.webp"
                alt="Your Image"
                className={styles.centeredImage}
              />
              <p className={styles.centeredText}>
                <b>AdanPradan</b> is an innovative platform for workshop
                management platform designed to streamline the process of
                organizing and attending workshops.
                <br />
                <br />
                For <b>COLLEGES</b>, it provides a full solution to easily
                manage workshop details, such as scheduling, participant
                registration, and tracking.
                <br />
                <br />
                For <b>STUDENTS</b>, it provides a user-friendly interface to
                explore various workshops, register for those of interest, and
                receive updates and reminders. It simplifies the workshop
                experience, making it easier for students to engage with new
                learning opportunities and for colleges to manage.
              </p> */}
            {/* </div> */}
            <Blobbro/>
            {/* write code here */}
            
            
      {/* <div className={`${styles.spacer} ${styles.layer1}`}></div> */}

      {/* <section className={styles.sectionstyle}>
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section> */}

      {/* <div className={`${styles.spacer} ${styles.layer2} ${styles.flip}`}></div> */}

      

            {/* <div className={`${styles.spacer} ${styles.layer1}`}></div> */}

            {/* <section className={styles.sectionstyle}>
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section> */}

            {/* <div className={`${styles.spacer} ${styles.layer2} ${styles.flip}`}></div> */}


            {/* <AboutUsNew/> */}
            {/* <div className={styles.outerContainer}>
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
    </div> */}

            <div className={styles.faqContainer}>
              <Link to="/faq" className={styles.faqLink}>
                <p className={`${styles.faqText} display-6`}>
                  <b>Faq</b>
                </p>
              </Link>
              <Link to="/faq">
                <div className={styles.arrowContainer}>
                  <span className={styles.arrow}></span>
                  <span className={styles.arrow}></span>
                  <span className={styles.arrow}></span>
                </div>
              </Link>
            </div>

            {/* <div className="container-md  quick c1" style={{marginTop:"11cm"}}>
                         <div className="josephin"><p className="display-6"><b>SIMPLE STEPS TO BOOK YOUR WORKSHOP</b></p>
                              <br />
                         </div>
                         <div className="container">
                              <div className="row">
                                   <div className="col-4">
                                        <br />

                                        <img src="images\lastEdit4.jpg" alt="not loaded" className="img-fluid circle"  />
                                   </div>

                                   <div className="col-8">
                                        <div className="b1" ><h2>With a user-friendly interface, students can easily log in and browse through a variety of workshops available. They can choose workshops based on their interests or college-specific offerings. Once they find a workshop they like, they can easily book a spot by filling out a simple registration form.<br />
                                        </h2><br />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><br /><h2>What's more, students have the flexibility to cancel their workshop bookings if their plans change, giving them control and convenience. Adan Pradan aims to streamline the workshop booking process, making it hassle-free for students to explore and participate in various learning opportunities.</h2>
                                             <br />
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <img src="images\lastEdit5.jpg" alt="not loaded" className="img-fluid circle"  />
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-4">
                                        <img src="images\lastEdit5.jpg" alt="not loaded" className="img-fluid circle" />
                                   </div>
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><br /><h2>College users can efficiently manage workshops through Adan Pradan.
                                              They can log in to view workshops booked by students, track bookings by date, and download lists for record-keeping. 
                                              The platform allows colleges to seamlessly add, cancel, or update workshops, ensuring smooth management of their workshop offerings.</h2><br />
                                             <br />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><h2><br />Additionally, when a workshop is deleted, student dashboards reflecting bookings for that workshop are automatically updated, maintaining accurate records.</h2>
                                             <br />
                                             <br />
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <img src="images\lastEdit4.jpg" alt="not loaded" className="img-fluid circle" />
                                   </div>
                              </div>
                         </div>
                    </div> */}
            {/* <Faq/> */}
            {/* <Link to='/faq'><p className={`${styles.centeredContainer} display-6`}>Faq</p></Link> */}

            {/* <Contact/> */}
            <div className="container-fluid">
              <center>
                <h1> Popular colleges registered</h1>
              </center>
              <div
                className="marquee"
                style={{ display: "flex", overflow: "hidden" }}
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
