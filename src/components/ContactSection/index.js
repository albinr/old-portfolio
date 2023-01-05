import React from "react";
import {
  ContactContent,
} from "./ContactElements";
import { Title, Section, Wrapper } from "../GeneralStyle";
import ContactForm from "../ContactForm";
import { MdChat } from "react-icons/md";
import Socials from "./Socials";

const ContactSection = () => {
  return (
    <>
      <Section id="contact">
          <Title>
            <h1>Contact</h1> <MdChat size={40}/>
          </Title>
          <Wrapper>
          <ContactContent>
            <Socials/>
            <ContactForm />
          </ContactContent>
        </Wrapper>
      </Section>
    </>
  );
};

export default ContactSection;
