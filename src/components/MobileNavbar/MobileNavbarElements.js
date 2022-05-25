import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#171a21" : "transparent")};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  position: fixed;
  bottom: 20px;
  z-index: 10;
  transition: 0.5s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(23,26,33, 0.9);
  border-radius: 20px;
  z-index: 1;
  padding: 0 20px;
  /* max-width: 1100px; */
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled(LinkS)`
  color: gray;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;

  &.active {
    border-bottom: 2px solid #3498db;
    /* box-shadow: 0 12px 7px 6px #3498db; */
    /* box-shadow: 0 0 10px -20px #3498db inset, 0 0 10px -4px #3498db; */
    color: #fff;
    transition: 0;
  }
  &:hover {
    color: #fff;
  }
`;