import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
export default function StudentNav() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img
                src="images\lastEdit2.jpg"
                width="55"
                height="65"
                alt="not loaded"
                className="d-inline-block align-middle mr-2"
                style={{ boxShadow: "0px 0px 10px 0.2px #afb5be,0px 0px 1px" }}
              />
              <span className="sitename display-6">Adan Pradan</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#T"
              aria-controls="T"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="T">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/student" className="nav-link">
                    <b>H o m e</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/clickcollege" className="nav-link">
                    <b>C o l l e g e s</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/studfaq" className="nav-link">
                    <b>F A Q's</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/studcontact" className="nav-link">
                    <b>C o n t a c t &nbsp;&nbsp;u s</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/UserClickOnBooked" className="nav-link">
                    <b>B o o k e d</b>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ marginTop: "0.5rem", marginLeft: "0.2px" }}
                >
                  <div
                    className="dropdown"
                    style={{
                      backgroundColor: "transparent",
                      marginTop: "-1.1rem",
                    }}
                  >
                    <div
                      className="drop-trigger"
                      style={{ textDecoration: "none", marginLeft: "0.2px" }}
                    >
                      <b className="nav-link" style={{ fontWeight: "bold" }}>
                        P r o f i l e
                      </b>
                    </div>
                    <div
                      className="dropdown-content"
                      style={{
                        backgroundColor: "#ffc107",
                        marginLeft: "0.2px",
                      }}
                    >
                      <Link to="/tostudprofile" className="nav-link">
                        <b>Profile</b>
                      </Link>
                      <Link to="/updateuser " className="nav-link">
                        <b>Update Details</b>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* <Link to="/"> */}
                  <button
                    type="button"
                    className="button1 nav-link"
                    style={{ color: "black" }}
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      navigate("/");
                    }}
                  >
                    LOG &nbsp;OUT
                  </button>
                  {/* </Link> */}
                </li>

                {/* <li className="nav-item">
                  <Link to="/studentprofilepage">Profile</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
