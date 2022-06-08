import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "rgba(0,0,0,0.2)" : "transparent")}; */
  /* background: #fff; */
  backdrop-filter: blur(10px);
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.5s all ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 850px;
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
    /* transform: translate(-100%, 60%); */
    font-size: 2rem;
    cursor: pointer;
    color: ${(p) => p.theme.text};
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  width: 300px;
  border-radius: 6px;
  background: ${(p) => p.theme.background};
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
  border-radius: 6px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 1px solid transparent;

  &.active {
    transition: 0.2s all ease-out;
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.background};
    /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid #ccc;
  }
  &::after{
    /* transition: 0.2s all ease-out; */
  }
  &:hover {
    /* color: #000; */
    transition: 0.2s all ease-out;
    border-radius: 6px;
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.background};
    border: 1px solid #ccc;
    /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;