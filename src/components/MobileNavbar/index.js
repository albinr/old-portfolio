import React from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from "./MobileNavbarElements";
import { MdHome, MdAccountCircle, MdChat, MdAssignment } from "react-icons/md";

const MobileNavbar = () => {
//   const [scrollNav, setScrollNav] = useState(false);

//   const changeNav = () => {
//     if (window.scrollY >= -80) {
//       setScrollNav(true);
//     } else {
//       setScrollNav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeNav);
//   }, []);

  return (
    <>
      {/* <Nav scrollNav={scrollNav}> */}
      <Nav>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdHome />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdAccountCircle />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdAssignment />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                <MdChat />
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default MobileNavbar;
