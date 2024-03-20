// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BookingTable = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const userId = localStorage.getItem("Id");
  
// //   useEffect(() => {
// //     console.log(userId);
// //     axios
// //       .get(`http://localhost:5031/AdanPradan/userbooked/${userId}`)
// //       .then((response) => {
// //         setBookings(response.data);
// //         console.log(userId);
// //         // console.log(response.data);
// //         console.log(bookings);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, []);
// //   return (
// //     <div className="container wrappingDiv">
// //       <h1>em rooo</h1>
// //       <div
// //           className="tab-pane fade"
// //           id="workshop1"
// //           role="tabpanel"
// //           aria-labelledby="false"
// //         >
// //           {console.log("bookings is the" +bookings[0].collegeName)}
// //           <table className="table">
// //             <thead className="thead-dark">
// //               <tr>
// //                 <th scope="col">S.No</th>
// //                 <th scope="col">Workshop</th>
// //                 <th scope="col">Date Booked</th>
// //                 <th scope="col">College</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //          </tbody>
// //           </table> 
// //         </div>

// //     </div>
// //   );
// // };

// // export default BookingTable;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const userId = localStorage.getItem("Id");
  
//   useEffect(() => {
//     console.log(userId);
//     axios
//       .get(`http://localhost:5031/AdanPradan/userbooked/${userId}`)
//       .then((response) => {
//         setBookings(response.data);
//         console.log(userId);
//         // Updated bookings will be logged here
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [userId]); // Add userId as a dependency to the useEffect

//   useEffect(() => {
//     console.log("Updated bookings:", bookings);
//   }, [bookings]); // Log bookings whenever it changes

//   return (
//     <div className="container wrappingDiv">
//       <h1>em rooo</h1>
//       <div>
//           {console.log("bookings is the" +bookings[0]?.collegeName)}
//           {/* Use bookings array to render your table */}
//           <table className="table">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col">S.No</th>
//                 <th scope="col">Workshop</th>
//                 <th scope="col">Date and Time Booked</th>
//                 <th scope="col">College</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Map over bookings to render table rows */}
//               {bookings.map((booking, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{booking.workshopTitle}</td>
//                   <td>{booking.Date}</td>
//                   <td>{booking.collegeName}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//     </div>
//   );
// };

// export default BookingTable;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import "./UserBooked.css"; // Add your custom CSS for table headers

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
  const userId = localStorage.getItem("Id");

  useEffect(() => {
    axios
      .get(`http://localhost:5031/AdanPradan/userbooked/${userId}`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedBookings = () => {
    let sortedBookings = [...bookings];
    if (sortConfig !== null) {
      sortedBookings.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedBookings;
  };

  const handlecancel=async (id)=>
  {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://localhost:5031/AdanPradan/cancelBooking/${id}`
      );
      console.log(response.message);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error( error.message);
    }
  }
  return (
    <div className="container wrappingDiv">
      <h1>em rooo</h1>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="sortable-header" onClick={() => requestSort("workshopTitle")} scope="col">
                Workshop
                {sortConfig && sortConfig.key === "workshopTitle" && (
                  <span className="sort-icon">
                    {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
                  </span>
                )}
              </th>
              <th className="sortable-header"onClick={() => requestSort("Date")} scope="col">
                Date and Time Booked
                {sortConfig && sortConfig.key === "Date" && (
                  <span className="sort-icon">
                    {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
                  </span>
                )}
              </th>
              <th className="sortable-header" onClick={() => requestSort("collegeName")} scope="col">
                College
                {sortConfig && sortConfig.key === "collegeName" && (
                  <span className="sort-icon">
                    {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
                  </span>
                )}
              </th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {sortedBookings().map((booking, index) => {
              const st=booking.Date.split('T')[0];
              const check=new Date().toISOString().split('T')[0];
              console.log(st,check);
              const badge =
              st >= check
              ? 'cancel'
              : 'notcancel';
  
              return(
              <tr key={index}>
                <td>{booking.workshopTitle}</td>
                <td>{booking.Date}</td>
                <td>{booking.collegeName}</td>
                <td>
                  {badge === 'cancel' &&  (
            
                      <button className="btn" value="cancel" onClick={()=>handlecancel(booking._id)}>Cancel</button>
                    
                  )}
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
