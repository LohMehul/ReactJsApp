import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx"; //import home page as HomePage , but before import it must be exported .
import AboutPage from "./AboutPage.jsx"; //import AboutPage as AboutPage , but before import it must be exported .
// import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./CommonCompo/Header.jsx"; //import header page as HeaderComp , but before import it must be exported .
import ExampleCompo from "./ExampleCompo.jsx"; //import ExampleCompo page as ExampleCompo , but before import it must be exported .

const MainRouter = createBrowserRouter([
    {
        path: "/", // this path show Home Page or main index page
        element: <><HeaderComp /><HomePage /></>,
    },
    {
        path: "/about", // if URL give /about after home page or index page below mentioned Components. 
        element: <><HeaderComp /><AboutPage /></>,
    },
    {
        path: "/examples",
        element: <><HeaderComp /><ExampleCompo /></>, // if URL give /about after home page or index page below mentioned Components
    },
]);

export default MainRouter;  // export router to access it whenever it was imported , to access router out side to this file you must(compulsory) have to export it.