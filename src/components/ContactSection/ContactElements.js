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
  /* justify-content: center; */
  flex-direction: column;
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
  padding: 16px;
  margin: 6px 0;
  border: none;
  /* border: 1px solid ${(p) => p.theme.text}; */
  border-radius: 6px;
  font-size: 1.2rem;
  outline: none;
  /* @media screen and (max-width: 800px) {
    margin: 10px 0;
  } */
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  margin: 6px 0;
  border: none;
  /* border: 1px solid ${(p) => p.theme.text}; */
  border-radius: 6px;
  font-size: 1.2rem;
  /* @media screen and (max-width: 800px) {
    margin: 10px 0;
  } */

`;

export const ContactForm = styled.form`
  width: 400px;
  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Socials = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  
  a{
    display: flex;
    text-decoration: none;
    color: ${(p) => p.theme.text};
    align-items: center;
    justify-content: space-between;
    margin: 14px;
  }

`;

export const ContactContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10%;
  @media screen and (max-width: 800px) {
    margin-bottom: 70px;
  }
`;