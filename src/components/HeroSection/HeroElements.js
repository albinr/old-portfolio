import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { useTheme } from "styled-components";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  position: relative;
  padding: 0 20px;
  z-index: 1;

  /* :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
    z-index: 2;
  } */
`;

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 800px;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  } ;
`;

export const ImageAr = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  -o-object-fit: cover;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const HeroText = styled.div`
  padding: 10px;
`;

export const AboutText = styled.div`
  margin: auto;
  margin-bottom: 6%;
  p {
    /* font-size: calc(10px + 1vw); */
    font-size: 1.2rem;
    margin-top: 5px;
  }
`;