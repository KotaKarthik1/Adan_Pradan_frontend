import React from "react";
import "./homepagestyles.css";
import {Link} from "react-router-dom"
function home() {
     return (
          <>
               <div id="A">
                    <div className="container-expand wrappingDiv">
                         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                              <div className="carousel-inner">
                                   <div className="carousel-item active">
                                        <img src="images\homepagephoto.jpg" alt="not loaded 1st item" className="img-fluid" />
                                   </div>    
                                   <div className="carousel-item">
                                        <img src="images\lastEedit1.jpg" alt="not loaded 2nd item" className="img-fluid" />
                                   </div>
                                   <div className="carousel-item">
                                        <img src="images\lastEdit2.jpg" alt="not loaded 2nd item" className="img-fluid" />
                                   </div>
                              </div>
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                   <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                   <span className="visually-hidden">Next</span>
                              </button>
                         </div>
                    </div>

                    <div className="container py-5 my-5 wrappingDiv">
                         <h1 className="display-4 josephin"><center>Can't do your lab work in home?</center></h1>
                         <p className="display-6 regstyle"><center><b>Register now</b></center></p>
                    </div>
                    <div className="container pt-5 my-5 .wrappingDiv c1" >
                         <div className="display-4" style={{ color: "rgb(105, 58, 19)" }}><b>About us</b></div>
                         <h3 className="b1"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nam commodi? Deserunt, placeat ratione alias quasi sint tenetur pariatur accusamus aperiam praesentium. Corrupti minus laudantium aliquam omnis totam, beatae nostrum.<br />
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nam commodi? Deserunt, placeat ratione alias quasi sint tenetur pariatur accusamus aperiam praesentium. Corrupti minus laudantium aliquam omnis totam, beatae nostrum.<br />
                              <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, error quidem? Ad provident natus minima officiis nemo omnis tenetur illo accusamus nostrum velit fuga totam consequuntur, molestiae ducimus doloremque ut.<br /></h3>
                    </div>
                    <div className="container-md my-5 pt-5 quick c1">
                         <div className="josephin"><h1>SIMPLE STEPS TO BOOK YOUR WORKSHOP</h1>
                              <br />
                         </div>
                         <div className="container">
                              <div className="row">
                                   <div className="col-4">
                                        <br />

                                        <img src="images\lastEdit4.jpg" alt="not loaded" className="img-fluid circle"  />
                                   </div>

                                   <div className="col-6">
                                        <div className="b1" ><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic obcaecati ipsam ex quibusdam animi assumenda minus laboriosam ipsa tempore eum porro consectetur expedita neque minima, magnam culpa architecto libero quas.<br />
                                        </h2><br />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><br /><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic obcaecati ipsam ex quibusdam animi assumenda minus laboriosam ipsa tempore eum porro consectetur expedita neque minima, magnam culpa architecto libero quas.</h2>
                                             <br />
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <img src="images\lastEdit5.jpg" alt="not loaded" className="img-fluid circle"  />
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-4">
                                        <img src="images\plaincolorblue.jpg" alt="not loaded" className="img-fluid circle" />
                                   </div>
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><br /><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic obcaecati ipsam
                                             ex quibusdam animi assumenda minus laboriosam ipsa tempore eum porro consectetur expedita neque minima, magn
                                             am culpa architecto libero quas.</h2><br />
                                             <br />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-8">
                                        <br />
                                        <div className="b1"><h2><br /><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Hic obcaecati ipsam ex quibusdam animi assumenda minu
                                             s laboriosam ipsa tempore eum porro consectetur expedita neque mi
                                             nima, magnam culpa architecto libero quas.</b></h2>
                                             <br />
                                             <br />
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <img src="images\lastEdit4.jpg" alt="not loaded" className="img-fluid circle" />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="container wrappingDiv c1" id="C">
                         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}><b>FAQ's</b></div>
                         <ul>
                              <li>< h2>How can I book a slot?</h2></li>
                              <li><h2>How can I book based on location?</h2></li>
                              <li><h2>Who will receive me in college? </h2></li>
                              <Link to="/faq"><h3 style={{ color: "rgb(201, 44, 44)" }}>&nbsp; 
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;view more </h3></Link>
                         </ul>

                    </div>
                    <div className="container wrappingDiv c1 p-5 my-5" id="D">
                         <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
                              <b>Contact us</b></div>
                         <h2>Lorem ipsum dolor sit amet</h2>
                         <h2>Lorem ipsum dolor sit amet</h2>
                         <h2>Lorem ipsum dolor sit amet</h2>
                    </div>
               </div>
          </>
     )
}
export default home;