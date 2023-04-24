import styled from "styled-components";

export const HeroContainer = styled.section`
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh; */
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0px;
  margin: 0 auto;
`;

export const Text = styled.div`
 padding-top: 10px;
 font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;