import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  ToggleDiv,
} from "./MobileNavbarElements";
import { MdHome, MdChat, MdBook } from "react-icons/md";
import { ThemeToggler } from "../ThemeToggle";

const ICON_SIZE = 30;

const MobileNavbar = () => {

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
        <ToggleDiv>
          <ThemeToggler/>
        </ToggleDiv>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdHome size={ICON_SIZE} />
                <p>Home</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdBook  size={ICON_SIZE}/>
                <p>Portfolio</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdChat size={ICON_SIZE}/>
                <p>Contact</p>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        
      </Nav>
    </>
  );
};

export default MobileNavbar;
