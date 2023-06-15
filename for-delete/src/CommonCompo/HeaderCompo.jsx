import React ,{ useState }from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Headerfile = () => {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const MenuObject = { "/home": "Home", "/login": "Singin" ,"/accessstore":"Access Store Data"}
    // let content = MenuObject.map((data, key) => {
    let content = Object.entries(MenuObject).map((data, key) => {
        return <MDBNavbarItem key={key}>
            <Link className='nav-link' to={data[0]}>{data[1]}</Link>
        </MDBNavbarItem>
    })
    // console.log(content);
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            {content}
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/examples'>Example</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default Headerfile;