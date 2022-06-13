import styled from "styled-components";

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
