import React from "react";
import {
  ProjectImg,
  ProjectInfo,
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
            <ProjectInfo>
              <div>
                <h2>{subtitle}</h2>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <ButtonBox>
                <AButton href={gitLink}><GitIcon size={20}/>GitHub</AButton>
                {demoLink ? <AButton href={demoLink}>Demo</AButton> : null}
              </ButtonBox>
            </ProjectInfo>
          </ProjectDiv>
        </ProjectWrapper>
    </>
  );
};

export default Card;
