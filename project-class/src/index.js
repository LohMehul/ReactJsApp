import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import RootRouter from './router.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={RootRouter}/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals