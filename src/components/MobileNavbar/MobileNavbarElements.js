import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "transparent")};
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;
  transition: 0.5s all ease;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(23,26,33, 0.9); */
  border-radius: 20px;
  z-index: 1;
  /* padding: 0 16px; */
  /* max-width: 1100px; */
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.background};
  border-radius: 6px;
  list-style: none;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  /* height: 60px; */
`;

export const NavLinks = styled(LinkS)`
  color:${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-size: 0.7rem;
  padding: 0 2.3rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid transparent;

  &.active {
    transition: 0.2s all ease-out;
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.background};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* box-shadow: 0 12px 7px 6px #3498db; */
    /* box-shadow: 0 0 10px -20px #3498db inset, 0 0 10px -4px #3498db; */
  }
  &:hover {
    color: ${(p) => p.theme.text};
  }
`;

export const ToggleDiv = styled.div`
  position: absolute;
  left: 10px;
`;