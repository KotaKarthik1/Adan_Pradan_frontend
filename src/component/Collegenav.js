import {React,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

export default function Collegenav() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [navClose, setNavClose] = useState(window.innerWidth > 991 ? false : true);

  function handleNavClose() {
    if (window.innerWidth <= 991){
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
              style={{ borderRadius: "50%",boxShadow: "rgb(175, 181, 190) 0px 0px 3px 0.1px, inset 0px 0px 0px 0px" }}
            />
            <span className="sitename display-6">Adan Pradan</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#T" aria-controls="T" aria-expanded={!navClose ? true : false} aria-label="Toggle navigation" onClick={handleNavClose}>
          {navClose ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span className="closingcustom" style={{fontSize:"40px"}}>&times;</span>
            )}
          </button>
          <div className={`${navClose ? 'collapse' : ''} navbar-collapse`} id="T" style={{ transition: 'height 0.5s ease-in-out', maxHeight: navClose ? '0' : '100vh', overflow: 'hidden' }}>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0" onClick={handleNavClose}>
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