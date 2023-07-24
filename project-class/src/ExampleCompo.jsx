import React from 'react';
import ClassAndFunctionCompo from "./ClassAndFunctionCompo.jsx"



const ExampleCompo = () => {
    return (
        <div className='container'>
        <div className="row mt-3">
            <div className="col mt-5 mb-5">
                <h2 className='text-center'>React - Components, State, Props Assignment</h2>
            </div>
        </div>
        <ClassAndFunctionCompo/> 
        </div>
    );
};

export default ExampleCompo;