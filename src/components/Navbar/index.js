import React from "react";
import styled from "styled-components";
import {ThemeToggler} from "../ThemeToggle";
import { HiX, HiMenu } from "react-icons/hi";
import { Link as LinkS } from "react-scroll";

const Nav = styled.nav`
  background-color: ${(p) => p.theme.nav};
  backdrop-filter: blur(10px);
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0 25px;  
  };
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-size: 1.7rem;
    padding: 4px;
    cursor: pointer;
    color: ${(p) => p.theme.text};
    transition: 0.2s all ease-out;
    background: ${(p) => p.theme.background};
  } ;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  border-radius: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
`;

const NavTitle = styled(LinkS)`
  color:${({ theme }) => theme.gray};
  display: flex;
  text-decoration: none;
  cursor: pointer;

  &.active {
    transition: 0.2s all ease-out;
    color: ${(p) => p.theme.accent};
  }
  &:hover {
    color: ${(p) => p.theme.accent};
    transition: 0.2s all ease-out;
  }
`;

const NavLinks = styled(LinkS)`
  color:${({ theme }) => theme.gray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  &.active {
    transition: 0.2s all ease-out;
    color: ${(p) => p.theme.accent};
  }
  &:hover {
    color: ${(p) => p.theme.accent};
    transition: 0.2s all ease-out;
  }
`;


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
          offset={0}>
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
