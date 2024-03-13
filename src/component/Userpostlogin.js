import React from "react";
import "./Userpostlogin.css";
import { Link } from "react-router-dom";
function Userpostlogin() {
    return (
        <>
            <div className="container-expand ">
                <div className="contanier pt-5 my-5" >
                    <div className="row display-1 heading1 c2">
                        <p>Book your workshop now</p>
                    </div>
                    <div className="searchbuttonfill">
                        <Link to="/search"><button className="searchbutton">Search</button></Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row row1">
                        <div className="col-7 box1">
                            <ul style={{listStyleType:"none"}}>
                                <li>
                                    <h1 style={{color:"brown" ,fontFamily:"Urbanist, sans-serif"}}>Most popular workshops</h1>
                                    <h2>&nbsp;Chemistry lab</h2>
                                </li>
                                <li>
                                    <h2>&nbsp;Artificial Intelligence lab</h2>
                                </li>
                                <li>
                                    <h2>&nbsp;Block Chain Technology Lab</h2>
                                </li>
                                <li>
                                    <h2>&nbsp;Basic Electrical Engineering lab</h2>
                                </li>
                                <li>
                                    <h2>&nbsp;Python lab</h2>
                                </li>
                                <li>
                                    <h2>&nbsp;Engineering Workshop</h2>
                                </li>
                                <Link to="/clickcollege"><h4 href="#" style={{textAlign:"end" ,color:"brown"}} >view more</h4></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-md my-5 pt-5 quick">
                <div className="josephin" style={{color:"rgb(39, 51, 4)"}}><h1>SIMPLE STEPS TO BOOK YOUR WORKSHOP</h1>
                    <br />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <br/>
                                <img src="images\lastEdit4.jpg" alt="not loaded" className="circle img-fluid"/>
                                </div>

                                <div className="col-8">
                                    <div className="b1"><h2>Lorem ipsum dolor sit amet,  ipsa tempore eum porro consectetur expedita neque minima, magnam culpa architecto libero quas.<br />
                                    </h2><br />
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <br />
                                <div className="b1"><br /><h2>Lorem ipsum dolor sit amet, consecteturnda minus laboriosam ipsa tempore eum porro consectetur expedita neque minima, magnam culpa architecto libero quas.</h2>
                                    <br />
                                </div>
                            </div>
                            <div className="col-4">
                                <img src="images\lastEdit5.jpg" alt="not loaded" className="circle img-fluid" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="images\Paincolorblue.jpg" alt="not loaded" className="circle img-fluid" />
                            </div>
                            <div className="col-8">
                                <br />
                                <div className="b1"><br /><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic obcaeca quas.</h2><br/>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <br />
                                <div className="b1"><h2><b>Lorem ipsum dolor sit amet, consectetur adipisicing elitetur expedita neque minima, magnam culpa architecto libero quas.</b></h2><br/>
                                    <br />
                                </div>
                            </div>
                            <div className="col-4">
                                <img src="images\lastEdit4.jpg" alt="not loaded" className="circle img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container wrappingDiv c1" id="C">
                         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}><b>FAQ's</b></div>
                         <ul>
                              <li>< h2>How can I book a slot?</h2></li>
                              <li><h2>How can I book based on location?</h2></li>
                              <li><h2>Who will receive me in college? </h2></li>
                              <Link to="/faq"><h3 style={{ color: "rgb(201, 44, 44)" }}>&nbsp; 
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;view more </h3></Link>
                         </ul>

                    </div>
                <div className="container wrappingDiv c1 p-5 my-5" id="D">
                    <center><div className="display-2" style={{color:"rgb(105, 58, 19)"}}><b>Contact us</b></div></center>
                    <center><h2>Lorem ipsum dolor sit amet</h2></center>
                    <center><h2>Lorem ipsum dolor sit amet</h2></center>
                    <center><h2>Lorem ipsum dolor sit amet</h2></center>
                </div>
            
            <script>
            window.onload = function () {
            window.scrollTo(0, 0)
            };
            </script>
            </>
            )
}
 export default Userpostlogin;