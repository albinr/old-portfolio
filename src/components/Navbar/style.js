import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${(p) => p.theme.nav};
  backdrop-filter: blur(10px);
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0 25px;  
  };
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`;

export const MobileIcon = styled.div`
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

export const NavMenu = styled.ul`
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

export const NavItem = styled.li`
`;

export const NavTitle = styled(LinkS)`
  color:${({ theme }) => theme.gray};
  display: flex;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid ${(p) => p.theme.gray};
  p{
    /* padding: 10px; */
    margin: 0;
    strong{
      background-color: black;
      color: white;
      padding: 0 2px;
    }
  }
  &.active {
    /* transition: 0.2s all ease-out;
    color: ${(p) => p.theme.accent}; */
  }
  &:hover {
    color: ${(p) => p.theme.accent};
    transition: 0.2s all ease-out;
  }
`;

export const NavLinks = styled(LinkS)`
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