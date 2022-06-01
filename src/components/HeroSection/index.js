import Video from "../../videos/video.mp4";
import Image from "../../images/albin.jpg";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Header,
  Text,
  Title,
  Name,
  Intro,
  ImageContainer,
  ImageAr,
  Buttons,
  Underline,
} from "./HeroElements";
import { ScrollButton } from "../ScrollButtonElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Header>
          <Text>
            <Title>
              <h1>Hello,</h1>
            </Title>
            <Name>
              <h2>
                my name is <Underline>Albin Ryberg</Underline>.
              </h2>
            </Name>
            <Intro>
              <h2>
                Front-end developer studying at&nbsp;
                <Underline>KYH</Underline>.
              </h2>
            </Intro>
          </Text>
          <ImageContainer>
            <ImageAr src={Image} alt="Albin" type="image/jpg" />
          </ImageContainer>
        </Header>
        <Buttons>
          <ScrollButton
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
            offset={-80}
            primary
            dark
          >
            More
          </ScrollButton>
          <Button>
            Download CV
          </Button>
        </Buttons>
      </HeroContent>
      
    </HeroContainer>
  );
};

export default HeroSection;
