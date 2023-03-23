import React, { Component } from 'react';

class ClassCompoState extends Component {
    constructor(props) {
        super(props);
        this.state = {data:"Something"}
        // this.changeData = this.changeData.bind(this)
    }
    // changeData =()=>{
    //     console.log("called");
    // }
    // changeData(){
    //     console.log("called");
    //     // Something = "Change"
    //     this.setState({data:"Testing"})
    // }
    changeData=()=>{
        console.log("called");
        // Something = "Change"
        this.setState({data:"Testing"})
    }
    
    render() {
        let Something = "Data"
        // const changeDataFunc=()=>{
        //     console.log("called");
        //     Something = "Change"
        // }
        return (
            <>
                <p>Change Data</p>
                {/* <button onClick={changeDataFunc}>Click</button> */}
                <button onClick={this.changeData}>Click</button>
                {Something}
                <p><strong>State</strong>{this.state.data}</p>
                
            </>
        );
    }
}

export default ClassCompoState;