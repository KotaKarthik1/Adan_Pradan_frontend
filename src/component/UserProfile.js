import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const user_id = localStorage.getItem('Id');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5031/AdanPradan/std/list/${user_id}`);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Student Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.username} - {item.college}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

