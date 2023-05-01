import React from 'react';
import {Link, Outlet} from "react-router-dom";



const ClassAndFunctionCompo = () => {
    return (
        <>
            <div className='container'>

                <div className="row mt-1">
                    <div className="col-4">
                        <Link to="components">
                            <h3 className='text-center'>Components</h3>
                        </Link>

                    </div>
                    <div className="col-4">
                        <Link to="statecompo">
                            <h3 className='text-center'>State</h3>
                        </Link>

                    </div>
                    <div className="col-4">
                        <Link to="propscompo">
                            <h3 className='text-center'>Props</h3>
                        </Link>

                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default ClassAndFunctionCompo;


