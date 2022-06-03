import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1000px;
  min-height: 100%;
`;

export const AboutText = styled.div`
  margin: auto;
  border-radius: 10px;
  margin-bottom: 6%;
  h1 {
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 20px;
    margin: auto;
  }
  p {
    font-size: calc(10px + 1.2vw);
    margin-top: 5px;
    line-height: 2;
    letter-spacing: 2px;
  }
`;
