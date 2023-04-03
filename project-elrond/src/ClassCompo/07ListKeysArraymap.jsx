import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListKeysArraymap extends Component {
    render() {

        let MenuData = { "/": "Home", "/about": "About", "/examples": "Examples", "classcompo": "Class Compo" }

        let MenuItem = Object.entries(MenuData).map(([key, data], index) => {
            return <li key={index}> <Link to={key}>{data}</Link> </li>
        })
        return (
            <div>
                {/* test */}
                <p>store your data in array as object </p>
                <p>after that access that data </p>
                {MenuItem}
                {/* {printData}
                {arr.forEach(element => {
                    console.log(element); 
                    <li>{element}</li>
                })} */}
            </div>
        );
    }
}

export default ListKeysArraymap;