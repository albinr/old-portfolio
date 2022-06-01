import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const CardContainer = styled.a`
  display: flex;
  justify-content: space-between;
  background-color: #171a21;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 440px;
  height: 220px;
  margin: 5px;
  transition: top 0.2s ease-in-out;
  position: relative;
  top: 0;
  @media screen and (max-width: 768px) {
    zoom: 0.65;
    -moz-transform: scale(0.72);
    transition: top 0.2s ease-in-out;
  }
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;
export const CardContent = styled.div`
  flex: 1 0 auto;
`;

export const CardTitle = styled.div`
  padding: 10px 0px 0px 12px;
  font-size: 35px;
`;

export const CardText = styled.div`
  padding: 0 10px 0 20px;
  letter-spacing: 1px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const GitIcon = styled(FaGithub)`
  font-size: 20px;
  margin-right: 2px;
`;

export const ImageContainer = styled.div`
  max-width: 220px;
  float: right;
  background-color: #fff;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  overflow: hidden;
  img {
    width: 220px;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.5s;
  }
`;

export const Year = styled.p`
  font-size: 18px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  border-radius: 6px;
  padding: 4px;
  bottom: 8px;
  right: 8px;
`;

export const AButton = styled.a`
  border-radius: 10px;
  background: ${({primary}) => (primary ? '#3498DB' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '10px 14px' : '10px 14px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin: 0px 0px 8px 8px;
  text-decoration: none;

  &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({primary}) => () => primary ? '#fff' : '#3498DB'};
  }
`;


// import styled from "styled-components";
// import { FaGithub } from "react-icons/fa";

// export const CardContainer = styled.a`
//   display: flex;
//   justify-content: space-between;
//   background-color: #171a21;
//   color: #fff;
//   border-radius: 10px;
//   overflow: hidden;
//   max-width: 400px;
//   height: 200px;
//   margin: 10px;
//   border-left: 2px solid #66c0f4;
//   border-top: 2px solid #66c0f4;
//   border-bottom: 2px solid #66c0f4;
//   transition: top 0.2s ease-in-out;
//   cursor: pointer;
//   position: relative;
//   top: 0;
//   :hover {
//     top: -10px;
//     color: #fff;
//     outline: 0;
//     box-shadow: 0 0 10px 4px #3498db;
//   }
//   @media screen and (max-width: 768px) {
//     zoom: 0.72;
//     -moz-transform: scale(0.72);
//     transition: top 0.2s ease-in-out;
//   }
// `;

// export const CardInfoBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 200px;
// `;
// export const CardContent = styled.div`
//   flex: 1 0 auto;
// `;

// export const CardTitle = styled.div`
//   padding: 20px 20px 5px 20px;
//   font-size: 35px;
// `;

// export const CardText = styled.div`
//   padding: 0 10px 0 20px;
// `;

// export const IconBox = styled.div`
//   display: flex;
//   align-items: center;
//   p {
//     font-size: 15px;
//     color: gray;
//   }
// `;

// export const GitIcon = styled(FaGithub)`
//   font-size: 40px;
//   margin: 10px;
// `;

// export const CardAge = styled.div``;

// export const ImageContainer = styled.div`
//   max-width: 200px;
//   float: right;
//   background-color: #fff;
//   border-top-left-radius: 50%;
//   border-bottom-left-radius: 50%;
//   overflow: hidden;
//   img {
//     width: 200px;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     transition: 0.5s;
//   }
// `;
