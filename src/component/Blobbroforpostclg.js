import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Blobbro.module.css";
import KUTE from "kute.js";
import "./Collegepostlogin.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Loader from "./Loader";
import stylescurve from "./Curvepostlogin.module.css"
const Blobbroforpostclg = () => {
    function foranimate() {
        const tween = KUTE.fromTo(
            "#blob1",
            { path: "#blob1" },
            { path: "#blob2" },
            { repeat: Infinity, duration: 3000, yoyo: true }
          ).start();
    }
    foranimate();

  const userId = localStorage.getItem("Id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [datagot, setdatagot] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://adan-pradan-backend.onrender.com/AdanPradan/collegebooked/todaylist/${userId}`
        );
        setdatagot(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const [emptymessage,setEmptyMessage]=useState("");
  const generatePDF = (workshop) => {
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(20);
    doc.text(`Workshop: ${workshop._id}`, 15, 15);

    // Add workshop details
    doc.setFontSize(12);
    doc.text(`Date: ${new Date(workshop.date).toDateString()}`, 15, 25);

    // Add student details
    doc.autoTable({
      startY: 35,
      head: [["Name", "College"]],
      body: workshop.students.map((student) => [student.name, student.collegeName]),
    });

    // Save the PDF
    doc.save("workshop_details.pdf");
  };


  function WorkshopCard({ workshop }) {
    return (
      <div className="row">
        <div className="card-container bs hey bro">
          <div className="mb-4 textalign">
            <h2 style={{ fontFamily: 'DM Serif Display', color: 'brown', marginBottom: '0.5em' }}>{workshop._id}</h2>
            <p style={{ color: 'iceblue', marginBottom: '0.5em' }}>Date: {new Date(workshop.date).toDateString()}</p>
            <h3 style={{ color: 'Students', marginBottom: '0.5em' }}>Students:</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {workshop.students.slice(0, 1).map((student, index) => (
                <li key={index} style={{ marginBottom: "0.5em" }}>
                  {student.name} - {student.collegeName}
                </li>
              ))}
            </ul>
            <button  className='buttonforcollegecard'>
              <h5
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "black";
                }}
              >
                Get PDF
              </h5>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="wrappingDiv">
    
      <section className={`${styles.yellow} ${styles.sectionstyleforbro}`}>
        <div className={styles["blob-content"]}>
        <section className={`${stylescurve.bubble} ${stylescurve.sectionstyle2}`}>
        <div className={stylescurve["bubble-content"]}>
          <p style={{ justifyContent: "center" }}> Today Bookings</p>
        </div>
      </section>
      <section
        className={`${stylescurve.dark}${stylescurve.sectionstyle}`}
        style={{ background: "#0f0f10" ,marginBottom:'40px'}}
      >
        <div className={`container ${stylescurve["bubble-content"]}`}>
          <div className="row justify-content-center">
            {loading ? (
              <h1>
                <Loader />
              </h1>
            ) : datagot.length==0?(
              // <EmptyDataComponentTodayList/>
              <>
              {/* <Blobbroforpostclg/> */}
              <div style={{ height: '45rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h1 style={{color:"white"}}>No bookings found for today</h1> 

              </div>
                
              </>)
              : error ? (
              <h1>Something went wrong</h1>
            ) : (
              // Data.map((clg) => {
              //   return (
              //     <div className="col-md-4 mt-2">
              //       <CollegeCard clg={clg} />
              //     </div>
              //   );
              // })
              <>
          {datagot && datagot.map((workshop) => (
            <div className="col-md-4 mt-2">
              <WorkshopCard key={workshop._id} workshop={workshop} />
            </div>
          ))}
          </>
            )}
          </div>
        </div>
      </section>
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
              fill="#efd27a"
            ></path>
          </g>
          <g
            transform="translate(509.54377535978017 281.49390864595887)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob2"
              d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
              fill="#efd27a"
            ></path>
          </g>
        </svg>
      </section>
    </div>
  );
};

export default Blobbroforpostclg;
