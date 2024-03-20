
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Loginpage.css";
import {useAuth} from './Authcontext';

export default function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       // Retrieve the token from local storage
       const token = localStorage.getItem('token');

       const response = await axios.post(
         'http://localhost:5031/AdanPradan/login',
         {
           email: email,
           password: password,
         },
         {
           // Include the token in the "Authorization" header
           headers: {
             'Authorization': `Bearer ${token}`, // Add "Bearer " prefix
           },
         }
       );
 
       // Assuming the JWT token is included in the response as response.data.token
       const newToken = response.data.token;
 
       await login(newToken);
      localStorage.setItem('token', newToken);
       localStorage.setItem('Id',response.data.user._id);
       
       // console.log('login Response:', response.data);
       // console.log(JSON.stringify(response.data))
       navigate('/Student');
          } catch (error) {
      setError('Failed to log in');
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="container wrappingDiv bck">
         <div className="row">
           <div className="col-4 tothemiddle">
             <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" value={email} onChange={(check) => setEmail(check.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(check) => setPassword(check.target.value)} />
          </div>
          <div className="container">
          <div className="form-group">
            <br/>
            <button type="submit" className="btn" style={{ backgroundColor: "gold"}}>LogIn as student</button>
            <br/>
          </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
        </form>
        <div className='container break'>
        <Link to="/Login2"><button className="btn" style={{ backgroundColor: "green",color:"white" }}>college</button></Link>
            
        <Link to="/signup"><button className="btn" style={{ backgroundColor: "green", color: "white" }}>Register</button></Link>
        </div>
      </div>
      <div className="col-6">
              <div className="image-container">
                  <img src="images\computerphotoOrg.jpg" className="image-fluid sidephoto" alt="not loaded" />
               </div>
           </div>
    </div>
    </div>
    </>
  );
}


