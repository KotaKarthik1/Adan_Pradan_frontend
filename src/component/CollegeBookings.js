// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./CollegeBookings.css";
// import Loader from "./Loader";
// import EmptyDataComponent from "./EmptyDataComponent";
// const CollegeBookings = () => {
//   const userId = localStorage.getItem("Id");
//   const [errorgot, setError] = useState("");
//   const [datagot, setdatagot] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState(false);
//   const [empty,setEmpty]=useState(false);
//   const [showempty,setshowempty]=useState(false);
//   // const [date,setDate]=useState("");
//   const date2=new  Date();
//   // const [filteredBookings, setFilteredBookings] = useState([]);
//   const id2 = localStorage.getItem("Id");
//   // useEffect(() => {
//     const fetchData = async (date2) => {
//       try {
//         setloading(true);
//         const response = await axios.get(
//           `http://localhost:5031/AdanPradan/bookingsfilterbydate`,{
//             checkdate:date2,
//             id:id2
//           }
//         );
//         // setloading(false);
//         setdatagot(response.data);
//         console.log(response.data,"is the response ");
//           setloading(false);
//           if(datagot.length==0)
//           {
//             setEmpty(true);
//           }
//       } catch (error) {
//         setError(true);
//         if (error.response && error.response.status === 404) {
//           setError(error.response.data.message);
//         } else if (error.response && error.response.status === 500) {
//           setError(error.response.data.message);
//         } else {
//           console.error("Login Error:", error);
//           setloading(false);
//           setEmpty(false);
//           setError(error.message);
//         }
//       }
//       // finally
//       // {
//       //   seterror(false);
//       //   setloading(false);
//       // }
//     };

//   //   fetchData(); // Call the fetchData function
//   // }, []);// Empty dependency array to mimic componentDidMount

//   var todaydate = new Date();
//   todaydate=todaydate.toISOString().split("T")[0];
//   const currentDate = new Date();
//   currentDate.setDate(currentDate.getDate());
//   const dates = Array.from({ length: 7 }, (_, index) => {
//     const nextDate = new Date(currentDate);
//     nextDate.setDate(currentDate.getDate() + index);
//     return nextDate.toISOString().split("T")[0];
//   });
//   // function isless(str1, str2) {
//   //   const dateString1 = str1;
//   //   const numericDate1 = parseInt(dateString1.replace(/-/g, ""), 10);
//   //   // console.log(numericDate1);
//   //   const dateString2 = str2;
//   //   const numericDate2 = parseInt(dateString2.replace(/-/g, ""), 10);
//   //   // console.log(numericDate2);
//   //   if (numericDate1 < numericDate2) {
//   //     // console.log("sending true");
//   //     return true;
//   //   } else {
//   //     console.log("sending false");
//   //     return false;
//   //   }
//   // }
//   // var FilteredBookings = [];
//   // const filterTheData = async () => {
//   //   const currentDate = new Date();
//   //   // console.log("Current Date:", currentDate.toISOString());

//   //   var workshopsOnCurrentDate = [];
//   //   for (let day = 0; day < 7; day++) {
//   //     const nextDate = new Date(currentDate);
//   //     nextDate.setDate(currentDate.getDate() + day);
//   //     const formattedDate = nextDate.toISOString().substring(0, 10);

//   //     // console.log(`Checking for date: ${formattedDate}`);
//   //     workshopsOnCurrentDate = [];
//   //     var itemid = "";
//   //     for (const item of datagot) {
//   //       itemid = item._id;
//   //       //   console.log( `start ${itemid}`);
//   //       workshopsOnCurrentDate = [];
//   //       for (const workshop of item.workshops) {
//   //         if (workshop.Date.substring(0, 10) === formattedDate) {
//   //           const studentDetails = item.studentdetails.find(
//   //             (student) => student._id === workshop.user
//   //           );
//   //           workshopsOnCurrentDate.push([
//   //             {
//   //               studuser: workshop.user,
//   //               collegeName: studentDetails ? studentDetails.collegeName : "",
//   //               Date: workshop.Date,
//   //               slotTime: workshop.slotTime,
//   //               stdname: studentDetails ? studentDetails.name : "",
//   //             },
//   //           ]);
//   //           // console.log(`for item ${itemid}`,workshopsOnCurrentDate);
//   //         }
//   //       }
//   //       // console.log(`out side for loop ${itemid} done`);
//   //       if (workshopsOnCurrentDate.length === 0 && formattedDate>=todaydate) {
//   //         continue;
//   //       }
//   //       FilteredBookings.push([
//   //         formattedDate,
//   //         item._id,
//   //         workshopsOnCurrentDate,
//   //       ]);
//   //     }
//   //   }
//   //   // console.log("the date is ");
//   //   // console.log("Workshops on the current date: ", FilteredBookings);
//   //   // console.log("Workshops on the current date: ", FilteredBookings[0]);
//   //   // console.log("Workshops on the current date: ", FilteredBookings[2][2]);
//   // };
//   // filterTheData();

//   return (
//     <div className="wrappingDiv">
//       {console.log(datagot)}
//       <div className="container my-5 p-5 ">
//         <ul
//           className="nav nav-tabs justify-content-center"
//           id="myTab"
//           role="tablist"
//         >
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               id="pastBookings-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#pastBookings"
//               type="button"
//               role="tab"
//               aria-controls="pastBookings"
//               aria-selected={false}
//             >
//               <div className=" itemcolor">
//                 <h1>Past Bookings</h1>
//               </div>
//             </button>
//           </li>
//           {dates.map((date, index) => (
//             <li key={index} className="nav-item" role="presentation">
//               <button
//                 className={`nav-link ${index === 0 ? "active" : ""}`}
//                 id={`college${index + 1}-tab`}
//                 data-bs-toggle="tab"
//                 data-bs-target={`#college${index + 1}`}
//                 type="button"
//                 role="tab"
//                 aria-controls={`college${index + 1}`}
//                 aria-selected={index === 0}
//               >
//                 <div className=" itemcolor">{date}</div>
//               </button>
//             </li>
//           ))}
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               id="upcomingBookings-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#upcomingBookings"
//               type="button"
//               role="tab"
//               aria-controls="upcomingBookings"
//               aria-selected={false}
//             >
//               <div className="itemcolor">
//                 <h1>Upcoming Bookings</h1>
//               </div>
//             </button>
//           </li>
//         </ul>

// <div className="tab-content" id="myTabContent">
//   <div
//     className="tab-pane fade"
//     id="pastBookings"
//     role="tabpanel"
//     aria-labelledby="pastBookings-tab"
//   >
//     {/* past Bookings */}
//       <h1>past bookings</h1>
//       {/* <h1>{date}</h1> */}
//       {/* {console.log(FilteredBookings, "past in the tab")} */}
//       <div>

//         {/* {FilteredBookings.length>0? ( FilteredBookings.filter((entryToRecord) =>
//           isless(entryToRecord[0], todaydate)
//         ).map((entryToDetail, entryIndex) => (
//           <div key={entryIndex} className="card">
//             {console.log("past data found")};
//             <div className="cardbody">
//               <h2 className="card-title">{entryToDetail[1]}</h2>
//               <div className="table-container">
//                 {entryToDetail[2][0].length > 0 ? (

//                   <table className="table">
//                     <thead className="thead-dark">
//                       <tr
//                         style={{
//                           backgroundColor: "rgb(244, 223, 104)",
//                         }}
//                       >
//                         <th>
//                           <center>Student Name</center>
//                         </th>
//                         <th>
//                           <center>College Name</center>
//                         </th>
//                         <th>
//                           <center>Slot Time</center>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {entryToDetail[2][0]
//                         .slice(0, 5)
//                         .map((student, studentIndex) => (
//                           <tr>
//                             <td>
//                               <center>{student.stdname}</center>
//                             </td>
//                             <td>
//                               <center>{student.collegeName}</center>
//                             </td>
//                             <td>
//                               <center>{student.slotTime}</center>
//                             </td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 ) : (
//                   <EmptyDataComponent/>
//                 )}
//               </div> */}
//             {/* </div>
//           </div>
//         ))):(
//           <EmptyDataComponent/>
//         )} */}

//       </div>
//   </div>
//           {dates.map((date, index) => (
//             <div
//               key={index}
//               className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
//               id={`college${index + 1}`}
//               role="tabpanel"
//               aria-labelledby={`college${index + 1}-tab`}
//             >
//               <h1>{date}</h1>
//               {/* {console.log(FilteredBookings, " in the tab")} */}
//               {/* {loading ? (
//               <h1>
//                 <Loader />
//               </h1>
//             ) : error ? (
//               <h1>error</h1>
//             ) : ( */}
//               <div>
//               {/*//   {FilteredBookings.length>0 ? ( FilteredBookings.filter(
//               //     (entryToRecord) => entryToRecord[0] === date
//               //   ).map((entryToDetail, entryIndex) => (
//               //     <div key={entryIndex} className="card">
//               //       <div className="cardbody">
//               //         <h2 className="card-title">{entryToDetail[1]}</h2>
//               //         <div className="table-container">
//               //           {entryToDetail[2][0].length > 0 ?(
//               //             <table className="table" >
//               //               <thead className="thead-dark">
//               //                 <tr
//               //                   style={{
//               //                     backgroundColor: "rgb(244, 223, 104)",
//               //                   }}
//               //                 >
//               //                   <th>
//               //                     <center>Student Name</center>
//               //                   </th>
//               //                   <th>
//               //                     <center>College Name</center>
//               //                   </th>
//               //                   <th>
//               //                     <center>Slot Time</center>
//               //                   </th>
//               //                 </tr>
//               //               </thead>
//               //               <tbody>
//               //                 {entryToDetail[2][0]
//               //                   .slice(0, 5)
//               //                   .map((student, studentIndex) => (
//               //                     <tr>
//               //                       <td>
//               //                         <center>{student.stdname}</center>
//               //                       </td>
//               //                       <td>
//               //                         <center>{student.collegeName}</center>
//               //                       </td>
//               //                       <td>
//               //                         <center>{student.slotTime}</center>
//               //                       </td>
//               //                     </tr>
//               //                   ))}
//               //               </tbody>
//               //             </table>
//               //           ) : (
//               //             <EmptyDataComponent/>
//               //           )}
//               //         </div>
//               //       </div>
//               //     </div>
//               //   ))):(
//               //     <EmptyDataComponent/>
//             //   )}*/}
//               </div>
//             {/* )} */}
//             </div>
//           ))}
// <div
//   className="tab-pane fade"
//   id="upcomingBookings"
//   role="tabpanel"
//   aria-labelledby="upcomingBookings-tab"
// >
//   {/* upcoming booking */}
//   <h1>upcoming bookings</h1>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeBookings;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./CollegeBookings.css";
// import Loader from "./Loader";
// import EmptyDataComponent from "./EmptyDataComponent";

// const CollegeBookings = () => {
//   const userId = localStorage.getItem("Id");
//   const [errorgot, setError] = useState("");
//   const [datagot, setdatagot] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState(false);
//   const [empty, setEmpty] = useState(false);
//   const [showempty, setshowempty] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [buttonHovered, setButtonHovered] = useState(false);

//   const fetchBookingDetails = async (date) => {
//     try {
//       setloading(true);
//       console.log(date);
//       console.log(userId);
//       const response = await axios.get(
//         `http://localhost:5031/AdanPradan/bookingsfilterbydate?id=${userId}&checkdate=${date}`
//       );

//       setdatagot(response.data);
//       console.log(datagot);
//       setloading(false);
//       setEmpty(datagot.length === 0);
//     } catch (error) {
//       setError(true);
//       setloading(false);
//       setEmpty(false);
//       if (error.response && error.response.status === 404) {
//         setError(error.response.data.message);
//       } else if (error.response && error.response.status === 500) {
//         setError(error.response.data.message);
//       } else {
//         console.error("Error:", error);
//         setError(error.message);
//       }
//     }
//   };

//   // const [selectedDate, setSelectedDate] = useState("");

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     fetchBookingDetails(date);
//   };

//   var todaydate = new Date();
//   todaydate = todaydate.toISOString().split("T")[0];
//   const currentDate = new Date();
//   currentDate.setDate(currentDate.getDate());
//   const dates = Array.from({ length: 7 }, (_, index) => {
//     const nextDate = new Date(currentDate);
//     nextDate.setDate(currentDate.getDate() + index);
//     return nextDate.toISOString().split("T")[0];
//   });
//   const fetchPastBookings = async () => {
//     try {
//       setloading(true);
//       const response = await axios.get(
//         `http://localhost:5031/AdanPradan/bookingsfilterbydatepast?id=${userId}&checkdate=${dates[0]}`
//       );

//       setdatagot(response.data);
//       setloading(false);
//       setEmpty(datagot.length === 0);
//     } catch (error) {
//       setError(true);
//       setloading(false);
//       setEmpty(false);
//       if (error.response && error.response.status === 404) {
//         setError(error.response.data.message);
//       } else if (error.response && error.response.status === 500) {
//         setError(error.response.data.message);
//       } else {
//         console.error("Error:", error);
//         setError(error.message);
//       }
//     }
//   };
//   useEffect(() => {
//     if (dates.length > 0) {
//       setSelectedDate(dates[0]);
//       fetchBookingDetails(dates[0]);
//     }
//   }, []);
//   return (
//     <div className="wrappingDiv">
//       <div className="container my-5 p-5 ">
//       <p className="display-4">Click on Date</p>
//         <ul
//           className="nav nav-tabs justify-content-center"
//           id="myTab"
//           role="tablist"
//         >
//           <li className="nav-item" role="presentation">
//              <button
//                className="nav-link"
//                id="pastBookings-tab"
//                data-bs-toggle="tab"
//                data-bs-target="#pastBookings"
//                type="button"
//                role="tab"
//                aria-controls="pastBookings"
//                aria-selected={false}
//              >
//                <div className=" itemcolor">
//                  <h1>Past Bookings</h1>
//                </div>
//              </button>
//            </li>
//           {dates &&
//             dates.map((date, index) => (
//               <li key={index} className="nav-item" role="presentation">
//                 <button
//                   className={`nav-link ${
//                     selectedDate === date ? "active" : ""
//                   }`}
//                   onClick={() => handleDateClick(date)}
//                   id={`college${index + 1}-tab`}
//                   data-bs-toggle="tab"
//                   data-bs-target={`#college${index + 1}`}
//                   type="button"
//                   role="tab"
//                   aria-controls={`college${index + 1}`}
//                   aria-selected={selectedDate === date}
//                 >
//                   <div className=" itemcolor">{date}</div>
//                 </button>
//               </li>
//             ))}
//             <li className="nav-item" role="presentation">
//              <button
//                className="nav-link"
//                id="upcomingBookings-tab"
//                data-bs-toggle="tab"
//                data-bs-target="#upcomingBookings"
//                type="button"
//                role="tab"
//                aria-controls="upcomingBookings"
//                aria-selected={false}
//              >
//                <div className="itemcolor">
//                  <h1>Upcoming Bookings</h1>
//                </div>
//              </button>
//            </li>
//         </ul>
//           <div className="tab-content" id="myTabContent">
//           <div
//             className="tab-pane fade"
//             id="pastBookings"
//             role="tabpanel"
//             aria-labelledby="pastBookings-tab"
//           >
//               <h1>past bookings</h1>
//               <div>
//                   </div>
//               </div>
//           </div>
// <div className="tab-content" id="myTabContent">
//   {loading ? (
//     <Loader />
//   ) : error ? (
//     <div>{error}</div>
//   ) : empty ? (
//     <EmptyDataComponent />
//   ) : (
//     <div>
//       {Object.entries(datagot).map(([workshopTitle, bookings]) => (
//         <div
//           key={workshopTitle}
//           className="tab-pane fade"
//           id={`workshop-${workshopTitle}`}
//           role="tabpanel"
//           aria-labelledby={`workshop-${workshopTitle}-tab`}
//         >
//           <div className="card">
//             <div className="row">
//               <div className="col-8">
//             <h1>{workshopTitle}</h1>
//             </div>
//             <div className="col-4 text-end">
//               <button
//                 className="download-button"
//               >
//                 Download
//               </button>
//               </div>
//             </div>
//             <div className="table-container">
//               <table className="table">
//                 <thead className="thead-dark">
//                   <tr>
//                     <th>Student Name</th>
//                     <th>College Name</th>
//                     <th>Date</th>
//                     <th>Slot Time</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {bookings.slice(0, 5).map((booking, index) => (
//                     <tr key={index}>
//                       <td>{booking.user}</td>
//                       <td>{booking.studentclgName}</td>
//                       <td>{new Date(booking.Date).toLocaleDateString('en-IN',
//                        {
//                         day: '2-digit',
//                         month: 'short',
//                         year: 'numeric'
//                       })}</td>
//                       <td>{booking.slotTime}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div>
//         <div
//             className="tab-pane fade"
//             id="upcomingBookings"
//             role="tabpanel"
//             aria-labelledby="upcomingBookings-tab"
//           >
//             {/* upcoming booking */}
//             <h1>upcoming bookings</h1>
//           </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CollegeBookings.css";
import Loader from "./Loader";
import EmptyDataComponent from "./EmptyDataComponent";
const CollegeBookings = () => {
  const userId = localStorage.getItem("Id");
  const [errorgot, setError] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [datespast, setDatespast] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [datesupcoming, setDatesupcoming] = useState([]);
  const [normalBookings, setNormalBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("pastbookings");
  const fetchBookingDetails = async (date) => {
    try {
      setloading(true);
      const response = await axios.get(
        `http://localhost:5031/AdanPradan/bookingsfilterbydate?id=${userId}&checkdate=${date}`
      );
      setNormalBookings(response.data);
      setloading(false);
      setEmpty(response.data.length === 0);
    } catch (error) {
      setError(true);
      setloading(false);
      setEmpty(false);
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status === 500) {
        setError(error.response.data.message);
      } else {
        console.error("Error:", error);
        setError(error.message);
      }
    }
  };

  const fetchBookingDetailspast = async (date) => {
    try {
      setloading(true);
      const formattedDate = new Date(date).toISOString().split("T")[0];
      const response = await axios.get(
        `http://localhost:5031/AdanPradan/bookingsfilterbydatepast?id=${userId}&checkdate=${formattedDate}`
      );
      setPastBookings(response.data);
      setDatespast(Object.keys(response.data));
      setloading(false);
      setEmpty(response.data.length === 0);
    } catch (error) {
      setError(true);
      setloading(false);
      setEmpty(false);
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status === 500) {
        setError(error.response.data.message);
      } else {
        console.error("Error:", error);
        setError(error.message);
      }
    }
  };
  const fetchBookingDetailsupcoming = async (date) => {
    try {
      setloading(true);
      const formattedDate = new Date(date).toISOString().split("T")[0];
      const response = await axios.get(
        `http://localhost:5031/AdanPradan/bookingsfilterbydatepast?id=${userId}&checkdate=${formattedDate}`
      );
      setUpcomingBookings(response.data);
      setDatesupcoming(Object.keys(response.data));
      setloading(false);
      setEmpty(response.data.length === 0);
    } catch (error) {
      setError(true);
      setloading(false);
      setEmpty(false);
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status === 500) {
        setError(error.response.data.message);
      } else {
        console.error("Error:", error);
        setError(error.message);
      }
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    fetchBookingDetails(date);
  };

  const handleDateClick2 = (date) => {
    setSelectedDate(date);
    fetchBookingDetailspast(date);
  };
  const handleDataClick3=(date)=>{
    setSelectedDate(date);
    fetchBookingDetailsupcoming(date);
  }
  var todaydate = new Date();
  todaydate = todaydate.toISOString().split("T")[0];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const dates = Array.from({ length: 7 }, (_, index) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + index);
    return nextDate.toISOString().split("T")[0];
  });
  var pastdate = new Date(dates[0]);
  pastdate.setDate(pastdate.getDate() - 1);
  console.log(pastdate, " is past date");
  const samplepastdate=pastdate;
  var upcomingdate = new Date(dates[dates.length - 1]);
  upcomingdate.setDate(upcomingdate.getDate() + 1);
  console.log(upcomingdate, " is upcoming date");
  // useEffect(() => {
  //   if (dates.length > 0) {
  //     setSelectedDate(dates[0]);
  //     fetchBookingDetails(dates[0]);
  //   }
  // }, []);

  return (
    <div className="wrappingDiv">
      <div className="container my-5 p-5 ">
        <p className="display-4">Click on Date</p>
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "pastbookings" ? "active" : ""
              }`}
              onClick={() => {
                handleDateClick2(pastdate);
                setActiveTab("pastBookings");
              }}
              //  onClick={() => setActiveTab('college')}
              id="pastBookings-tab"
              data-bs-toggle="tab"
              data-bs-target="#pastBookings"
              type="button"
              role="tab"
              aria-controls="pastBookings"
              aria-selected={selectedDate === samplepastdate}
            >
              <div className=" itemcolor">
                <h1>Past Bookings</h1>
              </div>
            </button>
          </li>
          {dates &&
            dates.map((date, index) => (
              <li key={index} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === date ? "active" : ""}`}
                  onClick={() => {
                    handleDateClick(date);
                    setActiveTab(date);
                  }}
                  id={`college${index + 1}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#college${index + 1}`}
                  type="button"
                  role="tab"
                  aria-controls={`college${index + 1}`}
                  aria-selected={selectedDate === date}
                >
                  <div className=" itemcolor">{date}</div>
                </button>
              </li>
            ))}
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "upcomingBookings" ? "active" : ""
              }`}
              onClick={() => {
                handleDateClick2(upcomingdate);
                setActiveTab("upcomingBookings");
              }}
              id="upcomingBookings-tab"
              data-bs-toggle="tab"
              data-bs-target="#upcomingBookings"
              type="button"
              role="tab"
              aria-controls="upcomingBookings"
              aria-selected={false}
            >
              <div className="itemcolor">
                <h1>Upcoming Bookings</h1>
              </div>
            </button>
          </li>
        </ul>
        <div className="tab-content " id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "pastBookings" ? "show active" : ""
            }`}
            id="pastBookingsContent"
            role="tabpanel"
            aria-labelledby="pastBookings-tab"
          >
            {loading ? (
              <Loader />
            ) : error ? (
              <div>{error}</div>
            ) : empty ? (
              <EmptyDataComponent />
            ) : (
              // <>
              // <div className="container">
              //     <div className="row">
              //       <div className="col-12">
              //   {datespast.map((date, index) => (
              
              //     <div key={index} className="col-md-4 mb-4">
              //       <div className="card">
              //         <div className="card-header">{date}</div>
                      
              //         <div className="card-body table-container">
              //           <table className="table">
              //             <thead className="thead-dark">
              //               <tr>
              //                 <th>User</th>
              //                 <th>College Name</th>
              //                 <th>Date</th>
              //                 <th>Slot Time</th>
              //               </tr>
              //             </thead>
              //             <tbody>
              //               {pastBookings[date].map((booking, bookingIndex) => (
              //                 <tr key={bookingIndex}>
              //                   <td>{booking.user}</td>
              //                   <td>{booking.studentclgName}</td>
              //                   <td>{booking.Date}</td>
              //                   <td>{booking.slotTime}</td>
              //                 </tr>
              //               ))}
              //             </tbody>
              //           </table>
              //         </div>
              //       </div>
              //     </div>
              //   )
              //   )}
              //   </div>
              //     </div>
              //     </div>
              // </>
              <>
  <div className="container">
    <div className="row">
      {datespast.map((date, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">{date}</div>
            <div className="card-body table-container">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>User</th>
                    <th>College Name</th>
                    <th>Date</th>
                    <th>Slot Time</th>
                  </tr>
                </thead>
                <tbody>
                  {pastBookings[date].map((booking, bookingIndex) => (
                    <tr key={bookingIndex}>
                      <td>{booking.user}</td>
                      <td>{booking.studentclgName}</td>
                      <td>{booking.Date}</td>
                      <td>{booking.slotTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

            )
            }
          </div>
        </div>
        <div className="tab-content " id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "upcomingBookings" ? "show active" : ""
            }`}
            id="upcomingBookingsContent"
            role="tabpanel"
            aria-labelledby="upcomingBookings-tab"
          >
            <h1>Upcoming Bookings</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <div>{error}</div>
            ) : empty ? (
              <EmptyDataComponent />
            ) : (
              <>
                {datesupcoming.map((date, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header">{date}</div>
                      <div className="card-body">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>User</th>
                              <th>College Name</th>
                              <th>Date</th>
                              <th>Slot Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {upcomingBookings[date].map((booking, bookingIndex) => (
                              <tr key={bookingIndex}>
                                <td>{booking.user}</td>
                                <td>{booking.studentclgName}</td>
                                <td>{booking.Date}</td>
                                <td>{booking.slotTime}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* Display upcoming bookings here */}
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          {loading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : empty ? (
            <EmptyDataComponent />
          ) : (
            <div>
              {Object.entries(normalBookings).map(
                ([workshopTitle, bookings]) => (
                  <div
                    key={workshopTitle}
                    className={`tab-pane fade ${
                      activeTab === selectedDate
                        ? "show active"
                        : ""
                    }`}
                    id={`workshop-${workshopTitle}`}
                    role="tabpanel"
                    aria-labelledby={`workshop-${workshopTitle}-tab`}
                  >
                    <div className="card">
                      <div className="table-container">
                      <h1>{workshopTitle}</h1>
                        <table className="table">
                          <thead className="thead-dark">
                            <tr>
                              <th>Student Name</th>
                              <th>College Name</th>
                              <th>Date</th>
                              <th>Slot Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bookings.slice(0, 5).map((booking, index) => (
                              <tr key={index}>
                                <td>{booking.user}</td>
                                <td>{booking.studentclgName}</td>
                                <td>
                                  {new Date(booking.Date).toLocaleDateString(
                                    "en-IN",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    }
                                  )}
                                </td>
                                <td>{booking.slotTime}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CollegeBookings;
