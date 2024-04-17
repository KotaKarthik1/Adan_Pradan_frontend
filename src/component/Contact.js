import React, { useEffect, useState } from "react";
import "./homepagestyles.css";
import "./Contact.css";
import Loader from "./Loader";
import Error from "./Error";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

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
        <div className="container-flex wrappingDiv my-5 p-5" style={{ boxShadow: "0px 0px 30px 0.01px #d3d7df,0px 0px 1px", background: "#f2e1ae",display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        height: '60vh'}}>
  <div className="display-4" style={{ color: "rgb(224, 101, 0)", justifyContent: 'center' }}>
    <b>Contact us</b>
  </div>
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6">
      <p className="display-7" style={{ color: 'black' }}><b>Ph no:</b></p>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6">
      <p style={{ color: 'rgba(48, 48, 48, 0.737)' }}>9191919191</p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6">
      <p className="display-7" style={{ color: 'black' }}><b>Email:</b></p>
    </div>
    <div className="col-lg-9 col-md-8 col-sm-6">
      <p className="responsiveemail" style={{ color: 'rgba(48, 48, 48, 0.737)' }}>adanpradanHelpDesk@gmail.com</p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6">
      <p className="display-7" style={{ color: 'black' }}><b>Site Maintenance Address:</b></p>
    </div>
    <div className="col-lg-9 col-md-8 col-sm-6">
      <p className="responsiveaddress" style={{ color: 'rgba(48, 48, 48, 0.737)' }}>3-45,Narayanaguda,Hyderabad,Telangana</p>
    </div>
  </div>
</div>
      )}
    </>
  );
}
