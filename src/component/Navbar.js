import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function Navbar(){
  const [navClose, setNavClose] = useState(window.innerWidth > 991 ? false : true);

  function handleNavClose() {
    if (window.innerWidth <= 991) {
      setNavClose(!navClose);
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 991) {
        setNavClose(false);
      } else {
        setNavClose(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div href="#" className="navbar-brand">
            <Link to="/">
              <img
                src="images\Adan_Pradan_logo.jpeg"
                width="45"
                height="45"
                style={{
                  borderRadius: "50%", 
                  boxShadow: "rgb(175, 181, 190) 0px 0px 3px 0.1px, inset 0px 0px 0px 0px",
                }}
                alt="not loaded"
                className="d-inline-block align-middle mr-2"
              />
            </Link>
            <Link to="/"><span className="sitename display-6" style={{color:"black"}}>Adan Pradan</span></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#T" aria-controls="T" aria-expanded={!navClose ? true : false} aria-label="Toggle navigation" onClick={handleNavClose}>
            <span className="navbar-toggler-icon"></span>  
          </button>
          <div className={`${navClose ? 'collapse' : ''} navbar-collapse`} id="T" style={{ transition: 'height 0.5s ease-in-out', maxHeight: navClose ? '0' : '100vh', overflow: 'hidden' }}>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0" onClick={handleNavClose}>
              <li className="nav-item">
                <Link className="nav-link" to="/"><b>H o m e</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq"><b>F A Q's</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact"><b>C o n t a c t- u s</b></Link>
              </li>
              <li className="nav-item">
                <Link to="/loginupdate"><button type="button" className="button1">LOG - IN</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
