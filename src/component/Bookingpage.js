// import React, { useState } from "react";
// import "./BookingPage.css";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import SuccessPopup from "./SuccessPopup";
// function BookingPage() {
//   const [colleges, setColleges] = useState([]);
//   const { id } = useParams();
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedWorkshop, setSelectedWorkshop] = useState("");

//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   // Get the current date
//   const currentDate = new Date();
//   // const mongoose = require('mongoose');
  // const [errmsg, seterrmsg] = useState("");
//   const [workshopid, setworkshopid] = useState("");
//   // Calculate the end date (current date + 5 days)
//   const endDate = new Date();
//   endDate.setDate(currentDate.getDate() + 5);
//   const [showWorkshopDropdown, setShowWorkshopDropdown] = useState(false);

// // Function to toggle the workshop dropdown
// const toggleWorkshopDropdown = () => {
//   setShowWorkshopDropdown(!showWorkshopDropdown);
// };

//   // Format the end date as a string for the max attribute
//   const maxDate = endDate.toISOString().split("T")[0];
//   const firstCollegeName = colleges.length > 0 ? colleges[0].collegeName : "";
//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };
//   const handleWorkshopChange = (event) => {
//     const selectedIndex = event.target.selectedIndex;
//     const selectedWorkshop = colleges[selectedIndex];
//     console.log(selectedWorkshop," is selected workshop");
//     console.log(selectedIndex);
//     handleid(event);
//     // if (selectedWorkshop) {
//     //   setworkshopid(selectedWorkshop.workshop_id);
//     //   console.log(workshopid);
//     //   setSelectedWorkshop(selectedWorkshop.workshopTitle);
//     // }
//   };
//   const workshops = colleges.map((college) => ({
//     workshopTitle: college.workshopTitle,
//   }));

  // const handleSuccessPopupClose = () => {
  //   setShowSuccessPopup(false);
  // };
//   const handleid = (e) => {
//     console.log(e.target.selectedIndex);
//     // console.log(colleges[e.target.selectedIndex]);
//     setworkshopid(colleges[e.target.selectedIndex].workshop_id);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const college = event.target.elements.COLLEGE.value;
//     const workshoptitle = event.target.elements.Title.value;
//     const date = event.target.elements.DATE.value;
//     const SlotTime = event.target.elements.SLOTTIMINGS.value;
//     const user = localStorage.getItem("Id");
//     axios
//       .post("http://localhost:5031/AdanPradan/bookWorkshop", {
//         user,
//         workshopid:workshopid,
//         collegeName: firstCollegeName,
//         workshopTitle: workshoptitle,
//         Date: date,
//         slotTime: SlotTime,
//         CollegeID: id,
//       })
//       .then((response) => {
        // if (response.status === 400) {
        //   console.log(response.message);
        //   seterrmsg(response.message);
        // } else if (response.status === 201) {
        //   seterrmsg(response.data.message);
        //   setBookingSuccess(true);
        //   setShowSuccessPopup(true);
        // } else {
        //   console.log(response);
        //   alert("Form data saved successfully");
        // }
//       })
//       .catch((error) => {
//         console.error(error);
//         // alert("Error saving form data");
//         if (error.response.status == 402) {
//           console.log(error.response.data.message);
//           seterrmsg(error.response.data.message);
//         } else if (error.response.status == 401) {
//           console.log(error.response.data.message);
//           seterrmsg(error.response.data.message);
//         } else {
//           console.log(error.response.data.message);
//           seterrmsg(error.response.data.message);
//         }
//       });
//   };

//   React.useEffect(() => {
//     // Fetch college data from API

//     axios
//       .get(`http://localhost:5031/AdanPradan/workshopsforclg/${id}`)
//       .then((response) => {
//         setColleges(response.data);
//       });
//   }, []);

//   return (
//     <div className="container wrappingDiv">
//       <div className="booking-page-container">
//         <br />
//         <h1>
//           Get Slot by <span className="booking-page-name">ADAN PRADAN</span>
//         </h1>
//         <br />
//         {workshops.length === 0 ? (
//           <div className="no-workshops-message full-screen-container">
//             No workshops available
//           </div>
//         ) : (
//           <>
//             <h1>Book workshop in {firstCollegeName}</h1>
//             <form className="booking-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <label>Select Workshop:</label>
//                 {/* <select name="Title"value={selectedWorkshop} onChange={handleWorkshopChange}>
//         {workshops.map((workshop, index) => (
//           <option key={index} value={workshop.workshopTitle} onChange={handleid(workshop)}>
//             {workshop.workshopTitle}
//           </option>
//         ))}
//       </select> */}
//                 {/* <select
//                   name="Title"
//                   value={selectedWorkshop}
//                   onChange={(e) => {
//                     handleWorkshopChange(e)
//                   }}
//                 >
//                   {workshops.map((workshop, index) => (
//                     <option key={index} value={workshop.workshopTitle}>
//                       {workshop.workshopTitle}
//                     </option>
//                   ))}
//                 </select> */}
//                 <div className="form-row">
//         <label>Select Workshop:</label>
//         <div className="workshop-dropdown">
//           <button className="dropdown-button" onClick={toggleWorkshopDropdown}>
//             {selectedWorkshop || "Select Workshop"}
//           </button>
//           {showWorkshopDropdown && (
//             <ul className="dropdown-list">
//               {workshops.map((workshop, index) => (
//                 <li
//                   key={index}
//                   onClick={(e) => {
//                     setSelectedWorkshop(workshop.workshopTitle);
//                     setShowWorkshopDropdown(false);
//                     handleid(e);
//                   }}
//                 >
//                   {workshop.workshopTitle}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//               </div>
//               {/* <div className="form-row">
//           <label htmlFor="date">Date: </label>
//           <input type="date" name="DATE" id="date" required />
//         </div> */}
//               <div className="form-row">
//                 <label htmlFor="date">Select Date:</label>
//                 <input
//                   type="date"
//                   name="DATE"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   min={currentDate.toISOString().split("T")[0]}
//                   max={maxDate}
//                   required
//                 />
//               </div>
//               <div className="form-row">
//                 <label htmlFor="slot-timings">Slot timings:</label>
//                 <select name="SLOTTIMINGS" id="slot-timings" required>
//                   <option value="9:00 AM-11:00 AM">9:00 PM- 11:00 AM </option>
//                   <option value="1:00 PM-300 PM"> 1:00 PM -3:00 PM</option>
//                   <option value="3:00 PM-5:00 PM"> 3:00 PM -5:00 PM</option>
//                 </select>
//               </div>
//               <br />
//               <div className="form-row">
//                 <br />
//                 <input type="submit" value="Submit Now" />
//               </div>
//               <br />
//             </form>
//           </>
//         )}
        // {bookingSuccess && (
        //   <SuccessPopup
        //     show={showSuccessPopup}
        //     handleClose={handleSuccessPopupClose}
        //   />
        // )}
        // <h6>
        //   {errmsg !== "Booking successful" && errmsg && (
        //     <div className="alert alert-danger">{errmsg}</div>
        //   )}
        //  </h6>
//       </div>
//     </div>
//   );
// }

// export default BookingPage;
import React, { useState } from "react";
import "./BookingPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";

function BookingPage() {
  const [colleges, setColleges] = useState([]);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState("");

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [workshopid, setWorkshopid] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  // Get the current date
  const currentDate = new Date();
  const endDate = new Date();
  endDate.setDate(currentDate.getDate() + 5);

  // Format the end date as a string for the max attribute
  const maxDate = endDate.toISOString().split("T")[0];
  const firstCollegeName = colleges.length > 0 ? colleges[0].collegeName : "";

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const workshoptitle = selectedWorkshop;
    const date = selectedDate;
    const SlotTime = event.target.elements.SLOTTIMINGS.value;
    const user = localStorage.getItem("Id");
    axios
      .post("http://localhost:5031/AdanPradan/bookWorkshop", {
        user,
        workshopid,
        collegeName: firstCollegeName,
        workshopTitle: workshoptitle,
        Date: date,
        slotTime: SlotTime,
        collegeId: id,
      })
      .then((response) => {
        console.log(response.data.message);
        if (response.status === 400) {
          console.log(response.data.message);
          seterrmsg(response.data.message);
        } else if (response.status === 201) {
          seterrmsg("Booking Successful!");
          setBookingSuccess(true);
          setShowSuccessPopup(true);
        } else {
          console.log(response);
          alert("Form data saved successfully");
        }
      })
      .catch((error) => {
        console.error(error);
        seterrmsg(error.response.data.message);
        // Handle error
      });
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:5031/AdanPradan/workshopsforclg/${id}`)
      .then((response) => {
        setColleges(response.data);
      });
  },[]);

  return (
    <div className="container wrappingDiv">
      <div className="booking-page-container">
        <br />
        <h1>
          Get Slot by <span className="booking-page-name">ADAN PRADAN</span>
        </h1>
        <br />
        {colleges.length === 0 ? (
          <div className="no-workshops-message full-screen-container">
            No workshops available
          </div>
        ) : (
          <>
            <h1>Book workshop in {firstCollegeName}</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
               <div className="form-row">
                <label>Select Workshop:</label>
              {/*  <div className="workshop-dropdown">
                  <button
                    className="dropdown-button"
                    onClick={() => {
                      setWorkshopid("");
                      setSelectedWorkshop("");
                    }}
                  >
                    {selectedWorkshop || "Select Workshop"}
                  </button>
                  <ul className="dropdown-list">
                    {colleges.map((college, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setWorkshopid(college.workshop_id);
                          setSelectedWorkshop(college.workshopTitle);
                        }}
                      >
                        {college.workshopTitle}
                      </li>
                    ))}
                  </ul>
                </div> */}
                 <div className="workshop-dropdown">
                  <button
                    className="dropdown-button"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    {selectedWorkshop || "Select Workshop"}
                  </button>
                  {showDropdown && (
                    <ul className="dropdown-list">
                      {colleges.map((college, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setWorkshopid(college.workshop_id);
                            setSelectedWorkshop(college.workshopTitle);
                            setShowDropdown(false);
                          }}
                        >
                          {college.workshopTitle}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="date">Select Date:</label>
                <input
                  type="date"
                  name="DATE"
                  value={selectedDate}
                  onChange={handleDateChange}
                  min={currentDate.toISOString().split("T")[0]}
                  max={maxDate}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="slot-timings">Slot timings:</label>
                <select name="SLOTTIMINGS" id="slot-timings" required>
                  <option value="9:00 AM-11:00 AM">9:00 AM-11:00 AM</option>
                  <option value="1:00 PM-3:00 PM">1:00 PM-3:00 PM</option>
                  <option value="3:00 PM-5:00 PM">3:00 PM-5:00 PM</option>
                </select>
              </div>
              <br />
              <div className="form-row">
                <br />
                <input type="submit" value="Submit Now" />
              </div>
              <br />
            </form>
          </>
        )}
        {bookingSuccess && (
          <SuccessPopup
            show={showSuccessPopup}
            handleClose={handleSuccessPopupClose}
          />
        )}
        <h6>
          {errmsg !== "Booking successful" && errmsg && (
            <div className="alert alert-danger">{errmsg}</div>
          )}
         </h6>
      </div>
    </div>
  );
}

export default BookingPage;
