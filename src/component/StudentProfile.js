import React, { useState, useEffect } from "react";
import "./StudProfDet.css";
import axios from 'axios';
import { Link } from "react-router-dom"; 

export default 
function StudentProfile() {
  const [selectedNavItem, setSelectedNavItem] = useState('personal-info');
  const [Data, setData] = useState([]);
  const handleNavClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  useEffect(() => {
    const userId = localStorage.getItem("Id");
    axios.get(`https://adan-pradan-backend.onrender.com/AdanPradan/std/${userId}`).then((response) => {
      // setData(response.data[0]);
      setData(response.data.post);
      // console.log(response.data);
      // console.log(Data);
     
    });
  }, [Data]);

  const renderContent = () => {
    if (selectedNavItem === 'personal-info') {

      return (
        <div>
          <h2>Personal Info</h2>
          <p>Name: {Data.name}</p>

            <p>College Name: {Data.collegeName}</p>

        </div>
      );
    } else if (selectedNavItem === 'bookings') {

      return (
        <div>
          <h2>Bookings</h2>
          <p><Link to="/UserClickOnBooked">Click here</Link> to see previous bookings.</p>
        </div>
      );
    }
  };

  return (
    <div className="student-profile container-expand wrappingDiv">
      <div className="left-nav">
        {/* Left Navigation Bar */}
        <ul>
          <li onClick={() => handleNavClick('personal-info')}>Personal Info</li>
          <li onClick={() => handleNavClick('bookings')}>Bookings</li>
        </ul>
      </div>

      <div className="content">
        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}
