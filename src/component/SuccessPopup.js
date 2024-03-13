import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <center><h6 style={{color:"green"}}>Booking successful!</h6></center>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessPopup;
