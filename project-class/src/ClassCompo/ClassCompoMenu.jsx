import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <div className="row accordion-item">
          <div className="col-4 mx-auto">
            <ul>
              <li><Link to="classcompointro">What is React Js ? </Link></li>
              <li><Link to="classcompoconstructor">What is NPM in React Js ? </Link></li>
              <li><Link to="classcompostate">What is Role of Node Js in react Js ? </Link></li>
              <li><Link to="classcompostate">What is CLI command In React Js ? </Link></li>
              <li><Link to="classcompostate">What is Components in React Js? </Link></li>
              <li><Link to="classcompostate">What is Header and Content Components in React Js? </Link></li>
              <li><Link to="classcompostate">How to install React Js on Windows, Linux Operating System? </Link></li>
              <li><Link to="classcompostate">How to install NPM and How to check version of NPM? </Link></li>
              <li><Link to="classcompostate">How to check version of React Js ? </Link></li>
              <li><Link to="classcompostate">How to change in components of React Js ? </Link></li>
              <li><Link to="classcompostate">How to Create a List View in React Js ? </Link></li>

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