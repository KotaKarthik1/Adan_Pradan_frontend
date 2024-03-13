<<<<<<< HEAD
// import React from "react";
// import "./Contact.css"
// function Contact(){
//     return(
//         <>
// <div className="container wrappingDiv p-5 my-5" style={{ boxShadow:"0px 0px 30px 0.01px #d3d7df,0px 0px 1px"}}>
//                  <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}><b>Contact us</b></div>
//                  <h2>Lorem ipsum dolor sit amet</h2>
//                  <h2>Lorem ipsum dolor sit amet</h2>
//                  <h2>Lorem ipsum dolor sit amet</h2>
//             </div>

//         </>
//     )
// }
// export default Contact;
import React, { useEffect, useState } from "react";
import "./homepagestyles.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Perform your data fetching or asynchronous operations here
        // For demonstration, I'll simulate loading for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 100));
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
        <div
          className="container wrappingDiv p-5 my-5"
          style={{ boxShadow: "0px 0px 30px 0.01px #d3d7df,0px 0px 1px" }}
        >
          <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
            <b>Contact us</b>
          </div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <h2>Lorem ipsum dolor sit amet</h2>
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
      )}
    </>
  );
}
=======
import React from "react";
import "./Contact.css"
function Contact(){
    return(
        <>
        <div className="container wrappingDiv p-5 my-5" style={{ boxShadow:"0px 0px 30px 0.01px #d3d7df,0px 0px 1px"}}>
                         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}><b>Contact us</b></div>
                         <h2>Lorem ipsum dolor sit amet</h2>
                         <h2>Lorem ipsum dolor sit amet</h2>
                         <h2>Lorem ipsum dolor sit amet</h2>
                    </div>
                    
        </>
    )
}
export default Contact;
>>>>>>> eead39944a4b0d839e9fe84b2d2492547468b01e
