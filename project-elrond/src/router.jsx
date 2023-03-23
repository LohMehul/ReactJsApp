import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
// import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./CommonCompo/Header.jsx";
import ExampleCompo from "./ExampleCompo.jsx";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp /><HomePage /></>,
    },
    {
        path: "/about",
        element: <><HeaderComp /><AboutPage /></>,
    },
    {
        path: "/examples",
        element: <><HeaderComp /><ExampleCompo /></>,
    },
]);

export default MainRouter;