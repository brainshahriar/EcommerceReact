import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "../components/about";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Profile from "../components/profile";
import App from "../App";
import { Breadcrumb, Container, Form, FormControl, Nav, Navbar , NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class header extends Component{
    render(){

      return(
        <Router>
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand>  <Link to="/"> Navbar scroll </Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><Link to="/about">About Us </Link></Nav.Link>
        <Nav.Link><Link to="/contact">Contact Us </Link></Nav.Link>
        <Nav.Link><Link to="/blog">Blog </Link></Nav.Link>
        <Nav.Link><Link to="/profile">Profile </Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
        </Router>
      );

    };
}
export default header;