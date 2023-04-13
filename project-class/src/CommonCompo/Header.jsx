import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";


export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar className='' expand='lg' light bgColor=''>
            <MDBContainer className='container'>
                <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

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
                        <Link className='nav-link' to='/'>Home</Link>
                            {/* <MDBNavbarLink active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <Link className='nav-link' to='/about'>About us</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <Link className='nav-link' to='/topics'>Topics</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <Link className='nav-link' to='/examples'>Examples</Link>
                        </MDBNavbarItem>
                        

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Dropdown
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}