// import React from 'react'
// import Userclickonclg from './Userclickonclg'
// import WorkshopTab from './WorkshopTab'

// const UserCollegetab = () => {
//   return (
//     <div>
//       <div className="container my-5 p-5 wrappingDiv">
//       <ul
//         className="nav nav-tabs justify-content-center"
//         id="myTab"
//         role="tablist"
//       >
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link active"
//             id="college1-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#college1"
//             type="button"
//             role="tab"
//             aria-controls="college1"
//             aria-selected="true"
//           >
//             <div className="display-3 itemcolor">COLLEGE</div>
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link"
//             id="workshop1-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#workshop1"
//             type="button"
//             role="tab"
//             aria-controls="workshop1"
//             aria-selected="false"
//           >
//             <div className="display-3 itemcolor">WORKSHOP</div>
//           </button>
//         </li>
//       </ul>
//       <div className="tab-content" id="myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="college1"
//           role="tabpanel"
//           aria-labelledby="home-tab"
//         >
//             <Userclickonclg/>
//         </div>
//       </div>
//       <div className="tab-content" id="myTabContent2">
//         <WorkshopTab/>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default UserCollegetab
import React, { useState } from 'react';
import Userclickonclg from './Userclickonclg';
import WorkshopTab from './WorkshopTab';

const UserCollegetab = () => {
  const [activeTab, setActiveTab] = useState('college');

  return (
    <div>
      <div className="container my-5 p-5 wrappingDiv">
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'college' ? 'active' : ''}`}
              onClick={() => setActiveTab('college')}
              type="button"
            >
              <div className="display-3 itemcolor">COLLEGE</div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'workshop' ? 'active' : ''}`}
              onClick={() => setActiveTab('workshop')}
              type="button"
            >
              <div className="display-3 itemcolor">WORKSHOP</div>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${activeTab === 'college' ? 'show active' : ''}`}
            id="college1"
            role="tabpanel"
          >
            <Userclickonclg />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'workshop' ? 'show active' : ''}`}
            id="workshop1"
            role="tabpanel"
          >
            <WorkshopTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCollegetab;


// import React, { useState } from 'react';
// import Userclickonclg from './Userclickonclg';
// import WorkshopTab from './WorkshopTab'

// const UserCollegetab = () => {
//   const [activeTab, setActiveTab] = useState('college');

//   // return (
//   //   <div>
//   //     <div className="container my-5 p-5 wrappingDiv">
//   //       <ul
//   //         className="nav nav-tabs justify-content-center"
//   //         id="myTab"
//   //         role="tablist"
//   //       >
//   //         <li className="nav-item" role="presentation">
//   //           <button
//   //             className={`nav-link ${activeTab === 'college' ? 'active' : ''}`}
//   //             onClick={() => setActiveTab('college')}
//   //             type="button"
//   //           >
//   //             <div className="display-3 itemcolor">COLLEGE</div>
//   //           </button>
//   //         </li>
//   //         <li className="nav-item" role="presentation">
//   //           <button
//   //             className={`nav-link ${activeTab === 'workshop' ? 'active' : ''}`}
//   //             onClick={() => setActiveTab('workshop')}
//   //             type="button"
//   //           >
//   //             <div className="display-3 itemcolor">WORKSHOP</div>
//   //           </button>
//   //         </li>
//   //       </ul>
//   //       <div className="tab-content" id="myTabContent">
//   //         <div
//   //           className={`tab-pane fade ${activeTab === 'college' ? 'show active' : ''}`}
//   //           id="college1"
//   //           role="tabpanel"
//   //         >
//   //           <Userclickonclg />
//   //         </div>
//   //         <div
//   //           className={`tab-pane fade ${activeTab === 'workshop' ? 'show active' : ''}`}
//   //           id="workshop1"
//   //           role="tabpanel"
//   //         >
    
//   //           <WorkshopTab />
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   return(
//     <>
//     <WorkshopTab/>
//     </>
//   )
// };

// export default UserCollegetab;

