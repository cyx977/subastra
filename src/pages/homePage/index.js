import React, { Component } from "react";
import "./homePage.styles.scss";
import DirectoryMenu from "../../component/directory";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <DirectoryMenu></DirectoryMenu>
      </div>
    );
  }
}

export default HomePage;

// import React from 'react';

// import './homePage.styles.scss';

// const HomePage = () => (
//   <div className='homepage'>
//     <h1>Welcome to my Homepage</h1>
//     <div className='directory-menu'>
//       <div className='menu-item'>
//         <div className='content'>
//           <div className='title'>HATS</div>
//           <span className='subtitle'>SHOP NOW</span>
//         </div>
//       </div>
//       <div className='menu-item'>
//         <div className='content'>
//           <div className='title'>JACKETS</div>
//           <span className='subtitle'>SHOP NOW</span>
//         </div>
//       </div>
//       <div className='menu-item'>
//         <div className='content'>
//           <div className='title'>SHOES</div>
//           <span className='subtitle'>SHOP NOW</span>
//         </div>
//       </div>
//       <div className='menu-item'>
//         <div className='content'>
//           <div className='title'>WOMENS</div>
//           <span className='subtitle'>SHOP NOW</span>
//         </div>
//       </div>
//       <div className='menu-item'>
//         <div className='content'>
//           <div className='title'>MENS</div>
//           <span className='subtitle'>SHOP NOW</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default HomePage;
