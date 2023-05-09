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
                        <MDBAccordionItem className='text-dark' collapseId={4} headerTitle='Accordion Item #4'>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={5} headerTitle='Accordion Item #5'>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={6} headerTitle='topics'>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                    </MDBAccordion>
                </div>
            </>
        );
    }
}

export default About;
