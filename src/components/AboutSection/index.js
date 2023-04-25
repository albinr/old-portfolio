import styled from "styled-components";
const Text = styled.div`
 h2,
 h3{
    margin: 0px;
    font-size: clamp(40px, 8vw, 60px);
 }
 p{
  font-size: 20px;
 }
 #home{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    height: 100vh;
    padding: 0px;
 }
`;
const AboutSection = () => {
  return (
    <section id="about">
      <Text>
        <h1>About Me</h1>
        <br />
        <p>
          Hi, my name is Albin Ryberg. I am currently studying front-end
          development at KYH in Stockholm, Sweden.
        </p>
        <p>
          When im not studying or developing i enjoy spending time with
          friends, working out and playing some video games.
        </p>
        <p>I enjoy tinkering with things like keyboards and stuff too. </p>
      </Text>
    </section>
  );
};

export default AboutSection;
