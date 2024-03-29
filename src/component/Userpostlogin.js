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
          "https://adan-pradan-backend.onrender.com/AdanPradan/colleges/list"
        );
        setData(response.data.post); 

        setloading(false);

        const shuffledData = shuffleArray(response.data.post);
        const uniqueTitles = new Set();
        const selectedCollege = [];
        for (const clg of shuffledData) {
          if (!uniqueTitles.has(clg.collegeName)) {
            uniqueTitles.add(clg.collegeName);
            selectedCollege.push(clg);

            if (selectedCollege.length >= 6) {
              break; 
            }
          }
        }

      
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
  },[]);

  return (
    <>
      <div className="container-expand thisbody">
        <div className="contanier pt-4 my-5">
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


