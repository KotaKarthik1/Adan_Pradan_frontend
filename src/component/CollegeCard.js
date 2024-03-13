import React, { useState, useEffect } from "react";
import "./collegecard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function CollegeCard(props) {
  const { clg } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <div>
    //   <div className='card-container bs'>
    //     {/* <div className='col-md-4'>
    //       <h1>{clg.images.length}</h1>
    //       <img src={clg.images[1]} className='smallimg' alt='College Image' />
    //     </div> */}
    //     <div className='col-md-4 mb-4 textalign'>
    //       <b>
    //       <h1>CollegeCode:{clg.collegeName}</h1>
    //       <p>Website: {clg.JntuCode}</p>
    //       <p>Area:{clg.Address}</p>
    //       </b>
    //       {/* <div style={{float:'right'}}>
    //         <button className='btn btn-primary' onClick={handleShow}>Details</button>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    <div className="row">
      {/* <div className='col-md' > */}
      <div className="card-container bs">
        <div className="mb-4 textalign">
          <b>
            <h1>CollegeCode: {clg.collegeName}</h1>
            <p>Website: {clg.JntuCode}</p>
            <p>Area: {clg.website}</p>
            <Link to={`/bookform/${clg._id}`}>
              <button
                type="button"
                style={{
                  display: "flex",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  marginLeft: "30px",
                  whiteSpace: "nowrap",
                }}
              >
                Book
              </button>
            </Link>
          </b>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default CollegeCard;
