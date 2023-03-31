import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
class PropsChild extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBCardImage src={this.props.imgSrc} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>{this.props.kuchbhi}</MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default PropsChild;