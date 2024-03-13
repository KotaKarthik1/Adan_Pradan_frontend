import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="wrappingDiv">
      <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <Link to="/Login">
        <button className="btn" style={{marginBottom:'5px'}}>Click here Login</button>
      </Link>
    </div>
  );
}

export default Success;
