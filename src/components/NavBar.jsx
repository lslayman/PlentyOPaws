import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
    return (
      <>
        <Navbar bg="light" variant="light" sticky="top">
          <Container>
            <Navbar.Brand href="/">Plenty o' Paws</Navbar.Brand>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/favorites">The Faves</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
