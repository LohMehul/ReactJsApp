import React,   {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Header from "./CommonCompo/Header"
import AboutUs from "./Compo/components"
import Topics from "./Compo/topics.jsx"
import Examples from "./ExampleCompo"

const ClassCompoRoute = React.lazy(()=>{ return import('./ClassCompo/ClassCompoRoute.jsx') }) 
const StateCompoRoute = React.lazy(()=>{ return import('./StateCompo/StateCompoRoute.jsx') }) 
const PropsCompoRoute = React.lazy(()=>{ return import('./PropsCompo/PropsCompoRoute.jsx') }) 
const router = createBrowserRouter([
    {
        path: "/",
        element:<Header/>,
    },
    {
        path: "/components",
        element: <><Header/> <AboutUs/></>,
    },
    {
        path: "/topics",
        element: <><Header/> <Topics/></>,
    },

    {
        path: "/examples",   // if URL give /examples after home page or index page below mentioned Components. 
        element: <><Header/> <Examples/></>,
        children: [
            {
              path: "components/*",  // To declare lazy loading * is used.
              element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>,
            },
            {
              path: "statecompo/*",  // To declare lazy loading * is used.
              element: <Suspense fallback={<h2>Loading...</h2>}><StateCompoRoute/></Suspense>,
            },
            {
              path: "propscompo/*",  // To declare lazy loading * is used.
              element: <Suspense fallback={<h2>Loading...</h2>}><PropsCompoRoute/></Suspense>,
            },
        ]
    },
]);

export default router;
