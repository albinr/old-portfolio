import React from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from "./MobileNavbarElements";
import { MdHome, MdAccountCircle, MdChat, MdAssignment } from "react-icons/md";

const ICON_SIZE = 30;

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
                <MdHome size={ICON_SIZE} />
                <p>Home</p>
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
                <MdAccountCircle size={ICON_SIZE}/>
                <p>About</p>
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
                <MdAssignment  size={ICON_SIZE}/>
                <p>Portfolio</p>
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
                <MdChat size={ICON_SIZE}/>
                <p>Contact</p>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default MobileNavbar;
