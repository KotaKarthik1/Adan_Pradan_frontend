import './App.css';
import Home from './component/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Signupform from './component/Signupform';
import Bookinpage from './component/Bookingpage';
import Userpostlogin from './component/Userpostlogin';
import Faq from './component/Faq';
import Loginpage from './component/Loginpage';
import Collegepostlogin from './component/Collegepostlogin';
import Contact from './component/Contact';
import StudentNav from './component/Studentnav';
import Collegenav from './component/Collegenav';
import Userbooked from './component/Userbooked';
import Loginpage2 from './component/Loginpage2';
import StudentProfile from './component/StudentProfile';
import Success from './component/Success';
import { useAuth } from './component/Authcontext';
import CollegeSignUpform from './component/CollegeSignUpform';
import UpdatesClg from './component/UpdatesClg';
import CollegeBookings from './component/CollegeBookings';
import UserCollegetab from './component/UserCollegetab';
import UserProfile from './component/UserProfile';
import UpdateUser from './component/UpdateUser';
import TestingLogInclgnew from './component/SignUpDate2';
import Loginpagenew from './component/SignUpdate';
import AboutUsNew from './component/Aboutusnew';
import StudentCurvepostlogin from './component/StudentCurvepostlogin';


function App() {
  const { authenticated } = useAuth();

  return (
    
    <>
     <Router>
          <Routes>
          <Route path="studentprofilepage" element={<><StudentNav/><StudentProfile/></>}/>
              {/* <Route path="curve" element={<><StudentNav/><StudentCurvepostlogin/></>}/> */}
              <Route path="/" element={<><Navbar/><Home/></>} />
              <Route path="faq" element={<><Navbar/><Faq/></>}/>
              <Route path="Login" element={<><Navbar/><Loginpage/></>}/>
              <Route path="signup" element={<><Navbar/><Signupform/></>}/>
              <Route path="contact" element={<><Navbar/><Contact/></>}/>
              <Route path="studcontact" element={<><StudentNav/><Contact/></>}/> 
              <Route path="success" element={<><Navbar/><Success/></>}/>
              <Route path="clgsingnUp" element={<><Navbar/><CollegeSignUpform/></>}/>
              <Route path="Login2" element={<><Navbar/><Loginpage2/></>}/>
              <Route path="loginupdate" element={<><Navbar/><Loginpagenew/></>}></Route>
              <Route path="loginupdate2" element={<><Navbar/><TestingLogInclgnew/></>}></Route>
              <Route path="aboutusnew" element={<><AboutUsNew/></>}></Route>
              
              {authenticated?(
                <>
                <Route path="student" element={<><StudentNav/><StudentCurvepostlogin/></>}/>
                <Route path="studfaq" element={<><StudentNav/><Faq/></>}/>
                <Route path="clickcollege" element={<><StudentNav/><UserCollegetab/></>}/>
                <Route path="studcontact" element={<><StudentNav/><Contact/></>}/>
                <Route path="UserClickOnBooked" element={<><StudentNav/><Userbooked/></>}/>
                <Route path="tostudprofile" element={<><StudentNav/><UserProfile/></>}></Route>
                <Route path="bookform/:id" element={<><StudentNav/><Bookinpage/> </>}/>
                <Route path="updateuser" element={<><StudentNav/><UpdateUser/></>}/>
                </>
              ):(
                <Route path="*" element={<><Navbar/><Home/></>} />
              )
              }
              {authenticated?(
                <>
                
                <Route path="collegebookings" element={<><Collegenav/><CollegeBookings/></>}/>
                <Route path="college" element={<><Collegenav/><Collegepostlogin/></>}/>
                <Route path="collegeUpdate" element={<><Collegenav/><UpdatesClg/></>}/>
                </>
              ):(
                <>
                <Route path="*" element={<><Navbar/><Home/></>}/>
                </>
              )}

              
          </Routes>
    </Router>
    <Footer/>
     
    </>
  );
}

export default App;
