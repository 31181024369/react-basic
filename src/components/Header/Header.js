import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#home">HOI DAN IT</Navbar.Brand> */}
          <NavLink to="/" className='nav-brand'>HOI DAN IT</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/" className='nav-link'>Home</NavLink>
                <NavLink to="/user" className='nav-link'>User</NavLink>
                <NavLink to="/admin" className='nav-link'>Admin</NavLink>

              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/user">Users</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link> */}
            </Nav>
            <Nav>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Log out
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;