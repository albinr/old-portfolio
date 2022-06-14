import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const ProjectWrapper = styled.div`
  padding: 8px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 250px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ProjectImg = styled.img`
  position: absolute;
  /* border-radius: 6px; */
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
  /* border-radius: 6px; */
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

export const GitIcon = styled(FaGithub)`
  margin-right: 8px;
`;