import React from "react";
import "./collegecard.css";
import { Link } from "react-router-dom";
function CollegeCard(props) {
  const { clg } = props;
  return (
    <div className="row">
      {/* <div className='col-md' > */}
      <div className="card-container bs">
        <div className="mb-4 textalign">
          <b>
            <h1>CollegeCode: {clg.JntuCode}</h1>
            <p>Website: {clg.website}</p>
            <p>Area: {clg.Address}</p>
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
    </div>
  );
}

export default CollegeCard;
