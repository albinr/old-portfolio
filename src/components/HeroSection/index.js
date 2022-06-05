// import Video from "../../videos/video.mp4";
import Image from "../../images/albin.jpg";
import { useTheme } from "styled-components";

import {
  BtnBox,
  HeroContainer,
  HeroWrapper,
  ImageAr,
  ImageContainer,
  InfoBox,
  HeroText,
  AboutText,
} from "./HeroElements";
import { ScrollButton } from "../ScrollButtonElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <InfoBox>
          <ImageContainer>
            <ImageAr src={Image} alt="Albin Ryberg"/>
          </ImageContainer>
          <div>
            <HeroText>
            <h1>Hi! My name is Albin Ryberg.</h1>
            <h2>I'm a junior front end developer.</h2>
            <p>With a passion for creating beautiful, responsive websites.</p>
            </HeroText>
            <BtnBox>
              <Button>Download CV</Button>
              <ScrollButton>Portfolio</ScrollButton>
            </BtnBox>
          </div>
        </InfoBox>
        <AboutText>
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
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
