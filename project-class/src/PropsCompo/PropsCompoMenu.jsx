import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <div className="row accordion-item">
          <div className="col-4 mx-auto">
            <ul>
              <li><Link to="props">props</Link></li>
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