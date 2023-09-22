// // import React from 'react';

// // const UserDashBoard = () => {
// //     return (
// //         <>
// //           <h1>welcome to Userdash board</h1>  
// //         </>
// //     );
// // };

// // export default UserDashBoard;

// // src/components/UserDashboard.js

// import React, { Component } from 'react';
// // import NavigationBar from './NavigationBar';



// class UserDashboard extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       userData: {}, // Store user data here
//       notifications: [], // Store user notifications here
//       selectedTab: 'profile', // Default selected tab
//     };
//   }

//   // Fetch user data and notifications when the component mounts
//   componentDidMount() {
//     // You can fetch user data and notifications from your API here
//     // Example:
//     // fetchUserData().then(userData => this.setState({ userData }));
//     // fetchNotifications().then(notifications => this.setState({ notifications }));
//   }

//   // Handle tab selection
//   handleTabClick = (tab) => {
//     this.setState({ selectedTab: tab });
//   };

//   render() {
//   //   return (
//   //     <div className="user-dashboard">
//   //       {/* <NavigationBar /> */}
//   //       <h1>Welcome to Your Dashboard</h1>
//   //       {/* Add your dashboard content here */}
//   //     </div>
//   //   );
//   // }
//   const { userData, notifications, selectedTab } = this.state;

//     return (
//       <div className="user-dashboard">
//         <header>
//           <h1>Welcome, {userData.username}</h1>
//         </header>

//         <nav>
//           <ul>
//             <li
//               className={selectedTab === 'profile' ? 'active' : ''}
//               onClick={() => this.handleTabClick('profile')}
//             >
//               Profile
//             </li>
//             <li
//               className={selectedTab === 'notifications' ? 'active' : ''}
//               onClick={() => this.handleTabClick('notifications')}
//             >
//               Notifications ({notifications.length})
//             </li>
//             {/* Add more tabs as needed */}
//           </ul>
//         </nav>

//         <main>
//           {selectedTab === 'profile' && (
//             <div className="profile-tab">
//               {/* Display user profile information */}
//               <h2>Your Profile</h2>
//               {/* Render user data here */}
//             </div>
//           )}

//           {selectedTab === 'notifications' && (
//             <div className="notifications-tab">
//               {/* Display user notifications */}
//               <h2>Your Notifications</h2>
//               <ul>
//                 {notifications.map((notification, index) => (
//                   <li key={index}>{notification.message}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {/* Add more tab content as needed */}
//         </main>
//       </div>
//     );
//   }
// }

// export default UserDashboard;


import React, { Component } from 'react';

class UserDashBoard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: {}, // Store user data here
      notifications: [], // Store user notifications here
      selectedTab: 'profile', // Default selected tab
    };
  }

  // Fetch user data and notifications when the component mounts
  componentDidMount() {
    // You can fetch user data and notifications from your API here
    // Example:
    // fetchUserData().then(userData => this.setState({ userData }));
    // fetchNotifications().then(notifications => this.setState({ notifications }));
  }

  // Handle tab selection
  handleTabClick = (tab) => {
    this.setState({ selectedTab: tab });
  };

  render() 
  {
    const { userData, notifications, selectedTab } = this.state;
    return (
      <div>
      <h1> WelCome to User-Dashboard</h1>
      <div className="user-dashboard">
         <header>
           <h1>Welcome, {userData.username}</h1>
         </header>

         <nav>
           <ul>
             <li
               className={selectedTab === 'profile' ? 'active' : ''}
              onClick={() => this.handleTabClick('profile')}
            >
              Profile
            </li>
            <li
              className={selectedTab === 'notifications' ? 'active' : ''}
              onClick={() => this.handleTabClick('notifications')}
            >
              Notifications ({notifications.length})
            </li>
            {/* Add more tabs as needed */}
          </ul>
        </nav>

        <main>
          {selectedTab === 'profile' && (
            <div className="profile-tab">
              {/* Display user profile information */}
              <h2>Your Profile</h2>
              {/* Render user data here */}
            </div>
          )}

          {selectedTab === 'notifications' && (
            <div className="notifications-tab">
              {/* Display user notifications */}
              <h2>Your Notifications</h2>
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index}>{notification.message}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Add more tab content as needed */}
        </main>
      </div>
      </div>


    );
  }
}

export default UserDashBoard;
