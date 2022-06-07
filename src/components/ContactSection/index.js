import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  Input,
  Textarea,
} from "./ContactElements";
import { Button } from "../ButtonElements";

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
            <h1>Contact me</h1>
          </Title>
          <form
          netlify
          name="contact"
          onSubmit={handleSubmit}>
          <h3>
            Send me a message and I'll get back to you as soon as possible.
          </h3>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            type="submit">
            Submit
          </Button>
        </form>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
