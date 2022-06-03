import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "rgba(0,0,0,0.2)" : "transparent")};
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    display: none;
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
  max-width: 1000px;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
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
  font-size: 20px;
  letter-spacing: 2px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;

  &.active {
    border-bottom: 2px solid #3498db;
    /* box-shadow: 0 12px 7px 6px #3498db; */
    /* box-shadow: 0 0 10px -20px #3498db inset, 0 0 10px -4px #3498db; */
    color: #000;
    transition: 0;
  }
  &:hover {
    color: #000;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
