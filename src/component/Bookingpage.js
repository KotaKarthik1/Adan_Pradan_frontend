import React, { useState } from "react";
import "./BookingPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";
import Loader from "./Loader";
import EmptyDataComponent from "./EmptyDataComponent";


function BookingPage() {
  const [colleges, setColleges] = useState([]);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [loading, setLoading] = useState(false);

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [workshopid, setWorkshopid] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  // Get the current date
  const currentDate = new Date();
  const endDate = new Date();
  endDate.setDate(currentDate.getDate() + 8);

  // Format the end date as a string for the max attribute
  const maxDate = endDate.toISOString().split("T")[0];
  const firstCollegeName = colleges.length > 0 ? colleges[0].collegeName : "";
  // const envl = process.env.database_link;
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
      .post("https://adan-pradan-backend.onrender.com/AdanPradan/bookWorkshop", {
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
          // console.log(response.data.message);
          seterrmsg(response.data.message);
          setSelectedWorkshop("");
          setSelectedDate("");
        } else if (response.status === 201) {
          // seter("Booking Successful!");
          seterrmsg("");
          setBookingSuccess(true);
          setShowSuccessPopup(true);
          setSelectedWorkshop("");
          setSelectedDate("");
        } else {
          // console.log(response);
          alert("Form data saved successfully");
          setSelectedWorkshop("");
          setSelectedDate("");
        }
      })
      .catch((error) => {
        // console.error(error);
        setSelectedWorkshop("");
        setSelectedDate("");
        seterrmsg(error.response.data.message);
        // Handle error
      });
  };

  React.useEffect(() => {
    try{
    setLoading(true);
    axios
      .get(`https://adan-pradan-backend.onrender.com/AdanPradan/workshopsforclg/${id}`)
      .then((response) => {
        setColleges(response.data);
        setLoading(false);
      });
    }catch(err)
    {
      setLoading(false);
      console.log(err);
    }

  },[id]);

  return (
    <div className="container wrappingDiv">
      <div className="booking-page-container">
        <br />
        <h1>
          Get Slot by <span className="booking-page-name sitename">Aadan Pradan</span>
        </h1>
        {loading?<Loader/>:colleges.length==0?(<EmptyDataComponent/>):(
          <>
          <h1>Book workshop in {firstCollegeName}</h1>
          <form className="booking-form" onSubmit={handleSubmit}>
             <div className="form-row">
              <label>Select Workshop:</label>
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
              <button type="submit" className="buttonforsubmit" value="Submit Now">
  {loading ? (
    <div className="d-flex align-items-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      {/* <span className="ml-2">Login...</span> */}
    </div>
  ) : (
    'Submit'
  )}
</button>
            </div>
            <br />
          </form>
        </>
        )}
        <br />
        
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
