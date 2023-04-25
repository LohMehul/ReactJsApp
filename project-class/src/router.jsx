import React,   {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Header from "./CommonCompo/Header"
import AboutUs from "./Compo/about"
import Topics from "./Compo/topics.jsx"
import Examples from "./Compo/Examples.jsx"

// const ClassCompoRoute = React.lazy(()=>{ return import('./ClassCompo/ClassCompoRoute.jsx') }) 
const router = createBrowserRouter([
    {
        path: "/",
        element:<Header/>,
    },
    {
        path: "/about",
        element: <><Header/> <AboutUs/></>,
    },
    {
        path: "/topics",
        element: <><Header/> <Topics/></>,
    },
    {
        path: "/examples",
    },
    {
        path: "/examples",   // if URL give /examples after home page or index page below mentioned Components. 
        element: <><Header/> <Examples/></>,
        // children: [
        //     {
        //       path: "classcompo/*",  // To declare lazy loading * is used.
        //       element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>,
        //     },
        // ]
    },
]);

export default router;
