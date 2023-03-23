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
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}

export default ClassCompoIntro;