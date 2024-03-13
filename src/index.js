import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {AuthProvider} from './component/Authcontext'
=======
>>>>>>> eead39944a4b0d839e9fe84b2d2492547468b01e

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <AuthProvider>
    <App />
    </AuthProvider>
=======
    <App />
>>>>>>> eead39944a4b0d839e9fe84b2d2492547468b01e
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
