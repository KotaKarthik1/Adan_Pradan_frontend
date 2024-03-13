import React, { useState } from "react";
import "./WorkShopForm.css";
const CollegeProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="WrappingDiv">
      <button
        className="btn TOGGLEbUTTON"
        onClick={toggleDropdown}
        style={{
          display: "flex",
          background: "green",
          color: "white",
          borderRadius: "10px",
          marginLeft: "30px",
          whiteSpace: "nowrap",
        }}
      >
        {" "}
        Update Profile{" "}
      </button>

      {isDropdownOpen && <div>
        <h1> dropdown for update profile</h1>
        </div>}
    </div>
  );
};

export default CollegeProfile;
