import {
  HeroContainer,
  Title,
  Text,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <p>HELLO!</p>
      <h1>My name is Albin Ryberg,</h1>
      <h1>I am a Front End Developer</h1>
      <h1>from Stockholm.</h1>
      <p>I have recently graduated from the Front End
      development course at KYH in Stockholm, Sweden.
      When im not studying or developing I like spending time with
      friends, working out and playing some video games.
      I enjoy tinkering with things like mechanical keyboards and stuff too.</p>
    </HeroContainer>
  );
};

export default HeroSection;
