import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Modal, Button, Form } from "react-bootstrap";
import './UserProfile.css';
import Loader from "./Loader";
import EmptyDataComponent from "./EmptyDataComponent";

function UserProfile() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [email, setEmail] = useState("");
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reenterednewPassword,setreenteredNewPassword]=useState("");
  const user_id = localStorage.getItem("Id");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [message,setmessage]=useState("");
  const [errormessage,seterrormessage]=useState("");
  const [showerrorModal,setShowerrorModal]=useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://adan-pradan-backend.onrender.com/AdanPradan/std/list/${user_id}`
        );
        setData(response.data.data);
        setLoading(false);
        // console.log(response.data.data.name);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
    fetchData();
  }, [user_id]);


  const containerStyle = {
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const handleEmailSubmit = async () => {
    try {
      setLoading(true);
      await axios.patch(
        `https://adan-pradan-backend.onrender.com/AdanPradan/std/updateemail/${user_id}`,
        { email: email }
      );
      // setData(response.data.data);
      // console.log("Email updated");
      setShowEmailModal(false);
      setEmail("");
      setmessage("Your email has been updated successfully");
      setShowSuccessModal(true); // Show success modal after successful update
    } catch (error) {
      seterrormessage("error updating");
      setEmail("");
      setShowerrorModal(true);
      console.error(error);
      setShowEmailModal(false);
    }finally{
      setLoading(false);
    }
  };
  
  const handlePasswordSubmit = async () => {
    try {
      setLoading(true);
      if (newPassword !== reenterednewPassword) {
        console.error("Re-entered password do not match");
        seterrormessage(" Re-entered password do not match");
        setShowerrorModal(true);
        return;
      }
      await axios.patch(
        `https://adan-pradan-backend.onrender.com/AdanPradan/std/updatepassword/${user_id}`,
        { prevPassword: prevPassword, newPassword: newPassword }
      );
      // setData(response.data.data);
      // console.log("Password updated");
      setShowPasswordModal(false);
      setPrevPassword("");
      setNewPassword("");
      setmessage("Your password has been updated successfully");
      setShowSuccessModal(true); // Show success modal after successful update
    } catch (error) {
      setPrevPassword("");
      setNewPassword("");
      setreenteredNewPassword("");
      seterrormessage("error updating");
      setShowerrorModal(true);
      console.error(error);
      setShowPasswordModal(false);
    }finally{
      setLoading(false);
    }
  };

  
  return (
    <div>
      <div>
        <div className="container wrappingDiv my-5 p-5" style={containerStyle}>
          {loading?<Loader/>:data.length==0?(<EmptyDataComponent/>):(<>
            {data && 
          <div>
          <h1 style={{ color: 'green' }}>Student Data:</h1>
          <h1>Name: {data.name}</h1>
          <h1>College Name: {data.collegeName}</h1>
         
          <div className="custom-dropdown">
      <button
        className="dropdown-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Update Details
      </button>
      {showDropdown && (
        <ul className="dropdown-list">
          <li onClick={() => setShowEmailModal(true)}>Update Email</li>
          <li onClick={() => setShowPasswordModal(true)}>Update Password</li>
        </ul>
      )}
    </div>
        </div>
}
          </>)}
      </div>
      </div>
      {/* Email Modal */}
      <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)}>
        <Modal.Header >
          <Modal.Title style={{color:"black"}}>Update Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formEmail">
            <Form.Label>New Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter new email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn"  style={{ backgroundColor: "gold" }} disabled={loading} onClick={handleEmailSubmit}>
    {loading ? (
      <div className="d-flex align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        {/* <span className="ml-2">Login...</span> */}
      </div>
    ) : (
      'Submit'
    )}
  </button>
        </Modal.Footer>
      </Modal>

      {/* Password Modal */}
      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
        <Modal.Header >
          <Modal.Title style={{color:"black"}}>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formPreviousPassword">
            <Form.Label>Previous Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter previous password"
              value={prevPassword}
              onChange={(e) => setPrevPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formNewPassword">
            <Form.Label>Re-enter new Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={reenterednewPassword}
              onChange={(e) => setreenteredNewPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn"  style={{ backgroundColor: "gold" }} disabled={loading} onClick={handlePasswordSubmit}>
    {loading ? (
      <div className="d-flex align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        {/* <span className="ml-2">Login...</span> */}
      </div>
    ) : (
      'Submit'
    )}
  </button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button  variant="primary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button> */}
          <button onClick={() => setShowSuccessModal(false)} className="btn" >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={showerrorModal} onHide={() => setShowerrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errormessage}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserProfile;
