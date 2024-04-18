import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
// import Success from "./Success";
import "./Signupform.css";
const Signup = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    collegeName: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.password !== user.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      setloading(true);
      console.log("em roo ber")
      await axios.post("https://adan-pradan-backend.onrender.com/AdanPradan/register", user);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        window.location.href = "/loginupdate"; // Redirect to login page
      }, 2500);

      setloading(false);
    //  write code here
    } catch (error) {
      setError(true);
      console.log(error);
    }finally{
      setloading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
        <div>
        <div>
        <div className="container-fluid wrappingDiv" style={{border:"1px Solid gold",padding:"1cm",marginBottom:"1cm",marginTop:"2cm",background: 'linear-gradient(180deg, #f2e1ae, rgba(15, 15, 16, 0))'}}>
          <div className="row tothemiddle "  >
            {/* <div style={{justifyContent}} */}
            <div className="col-12" style={{justifyContent:"center", display:"flex"}}>
              <div style={{background: 'linear-gradient(180deg, #f2e1ae, rgba(15, 15, 16, 0))',justifyContent:"center",border:"1px Solid BLACK",padding:"1cm"}}>
          <h1 className="display-1 josephin">Signup</h1>
          <Link to="/clgsingnUp"><p className="display-7"style={{color:"green", margin:"5px", float:"right"}}>Register as college?</p></Link>
          <form onSubmit={handleSubmit} >
          <div className="form-group">
            
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={user.name}
                className="form-control"
                onChange={handleChange}
              />
            </label>
            </div>
            <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                className="form-control"
                onChange={handleChange}
              />
            </label>
            </div>
            <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={user.password}
                className="form-control"
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <div className="form-group">
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmpassword"
                value={user.confirmpassword}
                className="form-control"
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <div className="form-group">
            <label>
              College:
              <input
                type="text"
                name="collegeName"
                value={user.collegeName}
                className="form-control"
                onChange={handleChange}
              />
            </label>
            </div>
            
            <button type="submit" className="btn"  style={{ backgroundColor: "green",color:"white", float:"left",width:'10vh'}} disabled={loading}>
    {loading ? (
      <div className="d-flex align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    ) : (
      'SignUp'
    )}
  </button>
  <Link to="/Loginupdate"><button className="btn" style={{ width:"9vh",backgroundColor: "green", color: "white", float:"right",}}>Login</button></Link>
          </form>
          {/* <div className='container break'>
            <br/>
            <div className="row">
              <div className="col-12">
         <Link to="/Loginupdate"><button className="btn" style={{ width:"100px",backgroundColor: "green", color: "white", float:"right",margin:"5px"}}>Login</button></Link> 
        </div>
        </div>
        </div> */}
        {showSuccess && (
                    <div className="alert alert-success" role="alert" style={{ marginTop: "1rem" }}>
                      Signup successful! Redirecting to login page...
                    </div>
                  )}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
