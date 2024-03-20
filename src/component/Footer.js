import React from "react";
function Footer(){
    return(

        <footer style={{position:"fixed-bottom",bottom:"0px"}}>
            <div className="container-fluid">


              <div className="row">
                <div className="col-xl-3">
                  <div>
                    <p className="display-1 border p-5">Logo</p>
                  </div>
                </div>
                <div className="col-xl-3 fu">
                  <div className="pt-5">
                    <h4>Useful links</h4>
                    <ul>
                      <li>
                        <a href="#C" className="a1">FAQ's</a>
                      </li>
                      <li>
                        <a href="#A" className="a1">About Us</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                
                  <div className="col-xl-3 pt-5 fu ">
                    <h4>Contact Us</h4>
                    <ul >
                      <li>
                        <a href="#" className="a1">adanpradan@gmail.com</a>
                      </li>
                      <li>
                        <a href="#" className="a1">9191919191</a>
                      </li>
                    </ul>
                    <h4>Address</h4>
                        <p>Lorem ipsum dolm nesciunt.Odio dolorem aliquam laudantium dignissimos recusandae!
                        </p>
                  </div>
              
              <div className="col-xl-3">
                  <div className="fu pt-5">
                    <h4>Follow Us</h4>
                    <div className="social">
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-instagram"></a>
                      <a href="#" className="fa fa-twitter"></a>
                   </div>
                  </div>
                </div>
                </div>
              <div className="d-flex justify-content-center">
          
                <div className="copyright">
                  <p>&copy;Lorem_ipsum_dolor</p>
                </div>
              </div>
            </div>
          </footer>
    )
}
export default Footer;