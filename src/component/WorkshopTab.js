// import React from 'react'
// import { useEffect,useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import "./Userclickonclg.css"
// const WorkshopTab = () => {
//     const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:5031/AdanPradan/fullclgdata")
//       .then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//   }, []);

//   return (
//     <div className='table-container'>
//       <div
//           className="tab-pane fade"
//           id="workshop1"
//           role="tabpanel"
//           aria-labelledby="false"
//         >
//           <table className="table">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col">S.No</th>
//                 <th scope="col">Workshop</th>
//                 <th scope="col">Empty Slots</th>
//                 <th scope="col">College</th>
//                 <th scope="col">Book</th>
//               </tr>
//             </thead>
//             <tbody>
//             {data.map((row, index) => (
//                 <tr key={row.id}>
//                   <td>{index + 1}</td>
//                   <td>{row.workshopTitle}</td>
//                   <td>{row.workshopSeats-row.booking}</td>
//                   <td>
//                     {row.collegeName}
//                     {console.log(row._id)}
//                   </td>
//                   <td>
//                     <Link to={`/bookform/${row._id}`}> <button
//                         type="button"
//                         style={{
//                           display: "flex",
//                           background: "green",
//                           color: "white",
//                           borderRadius: "10px",
//                           marginLeft: "30px",
//                           whiteSpace: "nowrap",
//                         }}
//                       >
//                         Book
//                       </button>
//                     </Link> 
                    
//                   </td>
//                 </tr>
//               ))}
//          </tbody>
//           </table> 
//         </div>

//     </div>
//   )
// }

// export default WorkshopTab;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import './Userclickonclg.css';

const WorkshopTab = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    axios.get('http://localhost:5031/AdanPradan/fullclgdata')
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    let sortedData = [...data];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  };

  return (
    <div className="table-container">
      <div
        className="tab-pane fade"
        id="workshop1"
        role="tabpanel"
        aria-labelledby="false"
      >
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">
                <div style={{ cursor: 'pointer' }} onClick={() => requestSort('workshopTitle')}>
                  Workshop
                  {sortConfig && sortConfig.key === 'workshopTitle' && (
                    <span className="sort-icon">
                      {sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />}
                    </span>
                  )}
                </div>
              </th>
              <th scope="col">Empty Slots</th>
              <th scope="col">
                <div style={{ cursor: 'pointer' }} onClick={() => requestSort('collegeName')}>
                  College
                  {sortConfig && sortConfig.key === 'collegeName' && (
                    <span className="sort-icon">
                      {sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />}
                    </span>
                  )}
                </div>
              </th>
              <th scope="col">Book</th>
            </tr>
          </thead>
          <tbody>
            {sortedData().map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.workshopTitle}</td>
                <td>{row.workshopSeats - row.booking}</td>
                <td>{row.collegeName}</td>
                <td>
                  <Link to={`/bookform/${row._id}`}>
                    <button
                      type="button"
                      style={{
                        display: 'flex',
                        background: 'green',
                        color: 'white',
                        borderRadius: '10px',
                        marginLeft: '30px',
                        whiteSpace: 'nowrap',
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
    </div>
  );
};

export default WorkshopTab;
