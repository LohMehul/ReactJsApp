import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Header from "./CommonCompo/Header"
import AboutUs from "./Compo/about"
import Topics from "./Compo/topics.jsx"
import Examples from "./Compo/Examples.jsx"
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
        element: <><Header/> <Examples/></>,
    },
]);

export default router;
