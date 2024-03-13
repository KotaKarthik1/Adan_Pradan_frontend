import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CollegeBookings.css";
const CollegeBookings = () => {
  const userId = localStorage.getItem("Id");
  const [errorgot, setError] = useState("");
  const [datagot, setdatagot] = useState([]);
  // const [filteredBookings, setFilteredBookings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5031/AdanPradan/collegebooked/${userId}`
        );
        setdatagot(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(error.response.data.message);
        } else if (error.response && error.response.status === 500) {
          setError(error.response.data.message);
        } else {
          console.error("Login Error:", error);
          setError(error.message);
        }
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to mimic componentDidMount
  var todaydate = new Date();
  todaydate=todaydate.toISOString().split("T")[0];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const dates = Array.from({ length: 7 }, (_, index) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + index);
    return nextDate.toISOString().split("T")[0];
  });
  function isless(str1, str2) {
    const dateString1 = str1;
    const numericDate1 = parseInt(dateString1.replace(/-/g, ""), 10);
    // console.log(numericDate1);
    const dateString2 = str2;
    const numericDate2 = parseInt(dateString2.replace(/-/g, ""), 10);
    // console.log(numericDate2);
    if (numericDate1 < numericDate2) {
      // console.log("sending true");
      return true;
    } else {
      console.log("sending false");
      return false;
    }
  }
  var FilteredBookings = [];
  const filterTheData = async () => {
    const currentDate = new Date();
    // console.log("Current Date:", currentDate.toISOString());

    var workshopsOnCurrentDate = [];
    for (let day = 0; day < 7; day++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + day);
      const formattedDate = nextDate.toISOString().substring(0, 10);

      // console.log(`Checking for date: ${formattedDate}`);
      workshopsOnCurrentDate = [];
      var itemid = "";
      for (const item of datagot) {
        itemid = item._id;
        //   console.log( `start ${itemid}`);
        workshopsOnCurrentDate = [];
        for (const workshop of item.workshops) {
          if (workshop.Date.substring(0, 10) === formattedDate) {
            const studentDetails = item.studentdetails.find(
              (student) => student._id === workshop.user
            );
            workshopsOnCurrentDate.push([
              {
                studuser: workshop.user,
                collegeName: studentDetails ? studentDetails.collegeName : "",
                Date: workshop.Date,
                slotTime: workshop.slotTime,
                stdname: studentDetails ? studentDetails.name : "",
              },
            ]);
            // console.log(`for item ${itemid}`,workshopsOnCurrentDate);
          }
        }
        // console.log(`out side for loop ${itemid} done`);
        if (workshopsOnCurrentDate.length == 0 && formattedDate>=todaydate) {
          continue;
        }
        FilteredBookings.push([
          formattedDate,
          item._id,
          workshopsOnCurrentDate,
        ]);
      }
    }
    // console.log("the date is ");
    // console.log("Workshops on the current date: ", FilteredBookings);
    // console.log("Workshops on the current date: ", FilteredBookings[0]);
    // console.log("Workshops on the current date: ", FilteredBookings[2][2]);
  };
  filterTheData();

  return (
    <div className="wrappingDiv">
      {console.log(datagot)}
      <div className="container my-5 p-5 ">
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pastBookings-tab"
              data-bs-toggle="tab"
              data-bs-target="#pastBookings"
              type="button"
              role="tab"
              aria-controls="pastBookings"
              aria-selected={false}
            >
              <div className=" itemcolor">
                <h1>Past Bookings</h1>
              </div>
            </button>
          </li>
          {dates.map((date, index) => (
            <li key={index} className="nav-item" role="presentation">
              <button
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`college${index + 1}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#college${index + 1}`}
                type="button"
                role="tab"
                aria-controls={`college${index + 1}`}
                aria-selected={index === 0}
              >
                <div className=" itemcolor">{date}</div>
              </button>
            </li>
          ))}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="pastBookings"
            role="tabpanel"
            aria-labelledby="pastBookings-tab"
          >
            past Bookings
              <h1>sare ra</h1>
              {/* <h1>{date}</h1> */}
              {/* {console.log(FilteredBookings, "past in the tab")} */}
              <div>
                {FilteredBookings.filter((entryToRecord) =>
                  isless(entryToRecord[0], todaydate)
                ).map((entryToDetail, entryIndex) => (
                  <div key={entryIndex} className="card">
                    {console.log("past data found")};
                    <div className="cardbody">
                      <h2 className="card-title">{entryToDetail[1]}</h2>
                      <div className="table-container">
                        {entryToDetail[2][0].length > 0 ? (
                          <table className="table">
                            <thead className="thead-dark">
                              <tr
                                style={{
                                  backgroundColor: "rgb(244, 223, 104)",
                                }}
                              >
                                <th>
                                  <center>Student Name</center>
                                </th>
                                <th>
                                  <center>College Name</center>
                                </th>
                                <th>
                                  <center>Slot Time</center>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {entryToDetail[2][0]
                                .slice(0, 5)
                                .map((student, studentIndex) => (
                                  <tr>
                                    <td>
                                      <center>{student.stdname}</center>
                                    </td>
                                    <td>
                                      <center>{student.collegeName}</center>
                                    </td>
                                    <td>
                                      <center>{student.slotTime}</center>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        ) : (
                          <h1>No students booked</h1>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          {dates.map((date, index) => (
            <div
              key={index}
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`college${index + 1}`}
              role="tabpanel"
              aria-labelledby={`college${index + 1}-tab`}
            >
              <h1>{date}</h1>
              {/* {console.log(FilteredBookings, " in the tab")} */}
              <div>
                {FilteredBookings.filter(
                  (entryToRecord) => entryToRecord[0] === date
                ).map((entryToDetail, entryIndex) => (
                  <div key={entryIndex} className="card">
                    <div className="cardbody">
                      <h2 className="card-title">{entryToDetail[1]}</h2>
                      <div className="table-container">
                        {entryToDetail[2][0].length > 0 ? (
                          <table className="table">
                            <thead className="thead-dark">
                              <tr
                                style={{
                                  backgroundColor: "rgb(244, 223, 104)",
                                }}
                              >
                                <th>
                                  <center>Student Name</center>
                                </th>
                                <th>
                                  <center>College Name</center>
                                </th>
                                <th>
                                  <center>Slot Time</center>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {entryToDetail[2][0]
                                .slice(0, 5)
                                .map((student, studentIndex) => (
                                  <tr>
                                    <td>
                                      <center>{student.stdname}</center>
                                    </td>
                                    <td>
                                      <center>{student.collegeName}</center>
                                    </td>
                                    <td>
                                      <center>{student.slotTime}</center>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        ) : (
                          <h1>No students booked</h1>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            className="tab-pane fade"
            id="upcomingBookings"
            role="tabpanel"
            aria-labelledby="upcomingBookings-tab"
          >
            upcoming booking
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeBookings;
