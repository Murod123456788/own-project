import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import '../components/Navbar.css'
import {Link} from 'react-router-dom';
import logo from '../image/logo.png'


const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar  light expand="md">
       <Link to="/" className="navbar-brand">
          <img className="nav-logo" src={logo} href=""/>
          <b>Locus</b>
       </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/setup">Setup</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about-me">About me</Link>
                        </NavItem>
          </Nav>
          <Button className="btn">Sign Up</Button>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Navbars;