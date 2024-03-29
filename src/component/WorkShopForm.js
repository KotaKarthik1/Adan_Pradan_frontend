import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mongoose from "mongoose";
import "./WorkShopForm.css";
const WorkShopForm = () => {
  const [formData, setFormData] = useState({
    workshops: [
      {
        college: mongoose.Types.ObjectId.createFromHexString(localStorage.getItem("Id")),
        workshopTitle: "",
        workshopDate: "",
        workshopSeats: "",
        workshopTiming: "",
      },
    ],
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const workshopsCopy = [...formData.workshops];
    workshopsCopy[index][field] = value;
    setFormData({ ...formData, workshops: workshopsCopy });
  };

  const handleAddWorkshop = () => {
    setFormData({
      ...formData,
      workshops: [
        ...formData.workshops,
        {
          college:mongoose.Types.ObjectId.createFromHexString(localStorage.getItem("Id")),
          workshopTitle: "",
          workshopDate: "",
          workshopSeats: "",
          workshopTiming: "",
        },
      ],
    });
  };

  const handleRemoveWorkshop = (index) => {
    const workshopsCopy = [...formData.workshops];
    workshopsCopy.splice(index, 1);
    setFormData({ ...formData, workshops: workshopsCopy });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
   console.log(formData.workshops);
    try {
      const response = await axios.post(
        "https://adan-pradan-backend.onrender.com/AdanPradan/addworkshops",
        {
          workshops: formData.workshops.filter(
            (workshop) => workshop.workshopTitle !== ""
          ),

        },
      );

      if (response.status === 201) {
        alert("Registration successful!");
        // navigate("/clg");
        // navigate("/todaylist");
        navigate("/college");
      }
      console.log(response.message);
    } catch (error) {
      console.error("Registration Error:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container my-6 wrappingDiv p-4">
      <button onClick={toggleDropdown} style={{ backgroundColor: "green", color: "white" ,borderRadius:'10px'}} className="TOGGLEbUTTON">Add workshops</button>

{isDropdownOpen && (
  <div>
    <div className="row justify-content-center">
        <div className="col-md-6 dropdown">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Add Workshops</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistration}>
                {formData.workshops.map((workshop, index) => (
                  <div key={index}>
                    <input
                      className="formInput"
                      type="text"
                      name={`workshopTitle`}
                      placeholder={`Workshop Title ${index + 1}`}
                      value={workshop.workshopTitle}
                      onChange={(e) => handleInputChange(e, index, "workshopTitle")}
                    />
                    <input
                      className="formInput"
                      type="date"
                      name={`workshopDate`}
                      placeholder={`Workshop Date ${index + 1}`}
                      value={workshop.workshopDate}
                      onChange={(e) => handleInputChange(e, index, "workshopDate")}
                    />
                    <input
                      className="formInput"
                      type="text"
                      name={`workshopSeats`}
                      placeholder={`Workshop Seats ${index + 1}`}
                      value={workshop.workshopSeats}
                      onChange={(e) => handleInputChange(e, index, "workshopSeats")}
                    />
                    <input
                      className="formInput"
                      type="time"
                      name={`workshopTiming`}
                      placeholder={`Workshop Timing ${index + 1}`}
                      value={workshop.workshopTiming}
                      onChange={(e) => handleInputChange(e, index, "workshopTiming")}
                    />
                    <button
                      type="button" className="TOGGLEbUTTON"
                      onClick={() => handleRemoveWorkshop(index)}
                      style={{ backgroundColor: "gold", color: "black" ,borderRadius:'10px',marginLeft:"30px"}}
                    >
                      Remove Workshop
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddWorkshop}
                style={{ backgroundColor: "gold", color: "black" ,borderRadius:'10px'}} className="TOGGLEbUTTON">
                  Add Workshop
                </button>
                <button type="submit" className="TOGGLEbUTTON" style={{ backgroundColor: "green", color: "white" ,borderRadius:'20px', marginLeft:"30px"}}>save</button>
              </form>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  </div>
)}
    </div>
    
  );
};

export default WorkShopForm;


