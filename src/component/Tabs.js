import React, { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import axios from "axios";
import Loader from "./Loader";
import EmptyDataComponent from "./EmptyDataComponent";
const AllCollegeBookings = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const userId =localStorage.getItem("Id");
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
  const [loadingpast, setloadingpast] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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
  pastdate=pastdate.toISOString().split("T")[0];
//   const samplepastdate = pastdate;
  var upcomingdate = new Date(dates[dates.length - 1]);
  upcomingdate.setDate(upcomingdate.getDate() + 1);
  const tabs = ["past", ...dates, "upcoming"];

  const handleTabClick = (index) => {
    setActiveTab(index);
    if(index==0)
    {
        fetchBookingDetailspast(pastdate);
    }
    else if(index==9)
    {
        fetchBookingDetailsupcoming(upcomingdate);
    }
    else{
        console.log(index);
        fetchBookingDetails(tabs[index]);
    }
  };

  const handleLeftArrowClick = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  useEffect(() => {
    setShowLeftArrow(activeTab > 0);
    setShowRightArrow(activeTab < tabs.length - 1);
  }, [activeTab, tabs.length]);

  const fetchBookingDetails = async (date) => {
    try {
        console.log(date);
      setloading(true);
      const response = await axios.get(
        `https://adan-pradan-backend.onrender.com/AdanPradan/bookingsfilterbydate?id=${userId}&checkdate=${date}`
      );
      setNormalBookings(response.data);
      setloading(false);
      setEmpty(response.data.length === 0);
      console.log(response);
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
    console.log("pasT",date);
      setloadingpast(true);
      const formattedDate = new Date(date).toISOString().split("T")[0];
      console.log(formattedDate);
      const response = await axios.get(
        `https://adan-pradan-backend.onrender.com/AdanPradan/bookingsfilterbydatepast?id=${userId}&checkdate=${formattedDate}`
      );
      setPastBookings(response.data);
      setDatespast(Object.keys(response.data));
      setloadingpast(false);
      setEmpty(response.data.length === 0);
      console.log(response);
    } catch (error) {
      setError(true);
      setloadingpast(false);
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
        `https://adan-pradan-backend.onrender.com/AdanPradan/bookingsfilterbydateupcoming?id=${userId}&checkdate=${formattedDate}`
      );
      setUpcomingBookings(response.data);
      setDatesupcoming(Object.keys(response.data));
      setloading(false);
      setEmpty(response.data.length === 0);
      console.log(response.data);
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
  return (
    <div className={`${styles['tab-wrapper']}`} style={{marginTop:'4cm'}}>
        <div className="container-fuild" style={{justifyContent:"center",display:'flex',fontSize:'30px'}}>
        <p style={{fontFamily:'"Pixelify Sans", sans-serif'}}>Choose date</p>
        </div>
      <div className={styles["tabs-container"]}>
        <div className={styles["tabs-scroll"]}>
          {showLeftArrow && (
            <div
              className={styles["tab-arrow"]}
              onClick={handleLeftArrowClick}
            >
              &lt;
            </div>
          )}
          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${styles.tab} ${
                  index === activeTab ? styles.active : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                <p style={{ wordBreak: "none", whiteSpace: "nowrap" }}>
                  {tab}
                </p>
              </div>
            ))}
          </div>
          {showRightArrow && (
            <div
              className={styles["tab-arrow"]}
              onClick={handleRightArrowClick}
            >
              &gt;
            </div>
          )}
        </div>
        <div className={styles["tab-content"]}>
        {activeTab === 0 && (
            <div>
              <h1>Past Bookings</h1>
              {loadingpast ? (
                <Loader/>
              ) : pastBookings.length===0 ? (
                <p>No past bookings found</p>
              ) : (
                <>
                  <div className="container">
    <div className="row">
                {datespast.map((date, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header"> {new Date(date).toLocaleDateString(
                                    "en-IN",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    }
                                  )}</div>
            <div className="card-body table-container">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>User</th>
                    <th>College Name</th>
                    <th>Workshop</th>
                    <th>Date</th>
                    <th>Slot Time</th>
                  </tr>
                </thead>
                <tbody>
                  {pastBookings[date].map((booking, bookingIndex) => (
                    <tr key={bookingIndex}>
                      <td>{booking.user}</td>
                      <td>{booking.studentclgName}</td>
                      <td>{booking.workshopTitle}</td>
                      <td>{new Date(date).toLocaleDateString(
                                    "en-IN",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    }
                                  )}</td>
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
          )}
          {activeTab > 0 && activeTab < tabs.length - 1 && (
  <div>
    {loading ? (
      <Loader />
    ) : error ? (
      <div><h1>error occurred</h1></div>
    ) : normalBookings.length === 0 ? (
      <div><h1>no bookings found</h1></div>
    ) : (
      <div className="container" style={{ marginBottom:"10rem" }}>
        {Object.entries(normalBookings).map(([workshopTitle, bookings]) => (
          <div className="card" key={workshopTitle}>
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
        ))}
      </div>
    )}
  </div>
)}

          {activeTab === tabs.length - 1 && (
            <div>
              <h1>Upcoming Bookings</h1>
              {loading ? (
                <Loader/>
              ) : empty ? (
                <p>No upcoming bookings found</p>
              ) : (
                upcomingBookings.map((booking, index) => (
                  <div key={index}>{/* Render upcoming booking content here */}</div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCollegeBookings;
