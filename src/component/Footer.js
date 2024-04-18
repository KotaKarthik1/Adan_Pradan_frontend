import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer style={{ position: "fixed-bottom", bottom: "0px",background:"#ffe8a3"}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3">
            <div>
              <p className="display-1 border p-5">Aadan Pradan</p>
              
            </div>
          </div>
          <div className="col-xl-3 fu">
            <div className="pt-5">
              <h4>Useful links</h4>
              <ul>
                <li>
                  <a href="#C" className="a1">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#A" className="a1">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 pt-5 fu ">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#" className="a1 responsiveemailfooter">
                  aadanpradan@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="a1">
                  9191919191
                </a>
              </li>
            </ul>
            <h4>Address</h4>
            <p className="responsiveaddressfooter">3-**,Narayanaguda,Hyderabad,Telangana</p>
          </div>
<div className="col-xl-3">
      <div className="fu pt-5">
        <h4>Follow Us</h4>
        <div className="social container">
          <div className="row">
          <div className="col-4">
            <a href="https://github.com/KotaKarthik1/Adan_Pradan_frontend.git">
              <FaGithub size={30}/>
            <p>Frontend</p> </a>
          </div>
          <div className="col-4">
            <a href="https://github.com/KotaKarthik1/Adan_Pradan_backend.git">
              <FaGithub size={30}/>
            <p>Backend</p>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>

        </div>
        <div className="d-flex justify-content-center">
          <div className="copyright">
            <p>&copy;aadanpradan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
