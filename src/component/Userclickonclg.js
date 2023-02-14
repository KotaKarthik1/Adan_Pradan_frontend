import React, { useState } from "react";
import "./Userclickonclg.css"

function Userclickonclg() {
    const [collegeData, setCollegeData] = useState([
        {college: "Keshav Memorial Institute of Technology", jntucode: "KMIT",link:"Collegedata1.js" },
        {college: "Keshav Memorial College of Engineering", jntucode: "KMEC",link:"Colegedata2.js" },
        {college: "Neil Gogte Institute of Technology", jntucode: "NGIT" ,link:"Collegedata3.js"},
        {college: "Chaitanya Bharati Institute of Technology", jntucode: "CBIT" ,link:"Collegedata4.js"},
        {college: "VNR Vignan Jyothi Institute of Technology", jntucode: "VJIT",link:"Collegedata5.js" }
    ]);

    const [workshopData, setWorkshopData] = useState([
        { workshop: "BEEE lab", bookings: 5876, college: "Keshav Memorial Institute of Technology" },
        { workshop: "C++ Lab", bookings: 487, college: "Neil Gogte Institute of Technology" },
        { workshop: "Python Lab", bookings: 992, college: "Keshav Memorial Engineering College" }
    ]);

    return (
        <>
            <div className="container my-5 p-5 wrappingDiv">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="college1-tab" data-bs-toggle="tab" data-bs-target="#college1" type="button"
                            role="tab" aria-controls="college1" aria-selected="true"><div className="display-3 itemcolor">COLLEGE</div></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="workshop1-tab" data-bs-toggle="tab" data-bs-target="#workshop1"
                            type="button" role="tab" aria-controls="workshop1" aria-selected="false"><div className="display-3 itemcolor">WORKSHOP</div></button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="college1" role="tabpanel" aria-labelledby="home-tab">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">College Name</th>
                                    <th scope="col">JNTU Code</th>
                                    {/* <th scope="col">Link</th> */}
                                    {/* <th scope="col">IdNo</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {collegeData.map((clg, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{clg.college}</td>
                                        <td>{clg.jntucode}</td>
                                        {/* <td><a href="${clg.link}">View</a></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="workshop1" role="tabpanel" aria-labelledby="false">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Workshop</th>
                                    <th scope="col">Bookings</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            <tbody>
                                {workshopData.map((workshoptb, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{workshoptb.workshop}</td>
                                        <td>{workshoptb.bookings}</td>
                                        <td>{workshoptb.college}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userclickonclg;
