import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <div className="row accordion-item">
          <div className="col-4 mx-auto">
            <ul>
              <li><Link to="classcompointro">What is React Js ?</Link></li>
              <li><Link to="classcompoconstructor">Constuctor</Link></li>
              <li><Link to="classcompostate">State In Class Compo</Link></li>
              <li><Link to="classcompojsx">JSX In Class Compo</Link></li>
              <li><Link to="classcompoporps">Class Compo Props</Link></li>
              <li><Link to="classcompostatelifecycle">Class Compo State LifeCycle</Link></li>
              <li><Link to="classcompostatelifecycleloader">Class Compo State LifeCycle Loader</Link></li>
              <li><Link to="classcompoconditionalrendering">Class Compo Conditional rendering</Link></li>
              <li><Link to="classcompolistandkeys">Class Compo List and Keys</Link></li>
            </ul>
          </div>
          <div className="col-8 ">
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCompoIntro;