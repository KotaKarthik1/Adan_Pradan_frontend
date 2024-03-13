import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Loginpage2.css";
import {useAuth} from './Authcontext';


export default function Loginpage2() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth();


  const handleSubmit = async (check) => {
    check.preventDefault();
    try {

      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:5031/AdanPradan/loginclg',
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
      const newToken = response.data.token;
 
       await login(newToken);
      localStorage.setItem('token', newToken);
       localStorage.setItem('Id',response.data.user._id);
       
       console.log('login Response:', response.data);
       console.log(JSON.stringify(response.data))
       navigate('/college');
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
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(check) => setemail(check.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(check) => setPassword(check.target.value)}
                />
              </div>
              <div className="container">
                <div className="form-group">
                  <br />
                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: "gold" }}
                  >
                    LogIn as college
                  </button>
                  <br />
                </div>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
            </form>
            <div className="container break">
              <Link to="/login">
                <button
                  className="btn"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  
                </button>
              </Link>

              <Link to="/signup2">
                <button
                  className="btn"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="image-container">
              <img
                src="images\computerphotoOrg.jpg"
                className="image-fluid sidephoto"
                alt="not loaded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
