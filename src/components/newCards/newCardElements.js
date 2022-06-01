import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const CardContainer = styled.a`
  display: flex;
  background-color: #171a21;
  flex-direction: column;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
  height: 500px;
  margin: 10px;
  transition: top 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  top: 0;
  /* :hover {
    top: -10px;
    color: #fff;
    outline: 0;
    box-shadow: 0 0 10px 4px #3498db;
  } */
  @media screen and (max-width: 768px) {
    zoom: 0.72;
    -moz-transform: scale(0.72);
    transition: top 0.2s ease-in-out;
  }
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
`;
export const CardContent = styled.div`
  flex: 1 0 auto;
`;

export const CardTitle = styled.div`
  padding: 10px 10px 10px 10px;
  font-size: 35px;
`;

export const CardText = styled.div`
  padding: 0 18px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  p {
    font-size: 15px;
    color: gray;
  }
`;

export const GitIcon = styled(FaGithub)`
  font-size: 40px;
  margin: 10px;
`;

export const ImgOverlay = styled.div`
    display: none;

    :hover {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
  }

`;

export const ImageContainer = styled.div`
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.5s;
  }
`;