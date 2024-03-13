import React from 'react'
import { Link } from 'react-router-dom'
export default function StudentNav() {
    return (
        <>
        <div>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a href="#" className="navbar-brand">
              <img src="images\lastEdit2.jpg" width="55" height="65" alt="not loaded" className="d-inline-block align-middle mr-2" style={{boxShadow:"0px 0px 10px 0.2px #afb5be,0px 0px 1px"}}/>
              <span className="sitename display-6">Adan Pradan</span>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#T" aria-controls="T" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>  
          </button>
          <div className="navbar-collapse collapse" id="T">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/student" className="nav-link"><b>H o m e</b></Link></li>
              <li className="nav-item">
                <Link to="/clickcollege" className="nav-link"><b>C o l l e g e s</b></Link></li>
            <li className="nav-item">
              <Link to="/studfaq" className="nav-link"><b>F A Q's</b></Link></li>
             <li className="nav-item">
              <Link to="/studcontact" className="nav-link"><b>C o n t a c t &nbsp;&nbsp;u s</b></Link></li> 
              <li className="nav-item">
                <a className="nav-link" href="#E"><b>B O O K E D</b></a>
              </li>
              <li className="nav-item">
                <Link to="/"><button type="button" className="button1">LOG &nbsp;OUT</button>
              </Link>
              </li>
          </ul>
        </div>
    </div>
    </nav>
        </div>
        </>
    )
}
