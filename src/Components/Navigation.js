import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function  Navigation (){
    



return(

<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#home">HOME film</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Add Movie</Nav.Link>
  <Nav.Link href="#pricing">Movie List</Nav.Link>
</Nav>
</Container>
</Navbar>
)
}


