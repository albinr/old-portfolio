import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ?  (p) => p.theme.background : "transparent")};
  /* backdrop-filter: blur(4px); */
  /* background: ${(p) => p.theme.background}; */
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.5s all ease;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
  border-bottom: ${({ scrollNav }) => (scrollNav ? "1px solid rgba(0, 0, 0, 0.2)"  : "1px solid rgba(0, 0, 0, 0)")};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1100px;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
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
  /* width: 300px; */
  border-radius: 6px;
  /* background: ${(p) => p.theme.background}; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 40px;
`;

export const NavTitle = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled(LinkS)`
  color:${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  /* border: 1px solid transparent; */

  &.active {
    transition: 0.2s all ease-out;
    color: ${(p) => p.theme.accent};
    /* background: ${(p) => p.theme.background}; */
  }
  &:hover {
    color: ${(p) => p.theme.accent};
    transition: 0.2s all ease-out;
    background: ${(p) => p.theme.background};
  }
`;