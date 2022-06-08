import React from "react";
import albin from "../../images/albin.jpg";
import { projects } from "../../data";
import { AButton } from "../AButtonElements";
import { HiTerminal } from "react-icons/hi";

import {
  PortfolioContainer,
  PortfolioWrapper,
  Title,
  ProjectAlink,
  ProjectImg,
  ProjectsContainer,
  ProjectDiv,
  ProjectInfo,
  ButtonBox,
} from "./PortfolioElements";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <Title>
            <h1>Portfolio</h1> <HiTerminal size={40}/>
          </Title>
          <ProjectsContainer>
          {projects.map((project) => (
            <ProjectAlink
            href={project.link}
            key={project.image}
            >
            <ProjectDiv>
              <ProjectImg
                alt="gallery"
                src={albin}
              />
                <ProjectInfo>
                  <div>
                    <h2>{project.subtitle}</h2>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  <ButtonBox>
                    <AButton href={project.gitlink} key={project.image}>GitHub</AButton>
                    <AButton href={project.demolink} key={project.image}>Live Demo</AButton>
                  </ButtonBox>
                </ProjectInfo>
              </ProjectDiv>
            </ProjectAlink>
          ))}
          </ProjectsContainer>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;