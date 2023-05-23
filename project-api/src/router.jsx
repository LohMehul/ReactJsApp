import React,{ Suspense } from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import HeaderComp from "./Includes/HeaderComponent.jsx";
import LoginCompo from "./Components/LoginCompoent.jsx";
import FetchAPIExample from "./Components/ApiExample.jsx";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp/><HomePage/></>,
    },
    {
        path: "/about",
        element: <><HeaderComp/><AboutPage></AboutPage></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp/><ContactPage/></>,
    },{
        path: "/login",
        element: <><LoginCompo/></>,
    },{
        path: "/fetchapi",
        element: <><HeaderComp/><FetchAPIExample/></>,
    }

]);


export default MainRouter;