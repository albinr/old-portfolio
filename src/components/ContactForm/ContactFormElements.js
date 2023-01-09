import styled from "styled-components";

export const Input = styled.input`
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 6px;
  margin:0;
  outline: none;
`;

export const Textarea = styled.textarea`
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  width: 100%;
  height: 150px;
  padding: 20px;
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 6px;
  outline: none;
`;

export const Form = styled.form`
  padding: 10px;
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  h3{
    margin: 20px 0;
  }
`;

export const UL = styled.ul`
    list-style: none;
    li:nth-child(4){
      float: right;
    };
    li {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-bottom: 20px;
    overflow: hidden;
    clear: both;
    position: relative;
    display: flex;
    flex-direction: row;
    };
`;

export const NameEmail = styled.li`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
        flex-direction: column;
};
  
`;
