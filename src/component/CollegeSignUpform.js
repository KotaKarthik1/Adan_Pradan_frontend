import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const CollegeSignUpform= () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
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
       window.location.href = "/success"; // Redirect to success page
      // setloading(false);
      // <Success/> // redirect to success component
    } catch (error) {
      setError(true);
      console.log(error);
    }finally{
      setloading(false);
    }
  };
  return (
    // <div>
    //   {loading ? (
    //     <Loader />
    //   ) : error ? (
    //     <Error />
    //   ) : (
    //     <div>
    //     <div>
    //     <div>
    //     <div className="container wrappingDiv" style={{border:"1px Solid gold",padding:"1cm",marginBottom:"1cm",marginTop:"2.7cm"}}>
    //       <div className="row tothemiddle ">
    //       <div className="col-12" style={{justifyContent:"center", display:"flex"}}>
    //       <div style={{justifyContent:"center",border:"3px Solid gold",padding:"1cm"}}>
    //       <h1 className="display-1 josephin">Signup</h1>
    //       <Link to="/signup"><p style={{color:"green", float:"right", marginTop:"4px"}}>Register as Student?</p></Link>
    //       <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <div className="row">
      //         <div className="col-4">
      //       <label>
      //         College Name:
      //         <input
      //           type="text"
      //           name="collegeName"
      //           value={user.collegeName}
      //           className="form-control"
      //           onChange={(e) =>
      //             setUser({ ...user, collegeName: e.target.value })
      //           }
      //         />
      //       </label>
      //       </div>
      //       <div className="col-5">
      //       <label>
      //         Email:
      //         <input
      //           type="email"
      //           name="email"
      //           value={user.email}
      //           className="form-control"
      // onChange={(e) =>
      //   setUser({ ...user, email: e.target.value })
      // }
      // required
      //         />
      //       </label>
      //       </div>
    //         </div>
    //         </div>
    //         {/* <div className="form-group"> */}
      //        <label>
      //         Email:
      //         <input
      //           type="email"
      //           name="email"
      //           value={user.email}
      //           className="form-control"
      // onChange={(e) =>
      //   setUser({ ...user, email: e.target.value })
      // }
      // required
      //         />
      //       </label> 
    //         {/* </div> */}
    //         <div className="form-group">
    //         <label>
    //           Password:
    //           <input
    //             type="password"
    //             name="password"
    //             value={user.password}
    //             className="form-control"
    //             onChange={(e) =>
    //               setUser({ ...user, password: e.target.value })
    //             }
    //             required
    //           />
    //         </label>
    //         </div>
    //         <div className="form-group">
    //         <label>
    //           Confirm Password:
    //           <input
    //             type="password"
    //             name="confirmpassword"
    //             value={confirmpassword}
    //             className="form-control"
    //             onChange={(e) =>
    //               setconfirmpassword(e.target.value)
    //             }
    //             required
    //           />
    //         </label>
    //         </div>
    //         <div className="form-group">
    //         <label>
    //           JntuCode:
    //           <input
    //             type="text"
    //             name="JntuCode"
    //             value={user.JntuCode}
    //             className="form-control"
    //             onChange={(e) =>
    //               setUser({ ...user, JntuCode: e.target.value })
    //             }
    //           />
    //         </label>
    //         </div>
    //         <div className="form-group">
    //         <label>
    //           Address:
    //           <input
    //             type="text"
    //             name="Address"
    //             value={user.Address}
    //             className="form-control"
    //             onChange={(e) =>
    //               setUser({ ...user, Address: e.target.value })
    //             }
    //           />
    //         </label>
    //         </div>
    //         <div className="form-group">
    //         <label>
    //           Website:
    //           <input
    //             type="text"
    //             name="website"
    //             value={user.website}
    //             className="form-control"
    //             onChange={(e) =>
    //               setUser({ ...user, website: e.target.value })
    //             }
    //           />
    //         </label>
    //         </div>
    //         <button className="btn" type="submit" style={{ backgroundColor: "green",color:"white", float:"left"}}>Signup</button>
    //       </form>
    //         <div className="container break">
    //           <div className="row">
    //       {/* <div className="col-6"> */}
    //     <Link to="/login"><button className="btn" type="submit" style={{ backgroundColor: "green",color:"white", float:"left",padding:"0px", marginTop:"4px"}}>Login</button></Link>
    //     {/* </div> */}
    //     </div>
    //     </div>
    //     </div>
    //       </div>
    //       </div>
    //       </div>
    //     </div>
    //     </div>
    //     </div>
    //   )}
    // </div>
    <div>
  {loading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <div>
      <div>
        <div>
          <div className="container wrappingDiv" style={{ border: "1px Solid gold", padding: "1cm", marginBottom: "1cm", marginTop: "2.7cm" }}>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8" style={{ border: "3px Solid gold", padding: "1cm" }}>
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
                  <button className="btn" type="submit" style={{ backgroundColor: "green", color: "white", float: "left" }}>Signup</button>
                </form>
                <div className="container break">
                  <div className="row">
                    <Link to="/loginupdate"><button className="btn" type="submit" style={{ backgroundColor: "green", color: "white", float: "left", padding: "0px", marginTop: "4px" }}>Login</button></Link>
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

export default CollegeSignUpform;



