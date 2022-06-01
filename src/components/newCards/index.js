import React from "react";
import { Button } from "../ButtonElements";
import { FaGithub } from "react-icons/fa";
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardText,
  CardInfoBox,
  CardContent,
  BtnBox,
  GitIcon,
  ImgOverlay
} from "./newCardElements";

export const Card = ({ title, imageUrl, body, year, imgHoverTxt,gitLink }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
            <ImgOverlay>{imgHoverTxt}</ImgOverlay>
          <img src={imageUrl} alt=""></img>
        </ImageContainer>
        <CardInfoBox>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardText>{body}</CardText>
          </CardContent>
          <BtnBox>
            <Button primary dark><FaGithub size={30}/> GitHub</Button>
            <Button><FaGithub size={30}/>Live Page</Button>
             <p>{year}</p>
          </BtnBox>
        </CardInfoBox>
      </CardContainer>
    </>
  );
};

export default Card;

// import React from "react";
// import {
//   CardContainer,
//   ImageContainer,
//   CardTitle,
//   CardText,
//   CardInfoBox,
//   CardContent,
//   IconBox,
//   GitIcon,
//   CardAge,
// } from "./CardElements";

// export const Card = ({ title, imageUrl, body, year }) => {
//   return (
//     <>
//       <CardContainer>
//         <CardInfoBox>
//           <CardContent>
//             <CardTitle>{title}</CardTitle>
//             <CardText>{body}</CardText>
//           </CardContent>
//           <IconBox>
//             <GitIcon />
//             <CardAge>
//               <p>{year}</p>
//             </CardAge>
//           </IconBox>
//         </CardInfoBox>
//         <ImageContainer>
//           <img src={imageUrl} alt=""></img>
//         </ImageContainer>
//       </CardContainer>
//     </>
//   );
// };

// export default Card;
