import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
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
            <h1>Contact me</h1> <MdChat size={40}/>
          </Title>
          <Socials/>
          <ContactForm />
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
