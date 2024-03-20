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


