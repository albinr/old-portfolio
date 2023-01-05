import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.text};
`;
export const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
  /* border-bottom: 1px solid ${(p) => p.theme.onSurface}; */
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    margin-right: 10px;
  }
`;

export const Subtitle = styled.div`
  width: 100%;
  font-size: 1.3rem;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
  /* border-bottom: 1px solid ${(p) => p.theme.onSurface}; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  h1{
    margin-right: 10px;
  }
`;