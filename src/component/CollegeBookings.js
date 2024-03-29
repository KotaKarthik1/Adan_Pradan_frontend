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
        `https://adan-pradan-backend.onrender.com/AdanPradan/bookingsfilterbydate?id=${userId}&checkdate=${date}`
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
        //console.error("Error:", error);
        setError(error.message);
      }
    }
  };

  const fetchBookingDetailspast = async (date) => {
    try {
      setloading(true);
      const formattedDate = new Date(date).toISOString().split("T")[0];
      const response = await axios.get(
        `https://adan-pradan-backend.onrender.com/AdanPradan/bookingsfilterbydatepast?id=${userId}&checkdate=${formattedDate}`
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
        //console.error("Error:", error);
        setError(error.message);
      }
    }
  };
  const fetchBookingDetailsupcoming = async (date) => {
    try {
      setloading(true);
      const formattedDate = new Date(date).toISOString().split("T")[0];
      const response = await axios.get(
        `https://adan-pradan-backend.onrender.com/AdanPradan/bookingsfilterbydatepast?id=${userId}&checkdate=${formattedDate}`
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
        //console.error("Error:", error);
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
  // //console.log(pastdate, " is past date");
  const samplepastdate=pastdate;
  var upcomingdate = new Date(dates[dates.length - 1]);
  upcomingdate.setDate(upcomingdate.getDate() + 1);
  // ////console.log(upcomingdate, " is upcoming date");

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
