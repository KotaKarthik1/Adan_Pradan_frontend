<<<<<<< HEAD

import React,{useState} from "react";
import "./BookingPage.css";
import axios from "axios";
import { useParams } from 'react-router-dom';
import SuccessPopup from "./SuccessPopup";
function BookingPage() {
  const [colleges, setColleges] = useState([]);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedWorkshop,setSelectedWorkshop]=useState("");

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Get the current date
  const currentDate = new Date();
  // const mongoose = require('mongoose');
  const [errmsg,seterrmsg]=useState("");

  // Calculate the end date (current date + 5 days)
  const endDate = new Date();
  endDate.setDate(currentDate.getDate() + 5);

  // Format the end date as a string for the max attribute
  const maxDate = endDate.toISOString().split("T")[0];
  const firstCollegeName = colleges.length > 0 ? colleges[0].collegeName : "";
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleWorkshopChange = (event) => {
    setSelectedWorkshop(event.target.value);
  };
  const workshops = colleges.map(college => ({
  workshopTitle: college.workshopTitle,
  }));

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const college = event.target.elements.COLLEGE.value;
    const workshoptitle = event.target.elements.Title.value;
    const date = event.target.elements.DATE.value;
    const SlotTime = event.target.elements.SLOTTIMINGS.value;
    const user = (localStorage.getItem("Id"));

    axios.post("http://localhost:5031/AdanPradan/bookWorkshop", {
      user, 
       collegeName:firstCollegeName, 
      workshopTitle:workshoptitle, 
      Date:date,
     slotTime:SlotTime, 
      CollegeID:id,
    })
    .then((response) => {
      if(response.status===400)
      {
        console.log(response.message);
        seterrmsg(response.message);
      }
      else if(response.status===201)
      {
        seterrmsg(response.data.message);
        setBookingSuccess(true);
        setShowSuccessPopup(true);
      }
      else{
      console.log(response);
      alert("Form data saved successfully");

      }
    })
    .catch((error) => {
      console.error(error);
      // alert("Error saving form data");
      if(error.response.status==402)
      {
        console.log(error.response.data.message);
        seterrmsg(error.response.data.message);
      }
      else if(error.response.status==401)
      {
        console.log(error.response.data.message);
        seterrmsg(error.response.data.message);
      }
      else
      {
        console.log(error.response.data.message);
        seterrmsg(error.response.data.message);
      }
    });
  };

  React.useEffect(() => {
    // Fetch college data from API
    
    axios.get(`http://localhost:5031/AdanPradan/workshopsforclg/${id}`).then((response) => {
      setColleges(response.data);
    });
  }, []);


  return (
    <div className="container wrappingDiv">
    <div className="booking-page-container">
      <br/>
      <h1>Get Slot by <span className="booking-page-name">ADAN PRADAN</span></h1><br/>
      <h1>Book workshop in {firstCollegeName}</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
      <label>
        Select Workshop:</label>
        <select name="Title"value={selectedWorkshop} onChange={handleWorkshopChange}>
        {workshops.map((workshop, index) => (
          <option key={index} value={workshop.workshopTitle}>
            {workshop.workshopTitle}
          </option>
        ))}
      </select>
      
        </div>
        {/* <div className="form-row">
          <label htmlFor="date">Date: </label>
          <input type="date" name="DATE" id="date" required />
        </div> */}
        <div className="form-row">
         <label htmlFor="date">
        Select Date:</label>
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
                  <option value="9:00 AM-11:00 AM" >9:00 PM- 11:00 AM </option>
                   <option value="1:00 PM-300 PM"> 1:00 PM -3:00 PM</option>
                  <option value="3:00 PM-5:00 PM"> 3:00 PM -5:00 PM</option>
          </select>
        </div>
        <br/>
        <div className="form-row">
          <br/>
          <input type="submit" value="Submit Now" />
        </div>
        <br/>
      </form>
      {bookingSuccess && (
        <SuccessPopup show={showSuccessPopup} handleClose={handleSuccessPopupClose} />
      )}
      <h6>{errmsg!=='Booking successful' && errmsg && <div className="alert alert-danger">{errmsg}</div>}</h6>
    </div>
    </div>
  );
}

export default BookingPage;
=======
import React from "react";
import "./BookingPage.css"
function Bookingpage() {
  return (
    <>
      <div className="container wrappingDiv">
        <div className="bookingform">
          <div className="formcredentials">
            <form>
              <center><h1>Get Slot by <span id="slotbookingname"> ADAN PRADAN</span></h1></center>
              <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="NAME" id="Name" />
              </div>
              <br/>
              <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="EMAIL" id="email" placeholder="example123@gmail.com" />
              </div>
              <br/>
              <div>
                <label htmlFor="selectcollege">College:</label>
                <select name="COLLEGE" id="selectcollege">
                  <option value="KMIT">KMIT </option>
                  <option value="KMEC">KMEC DEGREE</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" >Date: </label>
                <input type="date" name="DATE" id="date" />
                <br />
              </div>
              <br />

              <div>
                <label htmlFor="slot-timings">Slot timings :</label>
                <select name="SLOTTIMINGS" id="slot-timings">
                  <option value="9:00 AM-12:00 PM" >9:00 PM- 12:00 PM </option>
                  <option value="2:00 PM -5:00 PM"> 2:00 PM -5:00 PM</option>
                </select>
              </div>
              <br />

              <input type="submit" value="Submit Now" />
          
          </form>
        </div>
      </div>
    </div>
</>
    )
}
export default Bookingpage;
>>>>>>> eead39944a4b0d839e9fe84b2d2492547468b01e
