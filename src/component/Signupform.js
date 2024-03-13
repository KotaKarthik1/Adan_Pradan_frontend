<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
import "./Signupform.css";
const Signup = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
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
      await axios.post("http://localhost:5031/AdanPradan/register", user);
      setloading(false);
       window.location.href = "/success"; // Redirect to success page
      // setloading(false);
      // <Success/> // redirect to success component
    } catch (error) {
      setError(true);
      console.log(error);
      setloading(false);
    }
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (user.password !== user.confirmpassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }
  //   try {
  //     setloading(true);
  //     await axios.post("http://localhost:5031/AdanPradan/register", user);
  //     setloading(false); // Set loading to false on successful submission
  //     window.location.href = "/student"; // Redirect to success page
  //   } catch (error) {
  //     setError(true);
  //     console.log(error);
  //     setloading(false); // Set loading to false on error
  //   }
  // };
  

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
        <div className="container wrappingDiv" style={{border:"1px Solid gold",padding:"1cm",marginBottom:"1cm",marginTop:"2.7cm"}}>
          <div className="row tothemiddle " >
            {/* <div style={{justifyContent}} */}
            <div className="col-12" style={{justifyContent:"center", display:"flex"}}>
              <div style={{justifyContent:"center",border:"3px Solid gold",padding:"1cm"}}>
          <h1 className="display-1 josephin">Signup</h1>
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
            <button className="btn" type="submit" style={{ backgroundColor: "green",color:"white", float:"left"}}>Signup</button>
          </form>
          <div className='container break'>
            <br/>
            <div className="row">
              <div className="col-12">
        <Link to="/clgsingnUp"><button className="btn" style={{fontSize: "0.8rem",width:"100px",backgroundColor: "green",color:"white", margin:"5px", float:"left"}}>Register college</button></Link>
        <Link to="/Login"><button className="btn" style={{ width:"100px",backgroundColor: "green", color: "white", float:"right",margin:"5px"}}>Login</button></Link>
        </div>
        </div>
        </div>
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
=======
import React from "react";
import { Link } from "react-router-dom";
import "./Signupform.css";
function Signupform(){
    return(
        <>
        
        <div className="container wrappingDiv boxing p-5">
        <div className="container p-5">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Username</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Your name "/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">College Name</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter college name"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Date Of birth </label>
                        <input type="text" className="form-control" id="inputDateofBirth" placeholder="(DD/MM/YYYY)"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Location</label>
<select id="inputLocation" name="inputLocation">
  <option value="Narayaguda">Narayaguda</option>
  <option value="Uppal">Uppal</option>
  <option value="LB nagar">LB nagar</option>
  <option value="Dilshuk nagar">Dilshuk nagar</option>
</select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                <Link to="/login"><button type="submit" className="btn signinbutton">Sign in</button></Link>
            </form>
        </div>
    </div>
    window.onload = function () {
            window.scrollTo(0, 0)
            };
    </>
    )
}
export default Signupform;
>>>>>>> eead39944a4b0d839e9fe84b2d2492547468b01e
