import styled from "styled-components";

export const PortfolioContainer = styled.div`
  color: #fff;
  background: #16202d;
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  min-height: 100%;
`;

export const Title = styled.div`
  width: 80vw;
  border-radius: 10px;
  h1 {
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 20px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

export const ALink = styled.a`
  text-decoration: none;
`;
