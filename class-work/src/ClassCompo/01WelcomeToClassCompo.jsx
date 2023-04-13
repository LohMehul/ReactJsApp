// import React, { Component } from 'react';

// class WelcomeToClassCompo extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Components are small peace of web page</p>
//                 <p>in reactJs we define component using class concepts are called class compo</p>
//                 <p>not like JS in React there is not require to create an object of that class but we just needs to inherit React.Compo prop</p>
//                 <p>and render will do return in class compo</p>
//             </div>
//         );
//     }
// }

// export default WelcomeToClassCompo;



// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;