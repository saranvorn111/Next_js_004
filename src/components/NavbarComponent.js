import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>         
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>            
            <Nav.Link href="/countries">Countries</Nav.Link>
            <Nav.Link href="/products">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
