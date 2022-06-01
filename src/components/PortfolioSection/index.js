import React from "react";
import PortfolioImg from "../../images/portfoliosite.jpg";
import BevNewsImg from "../../images/bevnews.jpg";
import QuireImg from "../../images/quire.jpg";
import CargoImg from "../../images/Cargo.jpg";
import CalculatorImg from "../../images/Calculator.PNG";
import Gains from "../../images/Gains.png";

import {
  PortfolioContainer,
  PortfolioWrapper,
  Title,
  Cards,
  CardDiv,
} from "./PortfolioElements";

import Card from "../Cards";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <Title>
            <h1>Portfolio</h1>
          </Title>
          <Cards>
            
            <CardDiv>
                <Card
                  title="Porfolio"
                  body="The code for this portfolio site. Made with React and React-scroll."
                  year="2022"
                  imageUrl={PortfolioImg}
                  gitLink="https://github.com/AlbinR/portfolio"
                  siteLink="https://albinryberg.surge.sh/"
                />  
                <Card
                  title="BevNews"
                  body="Tracks words in The Guardian."
                  year="2020"
                  imageUrl={BevNewsImg}
                  gitLink="https://github.com/Viktor-Hultman/BevNews"
                  siteLink="https://bevnews.surge.sh/landing"
                />
                <Card
                  title="Quire"
                  body="Online note-taking app."
                  year="2020"
                  imageUrl={QuireImg}
                  gitLink="https://github.com/Voltair88/fe20tp1_-Vellum-"
                  siteLink="http://vellum.surge.sh/"
                />
            </CardDiv>
            <CardDiv>
                <Card
                  title="Cargo"
                  body="Figma prototype made in react."
                  year="2021"
                  imageUrl={CargoImg}
                  gitLink="https://github.com/AlbinR/cargo"
                />
                <Card
                  title="Calculator"
                  body="Calculator made in react. (with tutorial)"
                  year="2021"
                  imageUrl={CalculatorImg}
                  gitLink="https://github.com/AlbinR/react-calculator"
                />
                <Card
                  title="Camera"
                  body="Camera App made in react native. (with tutorial)"
                  year="2021"
                  gitLink="https://github.com/AlbinR/react-native-camera-app"
                />
            </CardDiv>
            <CardDiv>
                <Card 
                title="Gains"
                body="Gym-app made with ReactNative. Final project for polytechnic course."
                year="2022"
                imageUrl={Gains}
                gitLink="https://github.com/AlbinR/Gains"
                siteLink="https://expo.dev/@kingstinct/gains?serviceType=classic&distribution=expo-go"
                />
            </CardDiv>
          </Cards>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;
