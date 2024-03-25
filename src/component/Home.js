import React, { useEffect, useState } from "react";
import "./homepagestyles.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import Faq from "./Faq";
import Contact from "./Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
               <div id="A">

                    <div className="container-expand wrappingDiv">
                         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                              <div className="carousel-inner">
                                   <div className="carousel-item active">
                                        <img src="images\homepagephoto.jpg" alt="not loaded 1st item" className="img-fluid" />
                                   </div>    
                                   <div className="carousel-item">
                                        <img src="images\lastEedit1.jpg" alt="not loaded 2nd item" className="img-fluid" />
                                   </div>
                                   <div className="carousel-item">
                                        <img src="images\lastEdit2.jpg" alt="not loaded 2nd item" className="img-fluid" />
                                   </div>
                              </div>
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                   <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                   <span className="visually-hidden">Next</span>
                              </button>
                         </div>
                    </div>

                    <div className="container py-5 my-5 wrappingDiv">
                         <p className="display-4 josephin" style={{fontFamily:'josephin'}}><center>Can't do your lab work in home?</center></p>
                         {/* <h1 className="display-6 regstyle"><center><b>Register now</b></center></h1> */}
                    </div>
                    <div className="container pt-5 my-5 .wrappingDiv c1" >
                         <div className="display-4" style={{ color: "rgb(105, 58, 19)" }}><b>About us</b></div>
                         <p className="b1 display-6" style={{fontFamily:'Alegreya'}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Adan Pradan</b>
                         is a workshop management platform designed to streamline the process of organizing and attending workshops.
                          For colleges, it offers a comprehensive solution 
                         to efficiently manage workshop details, such as scheduling, participant registration, and tracking.
                         <br></br>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For students, Adan Pradan provides a user-friendly interface to explore various workshops,
                          register for those of interest, and receive updates and reminders. It simplifies the workshop experience, 
                          making it easier for students to engage with new learning opportunities and for colleges to manage 
                          and promote their workshops effectively.</p>
                    </div>
                    <div className="container-md my-5 pt-5 quick c1">
                         <div className="josephin"><h1>SIMPLE STEPS TO BOOK YOUR WORKSHOP</h1>
                              <br />
                         </div>
                         <div className="container">
                              <div className="row">
                                   <div className="col-4">
                                        <br />

                                        <img src="images\lastEdit4.jpg" alt="not loaded" className="img-fluid circle"  />
                                   </div>

                                   <div className="col-6">
                                        <div className="b1" ><h2>With a user-friendly interface, students can easily log in and browse through a variety of workshops available. They can choose workshops based on their interests or college-specific offerings. Once they find a workshop they like, they can easily book a spot by filling out a simple registration form.<br />
                                        </h2><br />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><br /><h2>What's more, students have the flexibility to cancel their workshop bookings if their plans change, giving them control and convenience. Adan Pradan aims to streamline the workshop booking process, making it hassle-free for students to explore and participate in various learning opportunities.</h2>
                                             <br />
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <img src="images\lastEdit5.jpg" alt="not loaded" className="img-fluid circle"  />
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-4">
                                        <img src="images\plaincolorblue.jpg" alt="not loaded" className="img-fluid circle" />
                                   </div>
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><br /><h2>College users can efficiently manage workshops through Adan Pradan.
                                              They can log in to view workshops booked by students, track bookings by date, and download lists for record-keeping. 
                                              The platform allows colleges to seamlessly add, cancel, or update workshops, ensuring smooth management of their workshop offerings.</h2><br />
                                             <br />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><h2><br />Additionally, when a workshop is deleted, student dashboards reflecting bookings for that workshop are automatically updated, maintaining accurate records.</h2>
                                             <br />
                                             <br />
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <img src="images\lastEdit4.jpg" alt="not loaded" className="img-fluid circle" />
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* <div className="container wrappingDiv c1" id="C">
                         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}><b>FAQ's</b></div>
                         <ul>
                              <li>< h2>How can I book a slot?</h2></li>
                              <li><h2>How can I book based on location?</h2></li>
                              <li><h2>Who will receive me in college? </h2></li>
                              <Link to="/faq"><h3 style={{ color: "rgb(201, 44, 44)" }}>&nbsp; 
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;view more </h3></Link>
                         </ul>

                    </div> */}
                    <Faq/>
                    {/* <div className="container wrappingDiv c1 p-5 my-5" id="D">
                         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
                              <b>Contact us</b></div>
                         <h2>Lorem ipsum dolor sit amet</h2>
                         <h2>Lorem ipsum dolor sit amet</h2>
                         <h2>Lorem ipsum dolor sit amet</h2>
                    </div> */}
                    <Contact/>
               </div>
        </>
      )}
    </>
  );
}

