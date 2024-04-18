import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Collegepostlogin.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Loader from "./Loader";
import EmptyDataComponent from "./EmptyDataComponent";
import EmptyDataComponentTodayList from "./EmptyDataComponentTodayList";
import styles from "./Curvepostlogin.module.css"
import Blobbro from "./Blobbro";

function Collegepostlogin() {
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
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const [emptymessage,setEmptyMessage]=useState("");
  

//   function WorkshopCard({ workshop }) {

//     const generatePDF = () => {
//     const doc = new jsPDF();

//     // Add a title to the PDF
//     doc.setFontSize(20);
//     doc.text(`Workshop: ${workshop._id}`, 15, 15);

//     // Add workshop details
//     doc.setFontSize(12);
//     doc.text(`Date: ${new Date(workshop.date).toDateString()}`, 15, 25);

//     // Add student details
//     doc.autoTable({
//       startY: 35,
//       head: [["Name", "College"]],
//       body: workshop.students.map((student) => [student.name, student.collegeName]),
//     });

//     // Save the PDF
//     doc.save("workshop_details.pdf");
//   };
//  return (
//       <div className="row">
//         <div className="card-container bs hey bro">
//           <div className="mb-4 textalign">
//             <h2 style={{ fontFamily: 'DM Serif Display', color: 'brown', marginBottom: '0.5em' }}>{workshop._id}</h2>
//             <p style={{ color:'black', marginBottom: '0.5em' }}>Date: {new Date(workshop.date).toDateString()}</p>
//             <h3 style={{color:'black' ,marginBottom: '0.5em' }}>Students:</h3>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {workshop.students.slice(0, 1).map((student, index) => (
//                 <li key={index} style={{ color:'black',marginBottom: "0.5em" }}>
//                   {student.name} - {student.collegeName}
//                 </li>
//               ))}
//             </ul>
//             <button  className='buttonforcollegecard' style={{background:"#f2e1ae"}} onClick={generatePDF()} >
//               <h5 style={{color:'black'}}
//               >
//                 Get PDF
//               </h5>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
function WorkshopCard({ workshop }) {
  const generatePDF = () => {
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

  return (
    <div className="row">
      <div className="card-container bs hey bro">
        <div className="mb-4 textalign">
          <h2 style={{ fontFamily: 'DM Serif Display', color: 'brown', marginBottom: '0.5em' }}>{workshop._id}</h2>
          <p style={{ color:'black', marginBottom: '0.5em' }}>Date: {new Date(workshop.date).toDateString()}</p>
          <h3 style={{color:'black' ,marginBottom: '0.5em' }}>Students:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {workshop.students.slice(0, 1).map((student, index) => (
              <li key={index} style={{ color:'black',marginBottom: "0.5em" }}>
                {student.name} - {student.collegeName}
              </li>
            ))}
          </ul>
          <button  className='buttonforcollegecard' style={{background:"#f2e1ae"}} onClick={generatePDF} >
            <h5 style={{color:'black'}}
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
    <>
      <section className={`${styles.bubble2} ${styles.sectionstyle2}`}>
        <div className={styles["bubble2-content"]}>
          <p style={{ justifyContent: "center" ,color:'black',fontSize:'30px'}}> Today Bookings</p>
        </div>
      </section>
      <section
        className={`${styles.dark}${styles.sectionstyle}`}
        style={{ background: 'linear-gradient(180deg, #f2e1ae, rgba(15, 15, 16, 0))' ,marginBottom:'50px'}}
      >
        <div className={`container ${styles["bubble2-content"]}`}>
          <div className="row justify-content-center">
            {loading ? (
              <h1>
                <Loader />
              </h1>
            ) : datagot.length===0?(
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
      <div className={styles.faqContainer}>
      <Link to='/clgfaq' className={styles.faqLink}>  
      <p className={`${styles.faqText} display-6`}><b>Faq</b></p>
    </Link>
      <Link to='/clgfaq'>
    <div className={styles.arrowContainer}>
      <span className={styles.arrow}></span>
      <span className={styles.arrow}></span>
      <span className={styles.arrow}></span>
    </div>
    </Link>
    </div>
    <div className="container wrappingDiv c1 p-5 my-5" id="D">
        <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
          <b>Contact us</b>
        </div>
        <p><b>Ph no:</b> 9191919191</p>
        <p><b>Email:</b> adanpradanHelpDesk@gmail.com</p>
        <p><b>Site Maintenance Address:</b>3-45, Narayanaguda, Hyderabad, Telangana</p>
        <div>
        </div>
      </div>
    </>
  );
}

export default Collegepostlogin;