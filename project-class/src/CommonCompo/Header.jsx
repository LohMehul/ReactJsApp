import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    // MDBNavbarLink, 
    MDBNavbarItem,
    // MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";


export default function     App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar className='' expand='lg' light bgColor=''>
            <MDBContainer className='container'>
                <MDBNavbarBrand href='#' style={{fontSize:"50px",color:"blue" }}><i class="fa-brands fa-react"></i></MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 text-bg-info'>
                        <MDBNavbarItem>
                        <Link className='nav-link' style={{fontSize:"25px"}} to='/'>Home</Link>
                            {/* <MDBNavbarLink active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <Link className='nav-link' to='/components'>Components</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <Link className='nav-link' to='/lifecycle'>LifeCycle</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <Link className='nav-link' to='/examples'>Examples</Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    {/* <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form> */}
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}