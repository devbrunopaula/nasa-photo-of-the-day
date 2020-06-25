import React from 'react'
import { Button, Nav, Navbar, FormControl, Form, Container } from 'react-bootstrap';
import logo from "../../assets/nasa-logo.svg"

function Navigation() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>

        <Navbar.Brand href="#home"><img src={logo} height="60" alt=""/></Navbar.Brand>
        
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Pictures</Nav.Link>
          <Nav.Link href="#pricing">History</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        
      </Container>
    </Navbar>
   )
}

export default Navigation
