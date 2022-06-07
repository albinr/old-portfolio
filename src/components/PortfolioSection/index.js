import React from "react";

import albin from "../../images/albin.jpg";

import { projects } from "../../data";

import {
  PortfolioContainer,
  PortfolioWrapper,
  Title,
  ProjectAlink,
  ProjectImg,
  ProjectsContainer,
  ProjectDiv,
  ProjectText,
} from "./PortfolioElements";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <Title>
            <h1>Portfolio</h1>
          </Title>
          {/* <ProjectsContainer>
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
                <ProjectText>
                  <h2>{project.subtitle}</h2>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </ProjectText>
              </ProjectDiv>
            </ProjectAlink>
          ))}
          </ProjectsContainer> */}
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;