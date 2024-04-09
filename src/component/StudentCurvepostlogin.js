import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Curvepostlogin.module.css";
import KUTE, { colors } from "kute.js";
import CollegeCard from "./CollegeCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const StudentCurvepostlogin = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  }, []);
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
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
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          "https://adan-pradan-backend.onrender.com/AdanPradan/colleges/list"
        );
        setData(response.data.post);

        setloading(false);

        const shuffledData = shuffleArray(response.data.post);
        const uniqueTitles = new Set();
        const selectedCollege = [];
        for (const clg of shuffledData) {
          if (!uniqueTitles.has(clg.collegeName)) {
            uniqueTitles.add(clg.collegeName);
            selectedCollege.push(clg);

            if (selectedCollege.length >= 6) {
              break;
            }
          }
        }

        while (selectedCollege.length < 3 && shuffledData.length > 0) {
          const randomIndex = Math.floor(Math.random() * shuffledData.length);
          const randomWorkshop = shuffledData.splice(randomIndex, 1)[0];
          selectedCollege.push(randomWorkshop);
        }

        setData(selectedCollege);
      } catch (error) {
        seterror(true);
        console.error("Error fetching data:", error);
        setloading(false);
      } finally {
        seterror(false);
        setloading(false);
      }
    };
    fetchData();
    console.log(Data);
  }, []);
  return (
    <>
      <section className={`${styles.dark} ${styles.sectionstyle} mt-5` }>
        <p
          className="display-1"
          styles={{ color: "#ffc107", justifyContent: "center" }}
        >
          Book your workshop now{" "}
        </p>
        {/* <div className={styles.curve}></div> */}
        <div className={`${styles.customshapedividerbottom1712640759}`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className={`${styles.shapefill}`}
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className={`${styles.shapefill}`}
            ></path>
          </svg>
        </div>
        <div className={`${styles.customshapedividertop1712643250}`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className={`${styles.shapefilldown}`}
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className={`${styles.shapefilldown}`}
            ></path>
          </svg>
        </div>
      </section>

      {/* <section className={`${styles.bubble} ${styles.sectionstyle}`}>
      <h1>Nice Curves!</h1>
      <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section> */}
      <section className={`${styles.bubble} ${styles.sectionstyle2}`}>
        <div className={styles["bubble-content"]}>
          <p style={{ justifyContent: "center" }}>Select College</p>
        </div>
      </section>
      <section
        className={`${styles.dark}${styles.sectionstyle}`}
        style={{ background: "#0f0f10" }}
      >
        <div className={`container ${styles["bubble-content"]}`}>
          <div className="row justify-content-center">
            {loading ? (
              <h1>
                <Loader />
              </h1>
            ) : error ? (
              <h1>Something went wrong</h1>
            ) : (
              Data.map((clg) => {
                return (
                  <div className="col-md-4 mt-2">
                    <CollegeCard clg={clg} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.cream} ${styles.sectionstyle3}`}>
        <p className={`${styles.stepstyle}`}> steps to book workshop</p>
        <div className={styles.wave}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles["shape-fill"]}
            ></path>
          </svg>
        </div>
      </section>

      {/* <div className={`${styles.spacer} ${styles.layer1}`}></div> */}

      {/* <section className={styles.sectionstyle}>
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section> */}

      {/* <div className={`${styles.spacer} ${styles.layer2} ${styles.flip}`}></div> */}

      <section className={`${styles.creamgradient} ${styles.sectionstyle}`}>
        <div className={styles["blob-content"]}>
          <div class={`${styles.wrapperforlist}`}>

            <ul className={`${styles.ulforlist}`}>
              <li className={`${styles.lugrasimoregular}`}>
                Click on the collges to view all colleges.
              </li>
              <li className={`${styles.lugrasimoregular}`}>
                Now, Click on the workshops to view all available workshops.
              </li>
              <li className={`${styles.lugrasimoregular}`}>
                Check the date and Select the workshops you need.
              </li>
              <li className={`${styles.lugrasimoregular}`}>
                Choose the slot and Book yourwork. Check your bookings in "Bookings" page.
              </li>
            </ul>
          </div>
        </div>
        <svg
          className={styles["blob-motion"]}
          id="visual"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(450.7256843113689 283.4942824330989)">
            <path
              id="blob1"
              d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
              fill="#ecbe81"
            ></path>
          </g>
          <g
            transform="translate(509.54377535978017 281.49390864595887)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob2"
              d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
              fill="#ecbe81"
            ></path>
          </g>
        </svg>
      </section>

      {/* <div className={`${styles.spacer} ${styles.layer2}`}></div>

      <section className={styles.blobs}>
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section> */}
      <div className={styles.faqContainer}>
      <Link to='/studfaq' className={styles.faqLink}>
      <p className={`${styles.faqText} display-6`}><b>Faq</b></p>
    </Link>
      <Link to='/studfaq'>
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

export default StudentCurvepostlogin;
