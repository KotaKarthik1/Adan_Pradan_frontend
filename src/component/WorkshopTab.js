import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import './Userclickonclg.css';
import Loader from './Loader';
import Error from './Error';
import EmptyDataComponent from './EmptyDataComponent';
const WorkshopTab = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    axios.get('https://adan-pradan-backend.onrender.com/AdanPradan/fullclgdata')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
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
    <div className="table-container">
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
            <th scope="col">
              <div style={{ cursor: 'pointer' }} onClick={() => requestSort('workshopDate')}>
                Date
                {sortConfig && sortConfig.key === 'workshopDate' && (
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
              <td>{row.workshopDate.split("T")[0]}</td>
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
  );
};

export default WorkshopTab;
