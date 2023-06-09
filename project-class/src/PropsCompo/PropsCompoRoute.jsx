import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import PropsCompoMenu from './PropsCompoMenu';
import PropsExample from './Props';
// import ClassCompoConstructor from './02ClassCompoConstructor.jsx';
// import ClassCompoState from './03ClassCompoState.jsx';
// import ClassCompojsx from './04ClassCompojsx.jsx';
// import ProspExample from './05Props';
// import ConditionalRendering from "./conditionalrender"
// import StateLifeCycle from './07statelifecycle';
// import ClassCompoLoader from './08statelifecycleloader';
// import ListAndKeys from "./07ListKeysArraymap"

class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<PropsCompoMenu />} >
                        <Route path="props" element={<PropsExample />} />
                        {/* <Route path="classcompoconstructor" element={<ClassCompoConstructor />} /> */}
                        {/* <Route path="classcompostate" element={<ClassCompoState />} /> */}
                        {/* <Route path="classcompojsx" element={<ClassCompojsx />} /> */}
                        {/* <Route path="classcompoporps" element={<ProspExample />} /> */}
                        {/* <Route path="classcompostatelifecycle" element={<StateLifeCycle />} /> */}
                        {/* <Route path="classcompostatelifecycleloader" element={<ClassCompoLoader />} /> */}
                        {/* <Route path="classcompoconditionalrendering" element={<ConditionalRendering />} /> */}
                        {/* <Route path="classcompolistandkeys" element={<ListAndKeys/>} /> */}
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;