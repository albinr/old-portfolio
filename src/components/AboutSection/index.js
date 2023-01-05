import React from "react";
// import { Button } from "../ButtonElements";
import { AboutWrapper, AboutText } from "./AboutElements";
import { Section } from "../GeneralStyle";

const AboutSection = () => {
  return (
    <Section id="about">
      <AboutWrapper>
        <AboutText>
          <h1>About Me</h1>
          <br />
          <p>
            Hi, my name is Albin Ryberg. I am currently studying front-end
            development at KYH in Stockholm, Sweden.
          </p>
          <p>
            When im not studying or developing i enjoy spending time with
            friends, working out and playing some video games.
          </p>
          <p>I enjoy tinkering with things like keyboards and stuff too. </p>
        </AboutText>
      </AboutWrapper>
    </Section>
  );
};

export default AboutSection;
