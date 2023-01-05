import styled from "styled-components";
import { HiBadgeCheck } from "react-icons/hi";

export const SkillContainer = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* min-height: 80vh;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.text}; */
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
  border-bottom: 1px solid ${(p) => p.theme.onSurface};
  margin: 20px 0;
  display: flex;
  align-items: center;
  h1{
    margin-right: 10px;
  }
`;

export const Box = styled.div`
  background-color: ${(p) => p.theme.onSurface};
  border-radius: 8px;
  padding: 20px;
  width: 400px;

`;

export const SkillsContent = styled.div`
  background-color: ${(p) => p.theme.background};
  border: 1px solid rgba(0,0,0,0.1);
  padding: 2rem 4rem;
  border-radius: 1.25rem;

`;

export const SkillsTitle = styled.h2`
text-align: center;

`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;

`;

export const SkillsGroup = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
`;

export const SkillsData = styled.div`
  display: flex;
  column-gap: 0.5rem;

`;

export const SkillsName = styled.h3`
  line-height: 18px;
`;

export const SkillsLevel = styled.span`

`;
export const Badge = styled(HiBadgeCheck)`
 font-size: 1.5rem;
 color: ${(p) => p.theme.accent}
`;