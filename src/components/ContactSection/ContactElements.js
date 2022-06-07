import styled from "styled-components";

export const ContactContainer = styled.div`
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  width: 100vw;
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
  justify-content: center;
  flex-direction: column;
  p{
    margin: 20px 0;
  }
`;
export const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 20px 0;
`;
export const Input = styled.input`
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: none;
  /* border: 1px solid ${(p) => p.theme.text}; */
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  margin: 10px;
  border: none;
  /* border: 1px solid ${(p) => p.theme.text}; */
  border-radius: 5px;
  font-size: 1.2rem;
  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }

`;