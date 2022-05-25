import React from "react";
import { FooterContainer, Link, Icon, CurveDiv } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <Link
        to="home"
        smooth={true}
        spy={true}
        duration={400}
        exact="true"
        offset={-80}
      >
        <CurveDiv>
          <Icon />
        </CurveDiv>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
