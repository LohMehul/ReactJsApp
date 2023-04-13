import React, { Component } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

class About extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h2>topics</h2>




                    <MDBAccordion className='' initialActive={1}>
                        <MDBAccordionItem className='text-dark' collapseId={1} headerTitle='Statics'>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={2} headerTitle='Accordion Item #2'>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                        <MDBAccordionItem className='text-dark' collapseId={3} headerTitle='Accordion Item #3'>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
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
