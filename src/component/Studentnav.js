import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
import "./Studentnav.css";
export default function StudentNav() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [navClose, setNavClose] = useState(window.innerWidth > 991 ? false : true);

  function handleNavClose() {
    if(window.innerWidth<=991)
    {
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

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img
                src="images\Adan_Pradan_logo.jpeg"
                width="45"
                height="45"
                alt="not loaded"
                className="d-inline-block align-middle mr-2"
                style={{borderRadius: "50%", boxShadow: "rgb(175, 181, 190) 0px 0px 3px 0.1px, inset 0px 0px 0px 0px" }}
              />
              <span className="sitename display-6">Adan Pradan</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#T" aria-controls="T" aria-expanded={!navClose ? true : false} aria-label="Toggle navigation" onClick={handleNavClose}>
              {/* <span className="navbar-toggler-icon"></span> */}
              {navClose ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span className="closingcustom" style={{fontSize:"40px"}}>&times;</span>
            )}
            </button>
            <div className={`${navClose ? 'collapse' : ''} navbar-collapse`} id="T" style={{ transition: 'height 0.5s ease-in-out', maxHeight: navClose ? '0' : '100vh', overflow: 'hidden' }}>
              <ul className="navbar-nav ms-auto mb-2 mb-md-0" onClick={handleNavClose}>
                <li className="nav-item">
                  <Link to="/student" className="nav-link" style={{ whiteSpace: "nowrap" }}>
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/clickcollege" className="nav-link" style={{ whiteSpace: "nowrap" }}>
                    <b>Colleges</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/studfaq" className="nav-link" style={{ whiteSpace: "nowrap" }}>
                    <b>FAQ's</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/studcontact" className="nav-link" style={{ whiteSpace: "nowrap" }}>
                    <b>Contact &nbsp;&nbsp;us</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/UserClickOnBooked" className="nav-link" style={{ whiteSpace: "nowrap" }}>
                    <b>Booked</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tostudprofile" className="nav-link" style={{ whiteSpace: "nowrap" }}>
                    <b>Profile</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link buttonstudnav"
                    style={{ color: "black" }}
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
