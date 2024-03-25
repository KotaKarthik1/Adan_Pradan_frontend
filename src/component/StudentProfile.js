import React, { useState, useEffect } from "react";
import "./StudProfDet.css";
import axios from 'axios';
import { Link } from "react-router-dom"; 

export default 
function StudentProfile() {
    // const userMail = localStorage.getItem('userMail');

// Check if userId exists
// if (userMail) {
//   // Use userId in your code
//   console.log('User mail is ', userMail);
// } else {
//   // Handle the case where userId doesn't exist
//   console.log('User ID not found in localStorage');
// }
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
      console.log(response.data);
      console.log(Data);
     
    });
  }, [Data]);

  const renderContent = () => {
    if (selectedNavItem === 'personal-info') {
      // Render Personal Info content here
      return (
        <div>
          <h2>Personal Info</h2>
          <p>Name: {Data.name}</p>
          {/* <h2>{data.email}</h2> */}
            <p>College Name: {Data.collegeName}</p>
          {/* Your Personal Info Content Goes Here */}
        </div>
      );
    } else if (selectedNavItem === 'bookings') {
      // Render Bookings content here
      return (
        <div>
          <h2>Bookings</h2>
          {/* Your Bookings Content Goes Here */}
         
          {/* <Link to="/UserClickOnBooked">
                    <p><b className="nav-link">Click here</b> to see previous bookings</p>
          </Link> */}
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
