import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Container, Form, FormControl, Nav, Navbar , NavDropdown } from 'react-bootstrap';

class header extends Component{
    render(){

      return(
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">About Us</Nav.Link>
        <Nav.Link href="#action2">Contact Us</Nav.Link>
        <Nav.Link href="#action3">Blog</Nav.Link>
        <Nav.Link href="#action3">Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
      );

    };
}
export default header;