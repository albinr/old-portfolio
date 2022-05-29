// import Video from "../../videos/video.mp4";
import PortfolioImg from "../../images/portfoliosite.jpg";

import {
  HeroContainer,
  // HeroBg,
  // VideoBg,
} from "./HeroElements";
import Card from "../newCards";
import { Button } from "../Button";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
     <Card
     title="Gains"
     body="Gym-App made as final project in Front End course at KYH "
     year="2022"
     imgHoverTxt="Visit Live Website"
     imageUrl={PortfolioImg}
     />
     <Button Title="Press me"/>

      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg> */}
    </HeroContainer>
  );
};

export default HeroSection;
