// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Userclickonclg.css";
// import axios from "axios";
// import { set } from "mongoose";

// function Userclickonclg() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5031/AdanPradan/colleges/list")
//       .then((response) => {
//         // console.log(response.data);
//         setData(response.data.post);
//         console.log(response.data.post);
//       });
//   }, []); // Added empty dependency array to run the effect only once

//   return (
//     <div className="container table-container">
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">S.No</th>
//             <th scope="col">
//               <div style={{ cursor: "pointer" }}>College Name</div>
//             </th>
//             <th scope="col">JNTU Code</th>
//             <th scope="col">BOOK</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data && data.map((row, index) => (
//             <tr key={row.id}>
//               <td>{index + 1}</td>
//               <td>{row.collegeName}</td>
//               <td>{row.JntuCode}</td>
//               <td>
//                 <Link to={`/bookform/${row._id}`}>
//                   <button
//                     type="button"
//                     style={{
//                       display: "flex",
//                       background: "green",
//                       color: "white",
//                       borderRadius: "10px",
//                       marginLeft: "30px",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     Book
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Userclickonclg;

//last change
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Userclickonclg.css";
// import axios from "axios";
// import { FaSortDown, FaSortUp } from "react-icons/fa";

// function Userclickonclg() {
//   const [data, setData] = useState([]);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

//   useEffect(() => {
//     axios.get("https://adan-pradan-backend.onrender.com/AdanPradan/colleges/list")
//       .then((response) => {
//         setData(response.data.post);
//       });
//   }, []);

//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedData = () => {
//     let sortedData = [...data];
//     if (sortConfig !== null) {
//       sortedData.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === "ascending" ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === "ascending" ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortedData;
//   };

//   return (
//     <div className="container table-container">
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">S.No</th>
//             <th scope="col">
//               <div style={{ cursor: "pointer" }} onClick={() => requestSort("collegeName")}>
//                 College Name
//                 {sortConfig && sortConfig.key === "collegeName" && (
//                   <span className="sort-icon">
//                     {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
//                   </span>
//                 )}
//               </div>
//             </th>
//             <th scope="col">
//               <div style={{ cursor: "pointer" }} onClick={() => requestSort("JntuCode")}>
//                 JNTU Code
//                 {sortConfig && sortConfig.key === "JntuCode" && (
//                   <span className="sort-icon">
//                     {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
//                   </span>
//                 )}
//               </div>
//             </th>
//             <th scope="col">BOOK</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedData().map((row, index) => (
//             <tr key={row.id}>
//               <td>{index + 1}</td>
//               <td>{row.collegeName}</td>
//               <td>{row.JntuCode}</td>
//               <td>
//                 <Link to={`/bookform/${row._id}`}>
//                   <button
//                     type="button"
//                     style={{
//                       display: "flex",
//                       background: "green",
//                       color: "white",
//                       borderRadius: "10px",
//                       marginLeft: "30px",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     Book
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Userclickonclg;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Userclickonclg.css";
import axios from "axios";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import Loader from "./Loader";
import Error from "./Error";
import EmptyDataComponent from "./EmptyDataComponent";
function Userclickonclg() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  useEffect(() => {
    axios.get("https://adan-pradan-backend.onrender.com/AdanPradan/colleges/list")
      .then((response) => {
        setData(response.data.post);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    let sortedData = [...data];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (data.length === 0) {
    return <EmptyDataComponent />;
  }

  return (
    <div className="container table-container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">
              <div style={{ cursor: "pointer" }} onClick={() => requestSort("collegeName")}>
                College Name
                {sortConfig && sortConfig.key === "collegeName" && (
                  <span className="sort-icon">
                    {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
                  </span>
                )}
              </div>
            </th>
            <th scope="col">
              <div style={{ cursor: "pointer" }} onClick={() => requestSort("JntuCode")}>
                JNTU Code
                {sortConfig && sortConfig.key === "JntuCode" && (
                  <span className="sort-icon">
                    {sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />}
                  </span>
                )}
              </div>
            </th>
            <th scope="col">BOOK</th>
          </tr>
        </thead>
        <tbody>
          {sortedData().map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.collegeName}</td>
              <td>{row.JntuCode}</td>
              <td>
                <Link to={`/bookform/${row._id}`}>
                  <button
                    type="button"
                    style={{
                      display: "flex",
                      background: "green",
                      color: "white",
                      borderRadius: "10px",
                      marginLeft: "30px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Book
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userclickonclg;
