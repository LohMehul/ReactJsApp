import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from "./CommonCompo/Header"
import Home from "./Compo/home.jsx"
import AboutUs from "./Compo/components"
import LifeCycle from "./Compo/topics.jsx"
import Examples from "./ExampleCompo"
import ClassLifeCycle from "./Compo/classlifecycle.jsx"
import FuncLifeClass from "./Compo/funclifecycle.jsx"
const ClassCompoRoute = React.lazy(() => { return import('./ClassCompo/ClassCompoRoute.jsx') })
const StateCompoRoute = React.lazy(() => { return import('./StateCompo/StateCompoRoute.jsx') })
const PropsCompoRoute = React.lazy(() => { return import('./PropsCompo/PropsCompoRoute.jsx') })
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><Home/></>,
  },
  {
    path: "/components",
    element: <><Header /> <AboutUs /></>,
  },
  {
    path: "/lifecycle",
    element: <><Header /> <LifeCycle /></>,
    children: [
      {
        path: "classlifecycle",  // To declare lazy loading * is used.
        element: <><ClassLifeCycle/></>,
      },
      {
        path: "funclifecycle",  // To declare lazy loading * is used.
        element: <FuncLifeClass />,
      },]
  },

  {
    path: "/examples",   // if URL give /examples after home page or index page below mentioned Components. 
    element: <><Header /> <Examples /></>,
    children: [
      {
        path: "components/*",  // To declare lazy loading * is used.
        element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute /></Suspense>,
      },
      {
        path: "statecompo/*",  // To declare lazy loading * is used.
        element: <Suspense fallback={<h2>Loading...</h2>}><StateCompoRoute /></Suspense>,
      },
      {
        path: "propscompo/*",  // To declare lazy loading * is used.
        element: <Suspense fallback={<h2>Loading...</h2>}><PropsCompoRoute /></Suspense>,
      },
    ]
  },
]);

export default router;
