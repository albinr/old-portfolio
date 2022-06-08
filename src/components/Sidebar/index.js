import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home"
          smooth={true}
          spy={true}
          duration={500}
          exact="true"
          offset={-70}
          onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="portfolio" smooth={true}
            spy={true}
            duration={500}
            exact="true"
            offset={-70}onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink 
            to="contact" smooth={true}
            spy={true}
            duration={500}
            exact="true"
            offset={-70}onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;