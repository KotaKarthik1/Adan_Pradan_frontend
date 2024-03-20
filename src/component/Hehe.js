import React, { useState } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";
import './hehe.css';
export default function Hehe() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
    <div className="se1">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid" style={{ backgroundColor: 'rgb(31, 174, 31)' }}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" style={{ color: 'white' }}>
                                        <b>
                                            <h5 style={{ marginTop: '0.8rem' }}>Home</h5>
                                        </b>
                                    </a>
                                </li>
                                <div className="vln"></div>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" style={{ color: 'white' }}>
                                        <b>
                                            <h5 style={{ marginTop: '0.8rem' }}>About</h5>
                                        </b>
                                    </a>
                                </li>
                                <div className="vln"></div>
                                <li className="nav-item" style={{ marginTop: '0.5rem' }}>
                                    <div className="dropdown" style={{ backgroundColor:"transparent" }}>
                                        <span className="drop-trigger" style={{ textDecoration: 'none', top: '50%' }}>
                                            <h5 style={{ color: 'white', marginTop: '0.8rem' }}><b style={{ top: '50%' }}>Our courses</b></h5>
                                        </span>
                                        <div className="dropdown-content" style={{ backgroundColor: '#4CAF50' }}>
                                            <a href="#">Option 1</a>
                                            <a href="#">Option 2</a>
                                            <a href="#">Option 3</a>
                                        </div>
                                    </div>
                                </li>
                                
                                <div className="vln"></div>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" style={{ color: 'white' }}>
                                        <b>
                                            <h5 style={{ marginTop: '0.8rem' }}>Contact</h5>
                                        </b>
                                    </a>
                                </li>
                                <div className="vln"></div>
                                <li className="nav-item" style={{ marginTop: '0.5rem' }}>
                                    <div className="dropdown"style={{ backgroundColor:"transparent", marginTop:"-1.5rem"}}>
                                        <span className="drop-trigger" style={{ textDecoration: 'none', top: '50%' }}>
                                            <h5 style={{ color: 'white', marginTop: '0.8rem' }}><b style={{ top: '50%' }}>Pages</b></h5>
                                        </span>
                                        <div className="dropdown-content" style={{ backgroundColor: '#4CAF50' }}>
                                            <a href="#">Option 1</a>
                                            <a href="#">Option 2</a>
                                            <a href="#">Option 3</a>
                                        </div>
                                    </div>
                                </li>
                               
                                <div className="vln"></div>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" style={{ color: 'white' }}>
                                        <b>
                                            <h5 style={{ marginTop: '0.8rem' }}>Gallery</h5>
                                        </b>
                                    </a>
                                </li>
                                <li className="nav-item- px-lg-4" style={{ width: '10rem' }}>
                                    <div className="container" style={{ backgroundColor: '#4CAF50', width: '22rem', height: '100%' }}>
                                        <div className="row">
                                            <div className="col-4" style={{ backgroundColor: 'rgb(146, 255, 136)55, 255' }}>
                                                <input type="text" placeholder="Search...!" name="search"
                                                    style={{ width: '20rem', height: '3rem', backgroundColor: '#4CAF50', color: '#ffffff' }}
                                                    className="seatet"></input>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </>
  );
}
