import React from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavTitle,
  NavLinks,
  MobileIcon,
} from "./NavbarElements";
import {ThemeToggler} from "../ThemeToggle";
import { HiX, HiMenu } from "react-icons/hi";


const Navbar = ({toggle, isOpen}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavTitle
          to="home"
          smooth={true}
          spy={true}
          duration={500}
          exact="true"
          offset={-100}>
                <p>albinr</p>
          </NavTitle>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                Portfolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                Contact
              </NavLinks>
            </NavItem>
            <ThemeToggler/>
          </NavMenu>
          <MobileIcon onClick={toggle}>
            {isOpen ? <HiX /> : <HiMenu /> }
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
