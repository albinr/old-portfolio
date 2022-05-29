// import Video from "../../videos/video.mp4";
import PortfolioImg from "../../images/portfoliosite.jpg";

import {
  HeroContainer,
  // HeroBg,
  // VideoBg,
} from "./HeroElements";
import Card from "../newCards";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
     <Card
     title="test"
     body="test test test test test test test test test test test test test"
     year="2022"
     imgHoverTxt="Visit Live Website"
     imageUrl={PortfolioImg}
     />

      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg> */}
    </HeroContainer>
  );
};

export default HeroSection;
