import React, { useState, useEffect } from "react";
import {ThemeToggler} from "../ThemeToggle";
import { HiX, HiMenu } from "react-icons/hi";
import {Nav, NavbarContainer, NavTitle, NavMenu, NavItem, NavLinks, MobileIcon} from "./style";

const Navbar = ({toggle, isOpen}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavTitle
          to="home"
          smooth={true}
          spy={true}
          duration={500}
          exact="true"
          offset={0}>
                <p>ALBIN.DEV</p>
          </NavTitle>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={0}
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
                offset={0}
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
