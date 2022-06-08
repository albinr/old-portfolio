import styled from "styled-components";

export const PortfolioContainer = styled.div`
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 20px 0;
`;


export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectAlink = styled.a`
  text-decoration: none;
  /* height: 200px;
  width: 100%; */
  /* margin: 4px; */
  padding: 4px;

  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ProjectImg = styled.img`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
  -o-object-fit: cover;
`;

export const ProjectText = styled.div`
  opacity: 0;
  padding: 10px;
  z-index: 6;
  width: 100%;
  height: 100%;
  color: ${(p) => p.theme.text};
  &:hover {
    opacity: 1;
    background: ${(p) => p.theme.onBackground};
  }
`;