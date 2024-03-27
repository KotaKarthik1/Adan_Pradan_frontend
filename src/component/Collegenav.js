import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

export default function Collegenav() {
    const { logout } = useAuth();
    const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top">
          <Link to="/college" className="navbar-brand">
            <img
              src="images\Adan_Pradan_logo.jpeg"
              width="45"
              height="45"
              alt=""
              className="d-inline-block align-middle mr-2"
              style={{ borderRadius: "50%",boxShadow: "0px 0px 10px 0.2px #afb5be,0px 0px 1px" }}
            />
            <span className="sitename display-6">Adan Pradan</span>
          </Link>
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
                <Link to="/college" className="nav-link">
                  <b>H o m e</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/collegebookings" className="nav-link">
                  <b>B o o k e d</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/collegeUpdate" className="nav-link">
                  <b>U p d a t e s</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  {/* <button
                    type="button"
                    onClick={logouthandler}
                    className="button1"
                  >
                    LOG - OUT
                  </button>
                   */}
                    <button type="button" className="buttonclgnav"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      navigate("/");
                    }}>
                      LOG &nbsp;OUT
                    </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <script>window.onload = function () {window.scrollTo(0, 0)};</script>
    </div>
  );
                  }