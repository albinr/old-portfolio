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
        <Wrapper>
          <Title>
            <h2>Contact</h2> <MdChat size={30}/>
          </Title>
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
