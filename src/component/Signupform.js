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