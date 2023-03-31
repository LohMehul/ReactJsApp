import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="classcompointro">Class Compo Intro</Link></li>
          <li><Link to="classcompoconstructor">Constuctor</Link></li>
          <li><Link to="classcompostate">State In Class Compo</Link></li>
          <li><Link to="classcompojsx">JSX In Class Compo</Link></li>
          <li><Link to="classcompoporps">Class Compo Props</Link></li>
          <li><Link to="classcompostatelifecycle">Class Compo State LifeCycle</Link></li>
          <li><Link to="classcompostatelifecycleloader">Class Compo State LifeCycle Loader</Link></li>
          <li><Link to="classcompoconditionalrendering">Class Compo Conditional rendering</Link></li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}

export default ClassCompoIntro;