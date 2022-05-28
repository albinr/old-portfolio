import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  // HeroBg,
  // VideoBg,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <div>
        <p>hello</p>
      </div>
      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg> */}
    </HeroContainer>
  );
};

export default HeroSection;
