import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/ulogo.png";
import Download from "./Download";

const NavBar = () => {
  return (
    <header className="header">
      <Navbar
        fixed="top"
        variant="light"
        className="bg-dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand className="navbar-brand">
            <img
              src={logo}
              alt="no-logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav w-100 d-flex justify-content-end">
              <LinkContainer className="text-white" to="/">
                <Download />
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
