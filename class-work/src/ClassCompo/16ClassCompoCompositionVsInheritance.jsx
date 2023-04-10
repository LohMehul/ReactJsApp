import React, { Component } from 'react';
import CompositionChild from './17CompositionChild.jsx';

//composition in React js means accessing child components data into parent component 
//you can access child's data into parent using props but it can not support group of html tags
// in html group tags multiple tags as h1, p, div , br you can access in to parent components
class ClassCompoCompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <h2>Parent Compo</h2>
                {/* <CompositionChild data="<p>From Prant</p>"/> */}
                {/* <CompositionChild data=<><p>From parent</p><>something</></>/> */}
                {/* <><p>From parent</p><>something</></> */}
                <CompositionChild data="this is props data">
                    <h3>Something</h3>
                    <p>This is the data from parent compo with html strucutre</p>
                </CompositionChild>
            </div>
        );
    }
}

export default ClassCompoCompositionVsInheritance;