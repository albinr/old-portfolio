import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.onBackground};
  backdrop-filter: blur(10px);
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SidebarWrapper = styled.div`
  color: ${(p) => p.theme.text};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${(p) => p.theme.text};
  cursor: pointer;
  &:hover {
    color: #4b8ea9;
    transition: 0.2s ease-in-out;
  }
`;