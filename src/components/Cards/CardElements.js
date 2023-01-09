import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const ProjectWrapper = styled.div`
  /* padding: 8px; */
  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  /* border: 1px solid red; */
  padding: 10px;
  :hover{
    img{
      height: 200px;
    }
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 15px;
  object-fit: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-bottom: -10px;
  border: 1px solid ${(p) => p.theme.border};
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background: red;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.border};
  justify-content: space-between;
  overflow: hidden;
  padding: 12px;
  background: ${(p) => p.theme.onSurface};
  h3{
  }
  h4{
  }
  p{
    color: #8b949e;
  }

`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  a{
    margin-right: 10px;
  }
`;

export const GitIcon = styled(FaGithub)`
  margin-right: 8px;
`;