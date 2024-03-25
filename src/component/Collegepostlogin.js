// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Collegepostlogin.css";
// import { Link } from "react-router-dom";
// import "./Collegepostlogin.css";
// function Collegepostlogin() {
//   const userId = localStorage.getItem("Id");
//   const [errorgot, setError] = useState("");
//   const [datagot, setdatagot] = useState([]);
//   // useEffect(async () => {

//   //     try {
//   //       const response = await axios.get(
//   //         `http://localhost:5031/AdanPradan/collegebooked/todaylist/${userId}`
//   //       );
//   //       setdatagot(response.data);

//   //       console.log(response.data);
//   //       // console.log(datagot,"is datagot");
//   //     } catch (error) {
//   //       if (error.response && error.response.status === 404) {
//   //         setError(error.response.data.message);
//   //       } else if (error.response && error.response.status === 500) {
//   //         setError(error.response.data.message);
//   //       } else {
//   //         console.error("Login Error:", error);
//   //         setError(error.message);
//   //       }
//   //     }
//   // }, []); // Empty dependency array to mimic componentDidMount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5031/AdanPradan/collegebooked/todaylist/${userId}`
//         );
//         setdatagot(response.data);
//       } catch (error) {
//         // Handle errors here
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again later.");
//       }
//     };

//     fetchData();
//   }, [userId]);

//   return (
//     <>
//       <div className="container pt-5 my-5">
//         <div className="row display-1">Today's List</div>
//       </div>
//       {/* <div className="card-container">
//         {errorgot && (
//           <div>
//             <h1>got error</h1>
//           </div>
//         )} */}
        
//         {/* {datagot &&
//           datagot.map((workshopDay) => (
//             <div className="card" key={workshopDay.heading}>
//               <h2>{workshopDay.heading}</h2> */}
//               {/* <ul>
//                 {workshopDay.workshops.map((workshop) => {
//                   const uniqueStudents = [
//                     ...new Set(
//                       workshop.students.map(
//                         (student) => `${student.name}-${student.collegeName}`
//                       )
//                     ),
//                   ];
//                   return (
//                     <li key={workshop.heading}>
//                       {uniqueStudents.map((student) => (
//                         <span key={student}>{student}</span>
//                       ))}
//                     </li>
//                   );
//                 })}
//               </ul> */}
//               <ul>
                
                  
//               {/* {workshopDay.workshops.map((workshop) => (
//           <li key={workshop.workshopName}>
//             {/* Workshop details */}
//             {/* <h3>Workshop Name: {workshop.workshopName}</h3>
//             <p>Date: {workshop.date}</p>
//             Students within the workshop */}
//             {/* <h4>Students:</h4>
//             <ul>
//               {workshop.students.map((student) => (
//                 <li key={student.name}>
//                   {student.name} ({student.collegeName})
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//               </ul>
              
//             </div>/ */}
//           {/* // ))} */} 
//       {/* </div> */}

//       <div className="container wrappingDiv c1 p-5 my-5" id="D">
//         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
//           <b>Contact us</b>
//         </div>
//         <h2>Lorem ipsum dolor sit amet</h2>
//         <h2>Lorem ipsum dolor sit amet</h2>
//         <h2>Lorem ipsum dolor sit amet</h2>
//         <div>
//           <a href="#" className="viewmore">
//             <h3>view more</h3>
//           </a>
//         </div>
//       </div>
//       <div className="container-md box5">
//         <div className="row">
//           <h1>PYTHON LAB</h1>

//           <h2>ID's of Students</h2>
//           <ul style={{ marginLeft: "30px" }}>
//             <li style={{ padding: "10px" }}>
//               <h4>21BD1A05B3</h4>
//             </li>
//             <li style={{ padding: "10px" }}>
//               <h4>21BD1A05DY</h4>
//             </li>
//             <li style={{ padding: "10px" }}>
//               <h4>21BD1A05DZ</h4>
//             </li>
//           </ul>
//           <a href="#" className="viewmore">
//             <h3>view more</h3>
//           </a>
//         </div>
//       </div>
//       <div className="container-md box6">
//         <div className="row">
//           <h1>BEEE LAB</h1>

//           <h2 style={{ marginLeft: "30px" }}>ID's of Students</h2>
//           <ul style={{ marginLeft: "30px" }}>
//             <li style={{ padding: " 10px" }}>
//               <h4>21BD1A05B3</h4>
//             </li>
//             <li style={{ padding: " 10px" }}>
//               <h4>21BD1A05DY</h4>
//             </li>
//             <li style={{ padding: " 10px" }}>
//               <h4>21BD1A05DZ</h4>
//             </li>
//           </ul>
//           <div>
//             <a href="#" className="viewmore">
//               <h3>view more</h3>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
// )}
//  export default Collegepostlogin;
// {/*</>// import React from 'react'

// // function Collegepostlogin() { */}
// {/* //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default Collegepostlogin */}












/////em rooo 

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import "./Collegepostlogin.css";
// import { Link } from "react-router-dom";
// import "./Collegepostlogin.css";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// function Collegepostlogin() {
//   const userId = localStorage.getItem("Id");
//   const [errorgot, setError] = useState("");
//   const [datagot, setdatagot] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://adan-pradan-backend.onrender.com/AdanPradan/collegebooked/todaylist/${userId}`
//         );
//         setdatagot(response.data);
//         // console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again later.");
//       }
//     };

//     fetchData();
//     if (datagot.length!=0)
//     {
//     console.log(datagot+" em ro puka");
//     }
//   }, []);
//   const generatePDF = (workshop) => {
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
//   function WorkshopCard({ workshop }) {
//     return (
//       <div className="row">
//       {/* <div
//         className="clgcard card"
//     >*/}
//       <div className="card-container bs hey bro">
//       <div className="mb-4 textalign">
//         <h2 style={{ fontFamily: 'DM Serif Display',color: 'green', marginBottom: '0.5em' }}>{workshop._id}</h2> 
//       <p style={{ color: 'gray', marginBottom: '0.5em' }}>Date: {new Date(workshop.date).toDateString()}</p>
//       <h3 style={{ color: 'black', marginBottom: '0.5em' }}>Students:</h3>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//       {workshop.students.slice(0, 1).map((student, index) => (
//   <li key={index} style={{ marginBottom: "0.5em" }}>
//     {student.name} - {student.collegeName}
//   </li>
// ))}


//         </ul>
//         <button type="btn" onClick={() => generatePDF(workshop)}>
//   <h5
//     onMouseOver={(e) => {
//       e.currentTarget.style.color = "white";
//     }}
//     onMouseOut={(e) => {
//       e.currentTarget.style.color = "black";
//     }}
//   >
//     download pdf
//   </h5>
// </button>

//         </div>
//       </div>
//       </div>
//     );
//   }
  
//   return (
//     <>
//       <div className="container pt-5 my-5">
//         <div className="row display-1">Today's List</div>
//       </div>
//       <div className="container">
//           <div className="row justify-content-center mt-5">
//         {/* <div className="row"> */}
//       {datagot && datagot.map((workshop) => (
//         <div className="col-md-4 mt-2">
//         <WorkshopCard key={workshop._id} workshop={workshop} />
//         </div>
//       ))}
//       {/* </div> */}
//       </div>
// </div>
//       <div className="container wrappingDiv c1 p-5 my-5" id="D">
//         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
//           <b>Contact us</b>
//         </div>
//         <h2>Lorem ipsum dolor sit amet</h2>
//         <h2>Lorem ipsum dolor sit amet</h2>
//         <h2>Lorem ipsum dolor sit amet</h2>
//         <div>
//           <a href="#" className="viewmore">
//             <h3>view more</h3>
//           </a>
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default Collegepostlogin;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Collegepostlogin.css";
import { Link } from "react-router-dom";
import "./Collegepostlogin.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Loader from "./Loader";
import EmptyDataComponent from "./EmptyDataComponent";
import EmptyDataComponentTodayList from "./EmptyDataComponentTodayList";

// function Error() {

//   return <div><EmptyDataComponent/></div>;
// }

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
            <h2 style={{ fontFamily: 'DM Serif Display', color: 'green', marginBottom: '0.5em' }}>{workshop._id}</h2>
            <p style={{ color: 'gray', marginBottom: '0.5em' }}>Date: {new Date(workshop.date).toDateString()}</p>
            <h3 style={{ color: 'black', marginBottom: '0.5em' }}>Students:</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {workshop.students.slice(0, 1).map((student, index) => (
                <li key={index} style={{ marginBottom: "0.5em" }}>
                  {student.name} - {student.collegeName}
                </li>
              ))}
            </ul>
            <button type="btn" onClick={() => generatePDF(workshop)}>
              <h5
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "black";
                }}
              >
                download pdf
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

  // if (error) {
  //   return <Error />;
  // }

  return (
    <>
      <div className="container pt-5 my-5">
        <div className="row display-1">Today's List</div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
        {loading ? (
            <div><Loader/></div>
          ) : datagot.length==0?(
            <EmptyDataComponentTodayList/>
          ):(
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
      <div className="container wrappingDiv c1 p-5 my-5" id="D">
        <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
          <b>Contact us</b>
        </div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h2>Lorem ipsum dolor sit amet</h2>
        <div>
          <a href="#" className="viewmore">
            <h3>view more</h3>
          </a>
        </div>
      </div>
    </>
  );
}

export default Collegepostlogin;
{/* <div className="row">
      <div className="card-container bs hey bro">
        <div className="mb-4 textalign">
          <h2 style={{ fontFamily: 'DM Serif Display',color: 'green', marginBottom: '0.5em' }}>{workshop._id}</h2> 
          <p style={{ color: 'gray', marginBottom: '0.5em' }}>Date: {new Date(workshop.date).toDateString()}</p>
          <h3 style={{ color: 'black', marginBottom: '0.5em' }}>Students:</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {workshop.students.slice(0, 1).map((student, index) => (
                  <li key={index} style={{ marginBottom: "0.5em" }}>
                    {student.name} - {student.collegeName}
                  </li>
                ))}
              </ul>
              <button type="btn" onClick={() => generatePDF(workshop)}>
                <h5
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "black";
                  }}
                >
                  download pdf
                </h5>
              </button>
            </>
          )}
        </div>
      </div>
    </div> */}