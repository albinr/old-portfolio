import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  IconBox,
  ItemBox,
  CircleDiv,
  GitIcon,
  LinkedInIcon,
  TwitterIcon,
  EmailIcon,
  Title,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <Title>
            <h1>Contact me</h1>
          </Title>
          <IconBox>
            <ItemBox>
              <CircleDiv href="https://github.com/AlbinR" target="_blank">
                <GitIcon />
              </CircleDiv>
              <h1>GitHub</h1>
              <p>AlbinR</p>
            </ItemBox>
            <ItemBox>
              <CircleDiv
                href="https://www.linkedin.com/in/albin-ryberg-bb22341a6/"
                target="_blank"
              >
                <LinkedInIcon />
              </CircleDiv>
              <h1>Linked In</h1>
              <p>Albin Ryberg</p>
            </ItemBox>
            <ItemBox>
              <CircleDiv href="https://twitter.com/AlbinRyberg" target="_blank">
                <TwitterIcon />
              </CircleDiv>
              <h1>Twitter</h1>
              <p>@AlbinRyberg</p>
            </ItemBox>
            <ItemBox>
              <CircleDiv href="mailto: albin@rybergs.net">
                <EmailIcon />
              </CircleDiv>
              <h1>Email</h1>
              <p>albin@rybergs.net</p>
            </ItemBox>
          </IconBox>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
