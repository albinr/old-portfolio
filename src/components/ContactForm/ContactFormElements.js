import styled from "styled-components";

export const Input = styled.input`
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 0;
  border-radius: 6px;
  margin:0;
  font-size: 1.2rem;
  outline: none;
`;

export const Textarea = styled.textarea`
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  width: 100%;
  height: 150px;
  padding: 20px;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  outline: none;
`;

export const Form = styled.form`
  /* width: 350px; */
  display: flex;
  max-width: 600px;
  width: 100%;
  flex-direction: column;
  /* @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  } */
`;

export const UL = styled.ul`
    list-style: none;
    li:nth-child(4){
      float: right;
    };
    li {
    input{:nth-child(2){
    margin-left: 10px;
    }};
    padding: 0;
    margin: 0;
    list-style: none;
    margin-bottom: 10px;
    overflow: hidden;
    clear: both;
    position: relative;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        input{
        :nth-child(2){
            margin-left: 0;
            margin-top: 10px;
            };
        };
    };
    };
`;

export const NameEmail = styled.li`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
        flex-direction: column;
};
  
`;
