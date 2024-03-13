import React from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css"
function Loginpage() {
  return (
    <>
      <div className="container wrappingDiv bck">
        <div className="row">
          <div className="col-4 tothemiddle">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control buttons" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control buttons" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <div className="container break">
                
                <Link to="/student"><button type="submit" className="btn" style={{ backgroundColor: "gold",width:"120px" }}>LogIn as student</button></Link>
                <br />
                <Link to="/college"><button type="submit" className="btn" style={{ backgroundColor: "gold",width:"120px" }}>LogIn as college</button></Link>
              </div>
              <br/>
              <Link to="/signup"><button className="btn" style={{ backgroundColor: "green", color: "white" }}>Register</button></Link>
            </form>
          </div>
          <div className="col-6">
             <div className="image-container">
                 <img src="images\computerphotoOrg.jpg" className="image-fluid sidephoto" alt="not loaded" />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Loginpage;