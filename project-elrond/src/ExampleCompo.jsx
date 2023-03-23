import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const ExampleCompo = () => {
    return (
        <>
            <div className='container'>
                <div className='col'>
                    <div className='row'>
                        <MDBCard className='col-3'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className='col-3'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className='col-3'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className='col-3'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExampleCompo;