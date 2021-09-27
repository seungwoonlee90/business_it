import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation(){
    return(
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">OH!Dang Dang</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;