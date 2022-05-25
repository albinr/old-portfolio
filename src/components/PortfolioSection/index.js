import React from "react";
import PortfolioImg from "../../images/portfoliosite.jpg";
import BevNewsImg from "../../images/bevnews.jpg";
import QuireImg from "../../images/quire.jpg";
import CargoImg from "../../images/Cargo.jpg";
import CalculatorImg from "../../images/Calculator.PNG";

import {
  PortfolioContainer,
  PortfolioWrapper,
  Title,
  Cards,
  CardDiv,
  ALink,
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
              <ALink
                href="https://github.com/AlbinR/portfolio-v2"
                target="_blank"
              >
                <Card
                  title="Porfolio"
                  body="The code for this portfolio site."
                  year="2021"
                  imageUrl={PortfolioImg}
                />
              </ALink>

              <ALink
                href="https://github.com/Viktor-Hultman/BevNews"
                target="_blank"
              >
                <Card
                  title="BevNews"
                  body="Tracks words in The Guardian."
                  year="2020"
                  imageUrl={BevNewsImg}
                />
              </ALink>
            </CardDiv>
            <CardDiv>
              <ALink
                href="https://github.com/Voltair88/fe20tp1_-Vellum-"
                target="_blank"
              >
                <Card
                  title="Quire"
                  body="Online note-taking app."
                  year="2020"
                  imageUrl={QuireImg}
                />
              </ALink>

              <ALink href="https://github.com/AlbinR/cargo" target="_blank">
                <Card
                  title="Cargo"
                  body="Figma prototype made in react."
                  year="2021"
                  imageUrl={CargoImg}
                />
              </ALink>
            </CardDiv>

            <CardDiv>
              <ALink
                href="https://github.com/AlbinR/react-calculator"
                target="_blank"
              >
                <Card
                  title="Calculator"
                  body="Calculator made in react. (with tutorial)"
                  year="2021"
                  imageUrl={CalculatorImg}
                />
              </ALink>
              <ALink
                href="https://github.com/AlbinR/react-calculator"
                target="_blank"
              >
                <Card
                  title="Camera"
                  body="Camera App made in react native. (with tutorial)"
                  year="2021"
                  // imageUrl={}
                />
              </ALink>
            </CardDiv>
          </Cards>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;
