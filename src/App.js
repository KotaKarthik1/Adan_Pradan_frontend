import './App.css';
import Home from './component/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Signupform from './component/Signupform';

import Bookinpage from './component/Bookingpage';

// import Bookinpage from './component/Bookingpage';

import Userpostlogin from './component/Userpostlogin';
import Faq from './component/Faq';
import Loginpage from './component/Loginpage';
import Collegepostlogin from './component/Collegepostlogin';
import Contact from './component/Contact';

// import Search from './component/Search';
// import Userclickonclg from './component/Userclickonclg';
import StudentNav from './component/Studentnav';
import Collegenav from './component/Collegenav';
import Userbooked from './component/Userbooked';
import Loginpage2 from './component/Loginpage2';
import Todaylist from './component/Todaylist';
import StudentProfile from './component/StudentProfile';
import Success from './component/Success';
import { useAuth } from './component/Authcontext';
import CollegeSignUpform from './component/CollegeSignUpform';
import UpdatesClg from './component/UpdatesClg';
import CollegeBookings from './component/CollegeBookings';
import UserCollegetab from './component/UserCollegetab';
import UserProfile from './component/UserProfile';
import UpdateUser from './component/UpdateUser';



function App() {
  const { authenticated } = useAuth();

  return (
    
    <>
     <Router>
          {/* <Navbar/> */}
          <Routes>
          <Route path="studentprofilepage" element={<><StudentNav/><StudentProfile/></>}/>
              <Route path="/" element={<><Navbar/><Home/></>} />
              <Route path="faq" element={<><Navbar/><Faq/></>}/>
              <Route path="Login" element={<><Navbar/><Loginpage/></>}/>
              {/* <Route path="student" element={<><StudentNav/><Userpostlogin/><Contact/></>}/> */}
              {/* <Route path="college" element={<><Collegenav/><Collegepostlogin/></>}/> */}
              <Route path="signup" element={<><Navbar/><Signupform/></>}/>
              <Route path="contact" element={<><Navbar/><Contact/></>}/>
              <Route path="studcontact" element={<><StudentNav/><Contact/></>}/> 
              {/* <Route path="search" element={<><StudentNav/><Search/></>}/> */}
              {/* <Route path="studfaq" element={<><StudentNav/><Faq/></>}/> */}
              {/* <Route path="clickcollege" element={<><StudentNav/><Userclickonclg/></>}/> */}
              {/* <Route path="UserClickOnBooked" element={<><StudentNav/><Userbooked/></>}/>
              {/* <Route path="bookform" element={<><StudentNav/><Bookinpage/> </>}/> */}
              {/* <Route path="todaylist" element={<><Collegenav/><Todaylist/> </>}/> */}
              {/* <Route path="studentprofilepage" element={<><StudentNav/><StudentProfile/></>}/> */}
              <Route path="success" element={<><Navbar/><Success/></>}/>
              {/* <Route path="bookeđ" element={<><StudentNav/><Userbooked/> </>}/> */}
              <Route path="clgsingnUp" element={<><Navbar/><CollegeSignUpform/></>}/>
              <Route path="Login2" element={<><Navbar/><Loginpage2/></>}/>
              
              {authenticated?(
                <>
                <Route path="student" element={<><StudentNav/><Userpostlogin/><Contact/></>}/>
                <Route path="studfaq" element={<><StudentNav/><Faq/></>}/>
                <Route path="clickcollege" element={<><StudentNav/><UserCollegetab/></>}/>
                <Route path="studcontact" element={<><StudentNav/><Contact/></>}/>
                <Route path="UserClickOnBooked" element={<><StudentNav/><Userbooked/></>}/>
                <Route path="tostudprofile" element={<><StudentNav/><UserProfile/></>}></Route>
                {/* <Route path="bookform/:id" element={<><StudentNav/><Bookinpage/> </>}/> */}
                {/* <Route path="collegeUpdate" element={<><Collegenav/><UpdatesClg/></>}/> */}
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
                <Route path="todaylist" element={<><Collegenav/><Todaylist/> </>}/>
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
