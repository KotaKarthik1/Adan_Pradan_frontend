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
            <h1 className="h1forcollegecode">CollegeCode: {clg.JntuCode}</h1>
            <p className="rubik-maps-regular">Website: {clg.website}</p>
            <p className="rubik-maps-regular">Area: {clg.Address}</p>
            <Link to={`/bookform/${clg._id}`}>
              <button
              className=" buttonforcollegecard"
                type="button"
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
