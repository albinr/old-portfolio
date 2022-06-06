// import Video from "../../videos/video.mp4";
import Image from "../../images/albin.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import {
  BtnBox,
  HeroContainer,
  HeroWrapper,
  ImageAr,
  ImageContainer,
  InfoBox,
  HeroContent,
  Title,
  Text,
  IconBox,
  Line,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <InfoBox>
          <ImageContainer>
            <ImageAr src={Image} alt="Albin Ryberg"/>
          </ImageContainer>
          <HeroContent>
            <Title>
                <p>HELLO!</p>
                <h1>I'm Albin Ryberg, a front end developer from Stockholm</h1>
            </Title>
             <Text>
              <p>
                I am currently studying front-end
                development at KYH in Stockholm, Sweden.
                When im not studying or developing I like spending time with
                friends, working out and playing some video games.
                I enjoy tinkering with things like keyboards and stuff too. 
              </p>
              </Text>
              <BtnBox>
                <Button>Download CV</Button>
              </BtnBox>
              <IconBox>
                <a target="_blank" href="https://www.linkedin.com/in/albin-ryberg-bb22341a6/" rel="noreferrer">
                  <FaLinkedin size={30}/>
                </a>
                <Line/>
                <a target="_blank" href="https://github.com/AlbinR" rel="noreferrer">
                  <FaGithub size={30}/>
                </a>
                <Line/>
                <a target="_blank" href="https://twitter.com/AlbinRyberg" rel="noreferrer">
                  <FaTwitter size={30}/>
                </a>
              </IconBox>
          </HeroContent>
        </InfoBox>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
