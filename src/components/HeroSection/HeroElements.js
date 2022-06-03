import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { useTheme } from "styled-components";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
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
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  } ;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: calc(20px + 2vw);
  @media screen and (max-width: 768px) {
  } ;
`;
export const Underline = styled.span`
  border-bottom: 2px solid #3498db;
`;

export const Name = styled.div`
  font-size: calc(10px + 1vw);
  @media screen and (max-width: 768px) {
  } ;
`;
export const Intro = styled.div`
  font-size: calc(6px + 1vw);
  @media screen and (max-width: 768px) {
  } ;
`;
export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  } ;
`;

export const ImageAr = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  transition: 0.5s;
  :hover {
    filter: grayscale(0%);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  } ;
`;

export const Btn = styled(LinkS)`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  width: 130px;
  letter-spacing: 2px;
  border: 1px solid #3498db;
  color: #3498db;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  border-color: #3498db;
  color: #fff;
  /* border-radius: 5px; */
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
  :hover,
  :focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;
