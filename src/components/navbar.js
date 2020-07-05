import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'firebase/auth';
import firebase from '../firebase';
import withFirebaseAuth from 'react-with-firebase-auth'

// const firebaseApp = firebase.initializeApp(firebase);
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//     googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

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
// export default withFirebaseAuth({
//     providers,
//     firebaseAppAuth,
// })(NavbarHeader);