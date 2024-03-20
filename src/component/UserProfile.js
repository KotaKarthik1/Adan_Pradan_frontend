import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Modal, Button, Form } from "react-bootstrap";
import './Profile.css';

function UserProfile() {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5031/AdanPradan/std/list/${user_id}`
        );
        setData(response.data.data);
        console.log(response.data.data.name);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function updatecolleges(userid) {
    try {
      const response = axios.patch(
        `http://localhost:5031/AdanPradan/std/list/update/${userid}`
      );
      setData(response.data.data);
      console.log("data updated ");
      console.log(response.data.data);
      // setUpdateSuccess(true);
      // setShowSuccessModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  const buttonStyle = {
    backgroundColor: 'gold',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5031/AdanPradan/std/updateemail/${user_id}`,
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
        console.error("Passwords do not match");
        return;
      }
      const response = await axios.patch(
        `http://localhost:5031/AdanPradan/std/updatepassword/${user_id}`,
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
    <div>
      <div>
        <div className="container wrappingDiv setthebox" style={containerStyle}>
          <h1 style={{ color: 'green' }}>Student Data:</h1>
          <h1>{data.name}</h1>
          <h1>{data.collegeName}</h1>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
            Update Details
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" onClick={() => setShowEmailModal(true)}>Update Email</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={() => setShowPasswordModal(true)}>Update Password</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* Email Modal */}
      <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)}>
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
          <Button variant="secondary" onClick={() => setShowEmailModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEmailSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Password Modal */}
      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
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
    </div>
  );
}

export default UserProfile;
