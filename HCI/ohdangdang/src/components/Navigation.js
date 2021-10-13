import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">OH!Dang Dang</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}

export default Navigation;