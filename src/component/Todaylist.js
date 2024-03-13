import React, { useState } from "react";

const students = [
  { name: "Karthik", college: "KMIT", lab: "Python", time: "9:00am-11:00am" },
  { name: "Bhavani", college: "VJIT", lab: "C++", time: "3:00pm-5:00pm" },
  { name: "Sujith", college: "KMEC", lab: "Python", time: "1:00am-3:00am" },
  { name: "ShivaRam", college: "KMIT", lab: "BEEE", time: "9:00am-11:00am" },
  { name: "Yuvaraj", college: "CMRK", lab: "ADE", time: "9:00am-11:00am" },
  { name: "Rohith", college: "KMEC", lab: "Python", time: "1:00am-3:00am" },
  { name: "Rishwanth", college: "GNIT", lab: "BEEE", time: "9:00am-11am" },
  { name: "Manohar", college: "VJIT", lab: "C++", time: "3:00pm-5:00pm" },
  { name: "Sireesha", college: "KMEC", lab: "COA", time: "9:00am-11:00am" },
  { name: "Kavya", college: "VASV", lab: "C++", time: "3:00pm-5:00pm" },
  { name: "Kota Karthik", college: "KMEC", lab: "IML", time: "9:00am-11:00am" },
];

const Todaylist = () => {
  const [sortType, setSortType] = useState("asc");
  const [sortedColumn, setSortedColumn] = useState("name");

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortType(sortType === "asc" ? "desc" : "asc");
    } else {
      setSortType("asc");
      setSortedColumn(column);
    }
  };

  const sortedStudents = students.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a[sortedColumn].localeCompare(b[sortedColumn]);
  });

  return (
    <div className="container wrappingDiv">
        <h1 className="display-1">Today list</h1>
    <table className="table dark">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Student Name</th>
          <th onClick={() => handleSort("college")}>College Name</th>
          <th onClick={() => handleSort("lab")}>Lab Name</th>
          <th onClick={() => handleSort("time")}>Time</th>
        </tr>
      </thead>
      <tbody>
        {sortedStudents.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.college}</td>
            <td>{student.lab}</td>
            <td>{student.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Todaylist;
