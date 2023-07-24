import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Classlifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }

    changeState() {
        this.setState({ hello: " Class" });
    }

    render() {
        return (
            <div>

            <p style={{background:"#A7FBFE"}}>Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the componet`s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows. </p>
            <p><b>Initialization</b>: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.</p>
            <p><b>Mounting</b>: Mounting is the stage of rendering the JSX returned by the render method itself.</p>
            <p><b>Updating</b>: Updating is the stage when the state of a component is updated and the application is repainted.</p>
            <p><b>Unmounting</b>:  As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</p>




                <h1>Example</h1>
                <h2>Hello{this.state.hello}</h2>
                <h2>
                    <Link onClick={this.changeState.bind(this)}>Press Here!</Link>
                </h2>
            </div>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

export default Classlifecycle;
