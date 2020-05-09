import React, { useState } from "react";
import {Nav, Navbar} from "react-bootstrap"

function Navbars() {


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>

      </Navbar.Collapse>


    </Navbar>
  );
}

export default Navbars;
