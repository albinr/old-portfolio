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
  margin-bottom: 70px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
  padding: 20px 0;
  display: flex;
  align-items: center;
  h1{
    margin-right: 10px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectAlink = styled.div`
  text-decoration: none;
  padding: 6px;
  /* height: 200px;
  width: 100%; */
  /* margin: 4px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  position: relative;
  border-radius: 6px;
  height: 300px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ProjectImg = styled.img`
  position: absolute;
  border-radius: 6px;
  z-index: 5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
  -o-object-fit: cover;
`;

export const ProjectInfo = styled.div`
  opacity: 0;
  padding: 10px;
  z-index: 6;
  width: 100%;
  height: 100%;
  color: ${(p) => p.theme.text};
  transition: 300ms;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    opacity: 1;
    background: ${(p) => p.theme.onBackground};
    backdrop-filter: blur(4px);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  a{
    margin-right: 10px;
  }
`;