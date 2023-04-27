import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

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
      </>
    );
  };
  
  export default SocialList;