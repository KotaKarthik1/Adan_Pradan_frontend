import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
const CollegeSignUpform= () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [success,setShowSuccess]= useState(false);
  const [user, setUser] = useState({
    collegeName:"",
    email: "",
    password: "",
    JntuCode:"",
    Address:"",
    website:"",
  });
  const [confirmpassword,setconfirmpassword]=useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      setloading(true);
      await axios.post("https://adan-pradan-backend.onrender.com/AdanPradan/registerclg", user);
      setloading(false);
      setShowSuccess(true);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        window.location.href = "/loginupdate2"; // Redirect to login page
      }, 2500);
      setloading(false);
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
          <div className="container-fluid wrappingDiv" style={{background: 'linear-gradient(180deg, #f2e1ae, rgba(15, 15, 16, 0))', border: "1px Solid gold", padding: "1cm", marginBottom: "1cm", marginTop: "2cm" }}>
            <div className="row justify-content-center">
              <div className="col-12 col-md-4" style={{background: 'linear-gradient(180deg, #f2e1ae, rgba(15, 15, 16, 0))', border: "1px Solid black", padding: "1cm" }}>
                <h1 className="display-1 josephin text-center">Signup</h1>
                <Link to="/signup"><p style={{ color: "green", float: "right", marginTop: "4px" }}>Register Student?</p></Link>
                <form onSubmit={handleSubmit}> 
                  <div className="form-group">
                    <label>College Name:</label>
                    <input
                      type="text"
                      name="collegeName"
                      value={user.collegeName}
                      className="form-control"
                      onChange={(e) =>
                        setUser({ ...user, collegeName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      className="form-control"
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      className="form-control"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                      type="password"
                      name="confirmpassword"
                      value={confirmpassword}
                      className="form-control"
                      onChange={(e) =>
                        setconfirmpassword(e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>JntuCode:</label>
                    <input
                      type="text"
                      name="JntuCode"
                      value={user.JntuCode}
                      className="form-control"
                      onChange={(e) =>
                        setUser({ ...user, JntuCode: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      type="text"
                      name="Address"
                      value={user.Address}
                      className="form-control"
                      onChange={(e) =>
                        setUser({ ...user, Address: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Website:</label>
                    <input
                      type="text"
                      name="website"
                      value={user.website}
                      className="form-control"
                      onChange={(e) =>
                        setUser({ ...user, website: e.target.value })
                      }
                    />
                  </div>
                  <button className="btn" type="submit" style={{ backgroundColor: "green", color: "white", float: "left",width:'10vh' }}>Signup</button>
                  <Link to="/loginupdate"><button className="btn" type="submit" style={{ backgroundColor: "green", color: "white", float: "right", padding: "0px",width:'9vh' }}>Login</button></Link>
                  
                </form>
                 {success && (
                    <div className="alert alert-success" role="alert" style={{ marginTop: "1rem" }}>
                      Signup successful! Redirecting to login page...
                    </div>
                  )}
                {/* <div className="container break">
                  <div className="row">
                    <Link to="/loginupdate"><button className="btn" type="submit" style={{ backgroundColor: "green", color: "white", float: "right", padding: "0px" }}>Login</button></Link>
                  </div>
                </div> */}
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

export default CollegeSignUpform;



