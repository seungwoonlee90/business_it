import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">ohdangdang</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;