import './App.css';
import Home from './component/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Signupform from './component/Signupform';
// import Bookinpage from './component/Bookingpage';
import Userpostlogin from './component/Userpostlogin';
import Faq from './component/Faq';
import Loginpage from './component/Loginpage';
import Collegepostlogin from './component/Collegepostlogin';
import Contact from './component/Contact';
import Search from './component/Search';
import Userclickonclg from './component/Userclickonclg';
import StudentNav from './component/Studentnav';
import Collegenav from './component/Collegenav';
function App() {
  return (
    <>
     <Router>
          
          <Routes>
              <Route path="/" element={<><Navbar/><Home/></>} />
              <Route path="faq" element={<><Navbar/><Faq/></>}/>
              <Route path="Login" element={<><Navbar/><Loginpage/></>}/>
              <Route path="student" element={<><StudentNav/><Userpostlogin/></>}/>
              <Route path="college" element={<><Collegenav/><Collegepostlogin/></>}/>
              <Route path="signup" element={<><Navbar/><Signupform/></>}/>
              <Route path="contact" element={<><Navbar/><Contact/></>}/>
              <Route path="studcontact" element={<><StudentNav/><Contact/></>}/>
              <Route path="search" element={<><StudentNav/><Search/></>}/>
              <Route path="studfaq" element={<><StudentNav/><Faq/></>}/>
              <Route path="clickcollege" element={<><StudentNav/><Userclickonclg/></>}/>
              
          </Routes>
    </Router>
    <Footer/>
     
    </>
  );
}

export default App;
