import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { Link as LinkS, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const Socials = styled.div`
  position: fixed;
  left: 50px;
  top: 50%;
  transform: translate(0, -50%);
  color: ${(p) => p.theme.text};
  a{
    color: ${(p) => p.theme.text};
  }
  ul{
    text-decoration: none;
    list-style: none;
    padding: 0;
  }
  li{
    padding: 10px;  
  }
  @media screen and (max-width: 768px) {
    display: none;
  };
`;
const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translate(0, -50%);

  color: ${(p) => p.theme.text};
`;


const NavLinks = styled(LinkS)`
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

console.log()

const SocialList = () => {

    return (
      <>
        <Socials>
          <ul>
            <li>
              <a href="https://github.com/albinr"><FaGithub size={30}/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/albin-ryberg/"><FaLinkedinIn size={30}/></a>
            </li>
            <li>
              <a href="https://twitter.com/albinryberg"><FaTwitter size={30}/></a>
            </li>
            <li>
              <a href="mailto:albin@rybergs.net"><FaEnvelope size={30}/></a>
            </li>
          </ul>
        </Socials>
        <ScrollBtn>
          
            <a onClick={() => scroll.scrollMore(-500)}><FaChevronCircleUp size={30}/></a>
            <a onClick={() => scroll.scrollMore(500)}><FaChevronCircleDown size={30}/></a>
        
        </ScrollBtn>
      </>
    );
  };
  
  export default SocialList;