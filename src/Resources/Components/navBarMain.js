import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../index.css';

const NavBarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Setup Navbar General Format */}
      <Navbar className="pl-0 sticky-top bg-dark py-0" color="light" light expand="md">
        {/* Navbar Brand (Logo &/or name) */}
        <NavbarBrand className="p-3" style={{backgroundColor : "darkblue", color : "white", border : "1px solid grey"}} href="/">Daniel Ruch</NavbarBrand>
        {/* Toggler to condense Navbar items */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* Resume Nav Item (works like a button) */}
            <NavItem>
              <NavLink style={{color: "white"}} href="/components/">Resume</NavLink>
            </NavItem>
            {/* GitHub Nav Item*/}
            <NavItem>
              <NavLink style={{color: "white"}} href="https://www.github.com/DanielRuch">GitHub</NavLink>
            </NavItem>
            {/* Create Uncontrolled Dropdown Menu */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: "white"}}>
                Connect
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.linkedin.com/in/daniel-ruch/">
                  <i className="icon-linkedin"/>
                  LinkedIn
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{color: "white"}}>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarMain;