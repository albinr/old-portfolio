import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  ContactContent,
} from "./ContactElements";
import ContactForm from "../ContactForm";
import { MdChat } from "react-icons/md";
import Socials from "../Socials";

const ContactSection = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <Title>
            <h1>Contact</h1> <MdChat size={40}/>
          </Title>
          <ContactContent>
            <Socials/>
            <ContactForm />
          </ContactContent>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
