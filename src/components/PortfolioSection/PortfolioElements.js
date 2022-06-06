import styled from "styled-components";

export const PortfolioContainer = styled.div`
  /* color: #fff; */
  /* background: #16202d; */
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  width: 100%;
  min-height: 80vh;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: auto;
  max-width: 1000px;
  min-height: 100%;
`;

export const Title = styled.div`
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
