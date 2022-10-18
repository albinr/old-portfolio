import React from "react";
import {
  Input,
  Textarea,
  Form,
  UL,
//   NameLi,
//   EmailLi,
//   SubjectLi,
//   MessageLi,
} from "./ContactFormElements";
import { Button } from "../ButtonElements";

const ContactForm = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject , setSubject] = React.useState("");
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
      body: encode({ "form-name": "contact", name, email, subject, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <>
        <Form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        >
            <UL>
                <li>
                    <Input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    />
                {/* </li>
                <li> */}
                    <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </li>
                <li>
                    <Input
                    placeholder="Subject" 
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    />
                </li>
                <li>
                    <Textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </li>
                <li>
                    <Button
                        type="submit">
                        Send Message
                    </Button>
                </li>
            </UL>
        </Form>
    </>
  );
};

export default ContactForm;
