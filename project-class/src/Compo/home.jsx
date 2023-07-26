import React from 'react';
// import LifeCycleCompo from "./LifeCycleCompo.jsx";

import {Link} from "react-router-dom"
const home = () => {
    return (
        <div className='container'>
        <div className="row mt-3">
            <div className="col mt-5 mb-5">
            <h1>list of Assignment</h1>
            <ul>
                <li>
                    <Link to ="./Examples"> examples</Link>
                </li>
            </ul>
            </div>
        </div>
        {/* <LifeCycleCompo/>     */}
        </div>
    );
};

export default home;
