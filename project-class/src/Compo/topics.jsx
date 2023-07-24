import React, { Component } from 'react';
import LifeCycleCompo from "./LifeCycleCompo.jsx";

class Topics extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col mt-5 mb-5">
                            <h2 className='text-center'>Explain Life cycle in Class Component and functional component with Hooks</h2>
                        </div>
                    </div>
                    <LifeCycleCompo />
                </div>
            </>
        );
    }
}

export default Topics;
