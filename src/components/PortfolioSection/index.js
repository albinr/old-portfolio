import React from "react";
import {
  PortfolioContainer,
  PortfolioWrapper,
  // Title,
  ProjectsContainer,
} from "./PortfolioElements";
import { Section, Title, Wrapper } from "../GeneralStyle";
import portfolioImg from "./portfolio.png";
import bevnewsImg from "./bevnews.jpg";
import quireImg from "./quire.jpg";
import cargoImg from "./cargo.jpg";
import gainsImg from "./gains.png";
import fediverseImg from "./fediverse.png"
import calculatorImg from "./calculator.png";
// import portfolioImg from "../../images/portfolio.png";
// import bevnewsImg from "../../images/bevnews.jpg";
// import quireImg from "../../images/quire.jpg";
// import cargoImg from "../../images/cargo.jpg";
// import gainsImg from "../../images/gains.png";
// import calculatorImg from "../../images/calculator.png";
import { HiTerminal } from "react-icons/hi";
import Card from "../Cards";


const PortfolioSection = () => {
  return (
    <>
    <Section id="portfolio"> 
        <Title>
            <h1>Portfolio</h1> <HiTerminal size={40}/>
        </Title>
        <Wrapper>
          
          <ProjectsContainer>
            <Card 
              imageUrl={portfolioImg} 
              title="Portfolio"
              subtitle="React and React-scroll" 
              description="This is my portfolio website you are looking at right now." 
              gitLink="https://github.com/AlbinR/portfolio"/>
            <Card 
              imageUrl={bevnewsImg} 
              title="BevNews" 
              subtitle="React, Firebase and Guardian API" 
              description="This was a school project where we created a website that tracked words popularity in the Guardian API." 
              gitLink="https://github.com/Viktor-Hultman/BevNews"
              demoLink="https://bevnews.surge.sh/landing"/>
            <Card 
              imageUrl={quireImg}
              title="Quire" 
              subtitle="JavaScript and Local Storage" 
              description="This was a school group project where we created a note taking app using JavaScript and Local Storage." 
              gitLink="https://github.com/Voltair88/fe20tp1_-Vellum-"
              demoLink="http://vellum.surge.sh/"/>
            <Card 
              imageUrl={cargoImg} 
              title="Cargo" 
              subtitle="React, Firebase and Figma"
              description="This was a ux design project where we designed a car rental app using Figma. When the design was finished we individually created a hard coded app using React and Firebase." 
              gitLink="https://github.com/AlbinR/cargo"/>
            <Card 
              imageUrl={gainsImg} 
              title="Gains" 
              subtitle="React Native, Expo Go, TypeScript, GraphQL and MongoDB" 
              description="This was the final project in the front-end course. We created a gym/training mobile app that aims to help the user create and preform a workout." 
              gitLink="https://github.com/AlbinR/Gains"/>
            <Card 
              imageUrl={calculatorImg}
              title="Calculator"
              subtitle="React" 
              description="A simple calculator that I created using React. With a tutorial." 
              gitLink="https://github.com/AlbinR/react-calculator"/>
              <Card 
              imageUrl={fediverseImg}
              title="Fediverse"
              subtitle="" 
              description="I have some expreience setting up Fediverse" 
              gitLink="https://github.com/AlbinR/react-calculator"/>
          </ProjectsContainer>
        </Wrapper>
      </Section>
    </>
  );
};

export default PortfolioSection;