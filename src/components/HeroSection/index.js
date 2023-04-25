import styled from "styled-components";

const HeroSectionStyles = styled.section`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    padding: 0px;
  h2,
  h3{
    font-size: clamp(40px, 8vw, 70px);
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionStyles id="home">
      <div>
        <h1>Hello!</h1>
        <h2>I'm Albin Ryberg</h2>
        <h3>A Front End Developer</h3>
        <h3>Based in Stockholm</h3>
        <p>I have recently graduated from the Front End development course at KYH in Stockholm, Sweden.
        When im not studying or developing I like spending time with friends, working out and playing some video games.
        I enjoy tinkering with things like mechanical keyboards and stuff too.</p>
      </div>
    </HeroSectionStyles>
  );
};

export default HeroSection;
