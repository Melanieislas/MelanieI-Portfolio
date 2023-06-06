import React from 'react';
import '../components/Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import '../components/Navigation.css'


function NavBar() {
    return (
    <>
    <Navbar className='main-navbar'>
        <Container >
            <Navbar.Brand href="#home">
                <h2 className='name'>Melanie Islas</h2>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>);
}

export default NavBar;