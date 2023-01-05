import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./NavbarElements";
import {ThemeToggler} from "../ThemeToggle";
import { HiX, HiMenu } from "react-icons/hi";


const Navbar = ({toggle, isOpen}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
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
          {/* <NavTitle>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-70}
              >
                <p>Ryberg</p>
              </NavLinks>
          </NavTitle> */}
          
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-70}
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
                offset={-70}
              >
                About
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="skills"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-60}
              >
                Skills
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-70}
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
                offset={-70}
              >
                Contact
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              
            </NavItem> */}
          </NavMenu>
          <ThemeToggler/>
          <MobileIcon onClick={toggle}>
            {isOpen ? <HiX /> : <HiMenu /> }
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
