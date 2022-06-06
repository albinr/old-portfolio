import React, { useState, useEffect, useContext } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavTitle,
} from "./NavbarElements";
import { ThemeContext } from "../../contexts/ThemeStore";
import { FaRegSun, FaRegMoon } from 'react-icons/fa';


const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const { theme, switchTheme } = useContext(ThemeContext);

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
          <NavTitle>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-60}
              >
                AR
              </NavLinks>
          {theme === "dark" ? (
            <FaRegMoon size={32} color="#fff" onClick={() => switchTheme("light")} />
              ) : (
            <FaRegSun size={32} onClick={() => switchTheme("dark")} />
          )}
          </NavTitle>
          
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-60}
              >
                Home
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-60}
              >
                About
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-60}
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
                offset={-60}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
