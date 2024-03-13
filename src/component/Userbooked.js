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
//         // console.log(response.data);
//         console.log(bookings);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <div className="container wrappingDiv">
//       <h1>em rooo</h1>
//       <div
//           className="tab-pane fade"
//           id="workshop1"
//           role="tabpanel"
//           aria-labelledby="false"
//         >
//           {console.log("bookings is the" +bookings[0].collegeName)}
//           <table className="table">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col">S.No</th>
//                 <th scope="col">Workshop</th>
//                 <th scope="col">Date Booked</th>
//                 <th scope="col">College</th>
//               </tr>
//             </thead>
//             <tbody>
//          </tbody>
//           </table> 
//         </div>

//     </div>
//   );
// };

// export default BookingTable;
import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem("Id");
  
  useEffect(() => {
    console.log(userId);
    axios
      .get(`http://localhost:5031/AdanPradan/userbooked/${userId}`)
      .then((response) => {
        setBookings(response.data);
        console.log(userId);
        // Updated bookings will be logged here
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]); // Add userId as a dependency to the useEffect

  useEffect(() => {
    console.log("Updated bookings:", bookings);
  }, [bookings]); // Log bookings whenever it changes

  return (
    <div className="container wrappingDiv">
      <h1>em rooo</h1>
      <div>
          {console.log("bookings is the" +bookings[0]?.collegeName)}
          {/* Use bookings array to render your table */}
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Workshop</th>
                <th scope="col">Date and Time Booked</th>
                <th scope="col">College</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over bookings to render table rows */}
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.workshopTitle}</td>
                  <td>{booking.Date}</td>
                  <td>{booking.collegeName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default BookingTable;
