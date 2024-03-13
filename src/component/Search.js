import React from "react";
// import "./search.css"
function Search() {
    const bgm = {
        backgroundImage: `url(blackrugged.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };
    const btnstyl = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "88vh"
    }
    return (
        <>
            <div className="contanier-fluid wrappingDiv" style={bgm}>

                <div className="container-fluid" style={btnstyl}>
                    <div class="container">
                        <div class="row">
                    
                    <center><input type="text" placeholder="Enter college/workshop name" style={{width:"350px",height:"50px",
                     boxShadow: " 0px 0px 7px 0.2px #6c6f74,0px 0px 1px", borderRadius: "18px" }}></input>
                     
                    <button type="btn" style={{width:"100px",height:"45px",
                    backgroundColor:"gold",boxShadow: " 0px 0px 7px 0.2px #6c6f74,0px 0px 1px", borderRadius: "15px"  }} >
                        <center>Search</center></button></center>
                </div> 
                </div>
                </div>
                
                

            </div>
        </>
    )
}
export default Search;