import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkShopForm from './WorkShopForm';
import CollegeProfile from './CollegeProfile';
import CurrentWorkShopsClg from './CurrentWorkShopsClg';
import Loader from './Loader'; // Import the Loader component
import EmptyDataComponent from './EmptyDataComponent'; // Import the EmptyDataComponent

function UpdatesClg() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const id = localStorage.getItem('Id');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://adan-pradan-backend.onrender.com/AdanPradan/colleges/${id}`
        );
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="container wrappingDiv">
        {loading ? <Loader /> : data.length === 0 ? (
          <EmptyDataComponent />
        ) : (
          <>
            <h1 style={{ color: 'green' }}>College Data:</h1>
            <h1>College Name: {data.collegeName}</h1>
            <h1>Jntu Code: {data.JntuCode}</h1>
          </>
        )}
        <WorkShopForm />
        <CurrentWorkShopsClg />
        <CollegeProfile />
      </div>
    </div>
  );
}

export default UpdatesClg;
