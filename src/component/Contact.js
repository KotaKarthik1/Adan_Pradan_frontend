
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
      //   <div className="container wrappingDiv p-5 my-5"
      //   style={{ boxShadow: "0px 0px 30px 0.01px #d3d7df,0px 0px 1px" }}
      // >
      //   <div className="display-6" style={{ color: "rgb(105, 58, 19)" }}>
      //     <b>Contact us</b>
      //   </div>
      //   <p className="display-7" style={{ display: 'inline-block' }}><b>Ph no:</b></p>
      //   <span className="dislpay-7" style={{ display: 'inline-block' }}>9999999999</span>
      //   <p className="display-7" style={{ display: 'inline-block2' }}><b>Email:</b></p>
      //   <span className="dislpay-7" style={{ display: 'inline-block2' }}>adanpradanHelpDesk@gmail.com</span>
      //   <p className="display-7" style={{ display: 'inline-block3' }}><b>Site Maintenance Address:</b></p>
      //   <span className="dislpay-7" style={{ display: 'inline-block3' }}>3-5-***,Narayanaguda,Hyderabad,Telangana</span>
      <div className="container wrappingDiv p-5 my-5" style={{ boxShadow: "0px 0px 30px 0.01px #d3d7df,0px 0px 1px" }}>
  <div className="display-4" style={{ color: "rgb(105, 58, 19)" }}>
    <b>Contact us</b>
  </div>
  <div className="row">
    <div className="col-2">
        <p className="display-7"><b>Ph no:</b></p>
    </div>
    <div className="col-2">
        <p>9191919191</p>
    </div>
    </div>
    <div className="row">
    <div className="col-2">
        <p className="display-7"><b>Email:</b></p>
    </div>
    <div className="col-2">
        <p>adanpradanHelpDesk@email.com</p>
    </div>
    </div>
    <div className="row">
    <div className="col-2">
        <p className="display-7"><b>Site Maintenance Address:</b></p>
    </div>
    <div className="col-4">
        <p>3-5-***,Narayanaguda,Hyderabad,Telangana</p>
    </div>
    </div>
</div>
      )}
    </>
  );
}

