
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Loginpage.css";
import {useAuth} from './Authcontext';

export default function Loginpage() {
  const [email, setEmail] = useState('karthikkota@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();
const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
       // Retrieve the token from local storage
       const token = localStorage.getItem('token');

       const response = await axios.post(
         'https://adan-pradan-backend.onrender.com/AdanPradan/login',
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
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
    <div className="container wrappingDiv bck">
         <div className="row">
          
           <div className="col-4 tothemiddle">
            {/* <h1>Testing mail:karthik@gmail.com</h1>
            <h1>password:123456</h1> */}
             <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" value={email} onChange={(check) => setEmail(check.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(check) => setPassword(check.target.value)} />
            <Link to="/Login2"><p style={{ color:"green" }}>Login as College</p></Link>
          </div>
          <div className="container justify-content-md-start" >
          <div className="form-group" >
            <br/>
            <button type="submit" className="btn"  style={{ backgroundColor: "gold" }} disabled={loading}>
    {loading ? (
      <div className="d-flex align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        {/* <span className="ml-2">Login...</span> */}
      </div>
    ) : (
      'Log in'
    )}
  </button>
            <br/>
          </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
        </form>
        <div className='container break'>
          <span>dont have an account?</span>
      <Link to="/signup"><p className='display-7' style={{ color: "green"}}><b>Register now</b></p></Link>
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


