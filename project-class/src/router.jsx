import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Header from "./CommonCompo/Header"
import AboutUs from "./Compo/about"

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
        element: <><Header/> <AboutUs/></>,
    },
    {
        path: "/examples",
        element: <><Header/> <AboutUs/></>,
    },
]);

export default router;
