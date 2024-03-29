import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import LoginCompo from "./Componenet/LoginCompoent"
import UserDashBoard from "./Pages/UserDashBoard.jsx"
const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<Navigate to="/home" replace />
        // element: <HomePage />,

    },{
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginCompo />,
    },
    {
        path: "/userdashboard",
        element: <UserDashBoard />,
    }
]);
export default MainRoutes;