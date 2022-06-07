import styled from "styled-components";

export const ContactContainer = styled.div`
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 20px;
`;