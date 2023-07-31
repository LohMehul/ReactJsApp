import React from 'react';
// import LifeCycleCompo from "./LifeCycleCompo.jsx";
import "../style/home.css"
import { Link } from "react-router-dom"
const home = () => {
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col mt-5 mb-5 title">
                    <h1>list of Assignment</h1>
                    <ul className='h-assignment'>
                        <li>
                            <Link className='link' to="/components"> MODULE: (JavaScript Essentials)</Link>
                        </li>
                        <li>
                            <Link className='link' to="/Examples">MODULE: (Advance JavaScript Essentials)</Link>
                        </li>
                        <li>
                            <Link className='link' to="/lifecycle"> MODULE: (List and Hooks)</Link>
                        </li>
                        <li>
                            <Link className='link' to="/styling"> MODULE: (Styling & Advance React)</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <LifeCycleCompo/>*/}
        </div>
    );
};

export default home;
