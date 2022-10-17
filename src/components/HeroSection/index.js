// import Video from "../../videos/video.mp4";
import Image from "../../images/albin.jpg";
import CV from "../../files/Albin_Ryberg_CV.pdf";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import {
  BtnBox,
  HeroContainer,
  HeroWrapper,
  ImageAr,
  ImageContainer,
  SmallImg,
  InfoBox,
  HeroContent,
  Header,
  Title,
  Text,
  IconBox,
  Line,
  DlIcon,
} from "./HeroElements";
import { AButton } from "../AButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <InfoBox>
          <ImageContainer>
            <ImageAr src={Image} alt="Albin Ryberg"/>
          </ImageContainer>
          <HeroContent>
            <Header>
              <SmallImg>
                <ImageAr src={Image} alt="Albin Ryberg"/>
              </SmallImg>
              <Title>
                  <p>HELLO!</p>
                  <h1>I'm Albin Ryberg,</h1>
                  <h1>a Front End Developer</h1>
                  <h1>from Stockholm.</h1>
              </Title>
            </Header>
            <Text>
              <p>I have recently graduated from the front-end
                development course at KYH in Stockholm, Sweden.</p>
              <p>When im not studying or developing I like spending time with
                friends, working out and playing some video games.</p>
              <p>I enjoy tinkering with things like mechanical keyboards and stuff too.</p>
            </Text>
              <BtnBox>
                <AButton href={CV} download>Download CV<DlIcon/></AButton>
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
