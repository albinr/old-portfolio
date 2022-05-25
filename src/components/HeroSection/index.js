import Video from "../../videos/video.mp4";
import Image from "../../images/albin.jpg";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Header,
  ImageAr,
  Text,
  Title,
  Name,
  Intro,
  ImageContainer,
  Buttons,
  Btn,
  Underline,
} from "./HeroElements";

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
          <Btn
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
            offset={-80}
          >
            More
          </Btn>
        </Buttons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
