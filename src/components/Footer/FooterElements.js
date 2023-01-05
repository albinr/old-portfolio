import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background: ${(p) => p.theme.background};
  display: flex;
  color: ${(p) => p.theme.gray};
  justify-content: center;
  align-items: center;
`;
