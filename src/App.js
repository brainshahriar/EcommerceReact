import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Breadcrumb, Container, Form, FormControl, Nav, Navbar , NavDropdown } from 'react-bootstrap';

class App extends React.Component{




  render(){

    const names = [

      {name:'sha',age:20,grade:2.50},
      {name:'riar',age:15,grade:3.50},
      {name:'mehedi',age:12,grade:7.85}

    ];
    const items = names.map((item,idx)=>{
      return <li class="list-item" key={idx}>

        Name:{item.name},Age: {item.age},Grade:{item.grade}
        <Button variant="outline-info">Edit</Button> <Button variant="outline-danger">Delete</Button>
        


      </li>
    });

    return(
      <div className="App">
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
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container fluid>
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
</Container>

      </div>
    )
  }
}

export default App;
