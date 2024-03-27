import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SampleLogin.module.css';
import { useAuth } from './Authcontext';

export default function Loginpagenew() {
  const [email, setEmail] = useState('karthikkota@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
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
      localStorage.setItem('Id', response.data.user._id);

      // console.log('login Response:', response.data);
      // console.log(JSON.stringify(response.data))
      navigate('/Student');
    } catch (error) {
      setError('Failed to log in');
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container} style={{marginTop:'3cm'}}>
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <p>Student</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(check) => setEmail(check.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(check) => setPassword(check.target.value)}
          />
          {loading ? (<>
            <button className={styles.buttonforcollege}>
            <div className="d-flex align-items-center">
        <div className="spinner-border" style={{color:'white'}} role="status">
          <span className="sr-only" ></span>
        </div>
      </div>
          </button>
          </>) :<button className={styles.buttonforcollege} disabled={loading}>
            Sign In
          </button> }
          
          {error && <div className="error-message">{error}</div>}
          <div>
            <Link to="/loginupdate2"><button className={styles.buttonforcollege}>College</button></Link>
            <Link to="/signup"><button className={styles.buttonforcollege} style={{ margin: "10px" }}>Sign Up</button></Link>
          </div>
        </form>
      </div>
    </>
  );
}
