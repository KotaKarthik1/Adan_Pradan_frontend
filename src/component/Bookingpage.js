import React from "react";
import "./BookingPage.css"
function Bookingpage() {
  return (
    <>
      <div className="container wrappingDiv">
        <div className="bookingform">
          <div className="formcredentials">
            <form>
              <center><h1>Get Slot by <span id="slotbookingname"> ADAN PRADAN</span></h1></center>
              <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="NAME" id="Name" />
              </div>
              <br/>
              <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="EMAIL" id="email" placeholder="example123@gmail.com" />
              </div>
              <br/>
              <div>
                <label htmlFor="selectcollege">College:</label>
                <select name="COLLEGE" id="selectcollege">
                  <option value="KMIT">KMIT </option>
                  <option value="KMEC">KMEC DEGREE</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" >Date: </label>
                <input type="date" name="DATE" id="date" />
                <br />
              </div>
              <br />

              <div>
                <label htmlFor="slot-timings">Slot timings :</label>
                <select name="SLOTTIMINGS" id="slot-timings">
                  <option value="9:00 AM-12:00 PM" >9:00 PM- 12:00 PM </option>
                  <option value="2:00 PM -5:00 PM"> 2:00 PM -5:00 PM</option>
                </select>
              </div>
              <br />

              <input type="submit" value="Submit Now" />
          
          </form>
        </div>
      </div>
    </div>
</>
    )
}
export default Bookingpage;