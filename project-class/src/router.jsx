import React from 'react';
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/about",
        element: <div>Hello world!</div>,
    },
]);

export default router;
