import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
export default function Faq() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        // Perform your data fetching or asynchronous operations here
        // For demonstration, I'll simulate loading for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 100));
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
//         <div>
//           <Link to="/faq"></Link>
//           <div className="container-flex wrappingDiv my-5 pt-5 c1" id="C" style={{background:'#0f0f10'}}>
//             <div className="display-2" style={{ color: "rgb(224, 101, 0)",justifyContent:'center' }}>
//               <b>FAQ's</b>
//             </div>
//             <ul>
//               <li>
//                 <p className="fq josephin" style={{color:'#d3d7df'}}>
//                   <h2>How do I book a workshop as a student?</h2>
//                   <br />
//                   Simply log in, browse workshops, select one, and fill out the registration form.

//                 </p>
//               </li>
//               <li>
//                 <p className="fq josephin" style={{color:'#d3d7df'}}>
//                   <h2>Can I cancel a workshop booking?</h2>
//                   <br />
//                   Yes, students can cancel workshop bookings at any time.
//                 </p>
//               </li>
//               <li>
//                 <p className="fq josephin" style={{color:'#d3d7df'}}>
//                   <h2>How do colleges manage workshops?</h2>
//                   <br />
//                   Colleges can easily add, cancel, and update workshops through the platform, with changes reflected in student dashboards.
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//       <script>window.onload = function () {window.scrollTo(0, 0)};</script>
//     </>
//   );
// }
<div className="container-flex wrappingDiv my-5 pt-5 c1" id="C" style={{ background: '#0f0f10',display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh'}}>
  <div className="display-2" style={{ color: "rgb(224, 101, 0)", justifyContent: 'center' }}>
    <b>FAQ's</b>
  </div>
  <ul>
    <li>
      <p className="fq josephin" style={{ color: '#d3d7df' }}>
        <h2>How do I book a workshop as a student?</h2>
        <br />
        Simply log in, browse workshops, select one, and fill out the registration form.

      </p>
    </li>
    <li>
      <p className="fq josephin" style={{ color: '#d3d7df' }}>
        <h2>Can I cancel a workshop booking?</h2>
        <br />
        Yes, students can cancel workshop bookings at any time.
      </p>
    </li>
    <li>
      <p className="fq josephin" style={{ color: '#d3d7df' }}>
        <h2>How do colleges manage workshops?</h2>
        <br />
        Colleges can easily add, cancel, and update workshops through the platform, with changes reflected in student dashboards.
      </p>
    </li>
  </ul>
</div>
      )}
      <script>window.onload = function () {window.scrollTo(0, 0)};</script>
    </>
  );
}