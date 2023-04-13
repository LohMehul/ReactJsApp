import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Header from "./CommonCompo/Header"

const router = createBrowserRouter([
    {
        path: "/",
        element:<Header/>,
    },
    {
        path: "/about",
        element: <div>Hello world!</div>,
    },
]);

export default router;
