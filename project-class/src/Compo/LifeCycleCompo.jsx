import React from 'react';
import {Link, Outlet} from "react-router-dom";

const LifeCycleCompo = () => {
    return (
        <>
        <div className='container'>

            <div className="row mt-1">
                <div className="col-6">
                    <Link to="classlifecycle">
                        <h3 className='text-center'>Life cycle in Class Component</h3>
                    </Link>

                </div>
                <div className="col-6">
                    <Link to="funclifecycle">
                        <h3 className='text-center'>Life cycle in Function Component</h3>
                    </Link>

                </div>
            </div>
            <Outlet></Outlet>
        </div>
    </>
    );
};

export default LifeCycleCompo;