import React from "react";
import { Link } from "react-router-dom"; 
function Navbar(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <div href="#" className="navbar-brand">
            <Link to="/">
  <img
    src="images\Adan_Pradan_logo.jpeg"
    width="65"
    height="65"
    style={{
      borderRadius: "50%", // Use 50% for a circular shape
      boxShadow: "0px 0px 10px 0.2px #afb5be, 0px 0px 1px",
    }}
    alt="not loaded"
    className="d-inline-block align-middle mr-2"
  />
</Link>

              <Link to="/"><span className="sitename display-6" style={{color:"black"}}>Adan Pradan</span></Link>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#T" aria-controls="T" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>  
          </button>
          <div className="navbar-collapse collapse" id="T">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"><b>H o m e</b></Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq"><b>F A Q's</b></Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><b>C o n t a c t- u s</b></Link></li>
              <li className="nav-item">
                <Link to="/Login"><button type="button" className="button1">LOG - IN</button></Link>
              </li>
          </ul>
        </div>
    </div>
      </nav>
      </div>
      
    );
}
export default Navbar;