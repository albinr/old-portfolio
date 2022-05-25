import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactContainer = styled.div`
  color: #fff;
  background: #16202d;
  width: 100%;
  min-height: 90vh;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;

export const ContactWrapper = styled.div`
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
  margin: auto;
  border-radius: 10px;
  h1 {
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 20px;
    margin: auto;
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;
export const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  h1 {
    font-size: 30px;
    font-weight: 100;
    color: #65bef2;
    padding: 20px;
  }
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    zoom: 0.4;
    -moz-transform: scale(0.4);
  }
`;

export const CircleDiv = styled.a`
  width: 190px;
  height: 190px;
  background-color: #171a21;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #65bef2;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    outline: 0;
    box-shadow: 0 0 10px 4px#3498db;
  }
`;
export const GitIcon = styled(FaGithub)`
  font-size: 60px;
`;
export const LinkedInIcon = styled(FaLinkedinIn)`
  font-size: 60px;
`;
export const TwitterIcon = styled(FaTwitter)`
  font-size: 60px;
`;
export const EmailIcon = styled(MdEmail)`
  font-size: 60px;
`;
