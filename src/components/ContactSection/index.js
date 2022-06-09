import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  // Socials,
  // ContactContent,
  // ContentBox,
} from "./ContactElements";
import ContactForm from "../ContactForm";
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { HiMail } from 'react-icons/hi';
import { MdChat } from "react-icons/md";

const ContactSection = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <Title>
            <h1>Contact me</h1> <MdChat size={40}/>
          </Title>
          <ContactForm />
          {/* <ContactContent>
            <ContentBox>
              <Socials>
                <a href="mailto: albin@rybergs.net" target="_blank" rel="noreferrer"><div><HiMail size={40}/><p>Email</p></div><p>albin@rybergs.net</p></a>
                <a href="https://github.com/AlbinR" target="_blank" rel="noreferrer"><div><FaGithub size={40}/><p>Github</p></div><p>AlbinR</p></a>
                <a href="https://www.linkedin.com/in/albin-ryberg-bb22341a6/" target="_blank" rel="noreferrer"><div><FaLinkedin size={40}/><p>LinkedIn</p></div><p>Albin Ryberg</p></a>
                <a href="https://twitter.com/AlbinRyberg" target="_blank" rel="noreferrer"><div><FaTwitter size={40}/><p>Twitter</p></div><p>@AlbinRyberg</p></a>
              </Socials>
            </ContentBox> 
            <ContentBox>
              <ContactForm/>
            </ContentBox>
            
          </ContactContent> */}
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
