import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<Navigate to="/home" replace />
    },{
        path: "/home",
        element: <HomePage />,
    }
]);
export default MainRoutes;