import React from "react";
import "./Collegepostlogin.css"
function Collegepostlogin() {
    return (
        <>
        <div className="container pt-5 my-5">
          <div className="row display-1">
           Today's List
          </div>
        </div>
        <div className="main">
           <div className="container box4" style={{boxShadow:" 10px 0px 17px 0.2px #6c6f74,0px 0px 1px"}}>
               <div className="row">
                 <h1>ARTIFICAL INTELLIGENCE LAB</h1>
                 
                 <h2 style={{marginLeft: "30px"}}>ID's of Students</h2>
                 <ul style={{marginLeft: "30px",padding: "9px"}}>
                  <li style={{padding: "9px"}}><h4>21BD1A05B3 - Keshav memorial Institute of Technology</h4></li>
                  <li style={{padding: "10px"}}><h4>21BD1A05DY - Keshav memorial College of Engineering</h4></li>
                  <li style={{padding: "10px"}}><h4>21BD1A05DZ - Keshav memorial Institute of Technology</h4></li>
                 </ul>
                 <a href="#" className="viewmore" ><h3>view more</h3></a>
               </div>
           </div>
           <div className="container-md box5">
            <div className="row">
              <h1>PYTHON LAB</h1>
              
              <h2>ID's of Students</h2>
              <ul style={{marginLeft: "30px"}}> 
               <li style={{padding:"10px"}}><h4>21BD1A05B3</h4></li>
               <li style={{padding:"10px"}}><h4>21BD1A05DY</h4></li>
               <li style={{padding:"10px"}}><h4>21BD1A05DZ</h4></li>
              </ul>
              <a href="#" className="viewmore" ><h3>view more</h3></a>
            </div>
        </div>
        <div className="container-md box6">
          <div className="row">
            <h1>BEEE LAB</h1>
            
            <h2 style={{marginLeft: "30px"}}>ID's of Students</h2>
            <ul style={{marginLeft: "30px"}}>
             <li style={{padding:" 10px"}}><h4>21BD1A05B3</h4></li>
             <li style={{padding:" 10px"}}><h4>21BD1A05DY</h4></li>
             <li style={{padding:" 10px"}}><h4>21BD1A05DZ</h4></li>
            </ul>
            <a href="#" className="viewmore" ><h3>view more</h3></a>
          </div>
      </div>
        </div>    
        </>
    )
}
export default Collegepostlogin;