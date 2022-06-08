import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  Input,
  Textarea,
  ContactForm,
  Socials,
  ContactContent,
} from "./ContactElements";
import { Button } from "../ButtonElements";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, HiChat,  } from 'react-icons/hi';

const ContactSection = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <Title>
            <h1>Contact me</h1> <HiChat size={40}/>
          </Title>
          <ContactContent>
            <Socials>
              <a href="https://github.com/AlbinR" target="_blank" rel="noreferrer"><HiMail size={40}/> <p>Email</p><p>albin@rybergs.net</p></a>
              <a href="https://github.com/AlbinR" target="_blank" rel="noreferrer"><FaGithub size={40}/> <p>Github</p><p>AlbinR</p></a>
              <a href="https://github.com/AlbinR" target="_blank" rel="noreferrer"><FaLinkedin size={40}/> <p>LinkedIn</p><p>AlbinR</p></a>
              <a href="https://github.com/AlbinR" target="_blank" rel="noreferrer"><FaTwitter size={40}/> <p>Twitter</p><p>AlbinR</p></a>
            </Socials>
            <ContactForm
              netlify
              name="contact"
              onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name"/>
                <Input
                  placeholder="Your full name"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email"/>
                <Input
                  placeholder="Your email address"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message"/>
                <Textarea
                  placeholder="Your message"
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button
                type="submit">
                Send Message
              </Button>
            </ContactForm>
          </ContactContent>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
