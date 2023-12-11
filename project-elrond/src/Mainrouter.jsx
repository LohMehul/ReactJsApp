import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeaderComponent from './Includes/HeaderComponent';
import Homepage from './Pages/Homepage.jsx';
import LoginRegistration from './Components/LoginRegistration.jsx';
import Imagelist from './Pages/Imagelist.jsx';
import Personaldetail from './Includes/Contact.jsx';

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

    }, {
        path: "/imagelist",
        element: <>
            <HeaderComponent />
            <Imagelist />
        </>,

    },{
        path: "/contact",
        element: <>
            <HeaderComponent />
            <Personaldetail />
        </>,

    }

]);

export default Mainrouter;