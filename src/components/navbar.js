import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarHeader = ({ logged }) => {

    const handleAuth = (e) => {
        e.preventDefault();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="d-flex justify-content-between">
            <Navbar.Brand href="#home">Read Later</Navbar.Brand>
            <Nav>
                <Nav.Link onClick={handleAuth}>{logged ? 'log out' : 'sign in/up'}</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarHeader;
