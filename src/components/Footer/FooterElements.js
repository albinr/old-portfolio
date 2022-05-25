import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { BsChevronUp } from "react-icons/bs";

export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #16202d;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const CurveDiv = styled.div`
  width: 400px;
  height: 200px; /* as the half of the width */
  background-color: #171a21;
  border-top-left-radius: 220px; /* 100px of height + 10px of border */
  border-top-right-radius: 220px; /* 100px of height + 10px of border */
  border: 4px solid #3498db;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 100px;
    bottom: 0;
  }
`;

export const Link = styled(LinkS)`
  border-top-right-radius: 210px;
  border-top-left-radius: 210px;
  @media screen and (max-width: 768px) {
    border-top-right-radius: 110px;
    border-top-left-radius: 110px;
  }
`;

export const Icon = styled(BsChevronUp)`
  font-size: 150px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 75px;
  }
`;
