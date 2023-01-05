import React from "react";
import {
  ProjectImg,
  InfoCard,
  ButtonBox,
  ProjectDiv,
  ProjectWrapper,
  GitIcon,
} from "./CardElements";
import { AButton } from "../AButtonElements";


export const Card = ({ title, subtitle, imageUrl, description, gitLink, demoLink }) => {
  return (
    <>
    <ProjectWrapper>
      <ProjectDiv>
          <ProjectImg
            alt="gallery"
            src={imageUrl}
          />
          <InfoCard>
            <div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
            </div>
            <ButtonBox>
            <AButton href={gitLink}><GitIcon size={20}/>GitHub</AButton>
            {demoLink ? <AButton href={demoLink}>Demo</AButton> : null}
            </ButtonBox>
            </InfoCard>
        </ProjectDiv>
        </ProjectWrapper>
    </>
  );
};

export default Card;
