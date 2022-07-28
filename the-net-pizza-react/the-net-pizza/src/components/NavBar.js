import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><Link to="/menu">THE NET PIZZA</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link><Link to="/menu">I nostri piatti</Link></Nav.Link>
                <Nav.Link><Link to="/contacts">Contatti</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
