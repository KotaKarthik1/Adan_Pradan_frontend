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
        await new Promise((resolve) => setTimeout(resolve, 1000));
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
        <div className="container wrappingDiv p-5 my-5" style={{ boxShadow: "0px 0px 30px 0.01px #d3d7df,0px 0px 1px" }}>
          <div className="display-4" style={{ color: "rgb(105, 58, 19)" }}>
            <b>Contact us</b>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <p className="display-7"><b>Ph no:</b></p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <p>9191919191</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <p className="display-7"><b>Email:</b></p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <p>adanpradanHelpDesk@email.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <p className="display-7"><b>Site Maintenance Address:</b></p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <p>3-5-***,Narayanaguda,Hyderabad,Telangana</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
