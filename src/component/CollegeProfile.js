import React, { useState } from "react";
import "./WorkShopForm.css";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
const CollegeProfile = () => {
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

  const handleCloseModal = () => {
    // Reset password state values when the modal is closed
    setPrevPassword('');
    setNewPassword('');
    setreenteredNewPassword('');
    setShowPasswordModal(false);
  };
  const handleEmailSubmit = async () => {
    try {
      await axios.patch(
        `http://localhost:5031/AdanPradan/clg/updateemail/${user_id}`,
        { email: email }
      );
      // setData(response.data.data);
      console.log("Email updated");
      setShowEmailModal(false);
      setmessage("Your email has been updated successfully");
      setShowSuccessModal(true); // Show success modal after successful update
    } catch (error) {
      seterrormessage("error updating");
      setShowerrorModal(true);
      console.error(error);
      setShowEmailModal(false);
    }
  };
  
  const handlePasswordSubmit = async () => {
    try {
      if (newPassword !== reenterednewPassword) {
        console.error("Re-entered password doesn't match");
        seterrormessage("Re-entered password doesn't match")
        setShowerrorModal(true);
        return;
      }
      await axios.patch(
        `http://localhost:5031/AdanPradan/clg/updatepassword/${user_id}`,
        { prevPassword: prevPassword, newPassword: newPassword }
      );
      // setData(response.data.data);
      console.log("Password updated");
      setShowPasswordModal(false);
      setmessage("Your password has been updated successfully");
      setShowSuccessModal(true); // Show success modal after successful update
    } catch (error) {
      seterrormessage("error updating");
      setShowerrorModal(true);
      console.error(error);
      setShowPasswordModal(false);
    }
  };
  return (
    <>
    <div className="WrappingDiv">
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
          <Modal show={showEmailModal} onHide={() => {setShowEmailModal(false); setEmail('');}}>
        <Modal.Header closeButton>
          <Modal.Title>Update Email</Modal.Title>
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
          <Button variant="secondary" onClick={() => {setShowEmailModal(false);setEmail('');}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEmailSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Password Modal */}
      <Modal show={showPasswordModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
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
          <Button variant="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
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
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
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
          <Button variant="primary" onClick={() => setShowerrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CollegeProfile;
