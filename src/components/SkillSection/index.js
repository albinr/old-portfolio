import React from "react";
import { SkillContainer } from "./SkillElements";
import { HiAcademicCap } from "react-icons/hi";
import { Title , Subtitle, Section, Wrapper } from "../GeneralStyle";
import Frontend from "./Frontend";
import Backend from "./Backend";

const SkillSection = () => {
  return (
    <Section id="skills">
      <Title>
        <h1>Skills</h1> <HiAcademicCap size={40}/>
      </Title>
      <Subtitle>
      <p>Technolegies, Methods and Programming languages i have experience with</p>
      </Subtitle>
      <Wrapper>
          <SkillContainer>
            <Frontend/>
            {/* <Backend/> */}
          </SkillContainer>
      </Wrapper>
    </Section>
  );
};

export default SkillSection;
