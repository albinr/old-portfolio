import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardText,
  CardInfoBox,
  CardContent,
  IconBox,
  GitIcon,
  ImgOverlay
} from "./newCardElements";

export const Card = ({ title, imageUrl, body, year, imgHoverTxt,gitLink }) => {
  return (
    <>
      <CardContainer>
        <CardInfoBox>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardText>{body}</CardText>
          </CardContent>
          <IconBox>
            <GitIcon href={gitLink}/>
             <p>{year}</p>
          </IconBox>
        </CardInfoBox>
        <ImageContainer>
            <ImgOverlay>{imgHoverTxt}</ImgOverlay>
          <img src={imageUrl} alt=""></img>
        </ImageContainer>
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
