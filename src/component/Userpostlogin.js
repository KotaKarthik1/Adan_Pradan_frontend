<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./Userpostlogin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CollegeCard from "./CollegeCard";
// import ImageUpload from "./ImageUpload";
import Loader from "./Loader";
function Userpostlogin() {
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  // let posts;
  // useEffect(() => {
  //     try {
  //       setloading(true);
  //       axios.get(
  //         "http://localhost:5031/AdanPradan/colleges/list"
  //       ).then((response) => {
  //         //console.log(response.data);
  //       //  const {posts}=response.data;
  //         //console.log(posts);
  //         // setClgs(posts);
  //         setData(response.data.post);
  //         const {post}=response.data;
  //         console.log(post);
  //         global.post=post;
  //         console.log(post);
  //         // console.log(response.data);
  //         // console.log(Data);
  //         setloading(false);
  //       });
  //       // const data = response.data.data;
  //       // console.log(response.data.posts);
  //       // setclgs(response.data.post);
  //       // console.log(Clgs);
  //       // setloading(false);
  //     } catch (error) {
  //       seterror(true);
  //       console.error("Error fetching data:", error);
  //       setloading(false);
  //     }

  // }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          "http://localhost:5031/AdanPradan/colleges/list"
        );
        setData(response.data.post); // Assuming response.data.post contains the array of colleges

        setloading(false);

        const shuffledData = shuffleArray(response.data.post);

        // Select unique titles and ensure at least three cards
        const uniqueTitles = new Set();
        const selectedCollege = [];
        for (const clg of shuffledData) {
          if (!uniqueTitles.has(clg.collegeName)) {
            uniqueTitles.add(clg.collegeName);
            selectedCollege.push(clg);

            if (selectedCollege.length >= 6) {
              break; // Ensure at least three cards
            }
          }
        }

        // If there are fewer than three unique titles, repeat the titles to reach three cards
        while (selectedCollege.length < 3 && shuffledData.length > 0) {
          const randomIndex = Math.floor(Math.random() * shuffledData.length);
          const randomWorkshop = shuffledData.splice(randomIndex, 1)[0];
          selectedCollege.push(randomWorkshop);
        }

        setData(selectedCollege);
      } catch (error) {
        seterror(true);
        console.error("Error fetching data:", error);
        setloading(false);
      }
    };
    fetchData();
    console.log(Data);
  }, []);

  return (
    <>
      <div className="container-expand thisbody">
        <div className="contanier pt-5 my-5">
          <div className="row display-1 heading1 c2">
            <p>Book your workshop now</p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            {loading ? (
              <h1>
                <Loader />
              </h1>
            ) : error ? (
              <h1>error</h1>
            ) : (
              Data.map((clg) => {
                return (
                  <div className="col-md-4 mt-2">
                    <CollegeCard clg={clg} />
                  </div>
                );
              })
            )}
            {/* <ImageUpload/> */}
          </div>
        </div>

        <div className="container wrappingDiv c1" id="C">
          <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
            <b>FAQ's</b>
          </div>
          <ul>
            <li>
              <h2>How can I book a slot?</h2>
            </li>
            <li>
              <h2>How can I book based on location?</h2>
            </li>
            <li>
              <h2>Who will receive me in college? </h2>
            </li>
            <Link to="/faq">
              <h3 style={{ color: "rgb(201, 44, 44)" }}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;view more{" "}
              </h3>
            </Link>
          </ul>
        </div>
      </div>

      <script>window.onload = function () {window.scrollTo(0, 0)};</script>
    </>
  );
}
export default Userpostlogin;
=======
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
>>>>>>> eead39944a4b0d839e9fe84b2d2492547468b01e
