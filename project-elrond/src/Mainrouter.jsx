import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeaderComponent from './Includes/HeaderComponent';
import Homepage from './Pages/Homepage.jsx';
import LoginRegistration from './Components/LoginRegistration.jsx';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
            <Homepage />
        </>,

    },
    {
        path: "/loginregistration",
        element:
            <>
                <LoginRegistration />
            </>

    }

]);

export default Mainrouter;