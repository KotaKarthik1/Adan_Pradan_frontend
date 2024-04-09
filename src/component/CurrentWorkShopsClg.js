// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export default function CurrentWorkShopsClg() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   const [workshops, setWorkshops] = useState([]);
//   const workshop="";
//   const userId = localStorage.getItem("Id");
//   useEffect(() => {
//     axios
//       .get(
//         `http://localhost:5031/AdanPradan/workshopsforclg/${userId}`
//       )
//       .then((response) => {
//         setWorkshops(response.data);
//         //console.log(response.data);
//       })
//       .catch((error) => {
//         //console.error(error);
//       });
//   }, []);
//   const handleDelete = (id) => {
//     // Send a DELETE request to delete the workshop
//     axios
//       .delete(`http://localhost:5031/AdanPradan/deleteworkshop`, {
//         data: {
//           workshopId: id,
//           userId: userId
//         }
//       })
//       .then(() =>{})
//       .catch((error) => {
//         //console.error(error);
//       });
//   };
//   return (
//     <div>
//       <div className="container my-6 p-4">
//         <button
//           onClick={toggleDropdown}
//           style={{
//             backgroundColor: "green",
//             color: "white",
//             borderRadius: "10px",
//           }}
//           className="TOGGLEbUTTON"
//         >
//           Current workshops
//         </button>
//         {isDropdownOpen && (
//           <div>
//             <h2>Current Workshops</h2>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Workshop Name</th>
//                   <th>Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {workshops.map((workshop) => (
//                   <tr key={workshop._id}>
//                     <td>{workshop.workshopTitle}</td>
//                     <td>
//                       {new Date(workshop.workshopDate).toLocaleDateString()}
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => handleDelete(workshop._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import { set } from "mongoose";
import './CurrentWorkshopsClg.css';
export default function CurrentWorkShopsClg() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [workshops, setWorkshops] = useState([]);
  const userId = localStorage.getItem("Id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`https://adan-pradan-backend.onrender.com/AdanPradan/workshopsforclg/${userId}`)
      .then((response) => {
        setWorkshops(response.data);
        //console.log(response.data);
        setLoading(false);
      })
      .catch((error) => { 
        //console.error(error);
        setError(true);
      })
  }, [userId]);

  const handleDelete = (id) => {
    setLoading(true);
    setError(false);
    axios
      // .delete("https://adan-pradan-backend.onrender.com/AdanPradan/deleteworkshops", {
        .delete("https://adan-pradan-backend.onrender.com/AdanPradan/deleteworkshops", {
        data: {
          workshopId: id,
          userId: userId,
        },
      })
      .then(() => {
        //console.log("Workshop deleted successfully");
        // Update state to reflect the deletion
        setWorkshops(workshops.filter((workshop) => workshop.workshop_id !== id));
        setLoading(false);
      })
      .catch((error) => {
        //console.error(error);
        setError(true);
      });
  };
  

  return (
    <div>
      <div className="container my-6 p-4">
        <p className="display-3"
        >
          Current workshops
        </p>
          <div>
          {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
            <table className="table">
              <thead>
                <tr>
                  <th>Workshop Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((workshop) => (
                  <tr key={workshop.workshop_id}>
                    <td>{workshop.workshopTitle}</td>
                    <td>{new Date(workshop.workshopDate).toLocaleDateString().split('T')[0]}</td>
                    <td>
                      <button
                        className="deletebutton"
                        onClick={() => handleDelete(workshop.workshop_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
      )}
          </div>
      </div>
    </div>
  );
}
