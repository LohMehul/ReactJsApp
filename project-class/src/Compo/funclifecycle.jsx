import React, { useEffect } from "react";

// const funclifecycle = () => {
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//         document.title = `Time is: ${new Date()}`;
//         }, 1000);
//         return () => {
//           document.title = "Time stopped.";
//           clearInterval(intervalId);
//         }
//       }, []);
     
//       return <h1>What time is it?</h1>;
// };

// export default funclifecycle;

 
const Component = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = `Time is: ${new Date()}`;
    }, 1);
 
    return () => {
      document.title = "Time stopped.";
      clearInterval(intervalId);
    }
  }, []);
 
  return <h1>What time is it?</h1>;
};

export default Component;