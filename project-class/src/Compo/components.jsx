import React, { Component } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

class About extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h2 className='mt-3'>Components</h2>
                    <MDBAccordion className='' initialActive={1}>
                        <MDBAccordionItem className='text-dark' collapseId={1} headerTitle='What is React Js ? '>
                            React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={2} headerTitle='What is NPM in React Js ?'>
                            NPM is short for node package manager, an online directory that contains the various already registered open-source packages. NPM modules consume the various functions as a third-party package when installed into an app using the NPM command npm install
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={3} headerTitle='What is Role of Node Js in react Js ?'>
                            NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={4} headerTitle='What is CLI command In React Js ?'>
                            Command-line interfaces (CLIs) built-in Node. js authorize automating repetitive tasks while leveraging the Node. js ecosystem. Package managers like npm and yarn are distributed and ingested across multiple platforms. The Nodejs Commander package is an excellent utility for creating a CLI with NodeJS.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={5} headerTitle='What is Components in React Js?'>
                            Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={6} headerTitle='What is Header and Content Components in React Js?'>
                            Headers are compositions that extend standard navbar functionalities. They contain additional components like a jumbotron, sub-navbar, or image covers which serve as a containers for extra navigation elements - usually links, forms, or call-to-action buttons.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={7} headerTitle='How to install NPM and How to check version of NPM? '>
                            Once you installed Node.js on your computer, you can check the version of npm that was bundled with it.
                            The command to check your npm version is npm -v or npm --version.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={8} headerTitle='How to check version of React Js ?'>
                            there is three types of way  to check react version <br />
                            1.Using package.json file <br />
                            2.Using command line <br />
                            3.Using version property of default import from React <br />
                            <b>Using package.json file</b>
                            <p style={{ "backgroundColor": "wheat" }}>The package.json contains metadata about our project. It is created by default when we create our React project. We can create a react app using the command mentioned below. </p>
                            <p style={{ "border": "1px solid", "padding-left": "50px", "backgroundColor": "gray" }}>npx create-react-app name_of_the_app</p>
                            <b>We can easily check the React version by using the command mentioned below on our command line.</b><br />
                            <p style={{ "border": "1px solid", "padding-left": "50px", "backgroundColor": "gray" }}>npm view react version</p>
                            <b>Using version property of default import from React</b>
                            <p style={{ "backgroundColor": "wheat" }}>The default import from React library is an object that has version property on it. We can use this property inside our JSX elements in our desired manner.  </p>
                            <p style={{ "border": "1px solid", "padding-left": "50px", "backgroundColor": "Silver" }}>import React from 'react';<br />let a = React.version</p>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </div>
            </>
        );
    }
}

export default About;
