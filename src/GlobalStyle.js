import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }


  html {
    scrollbar-width: thin;
    scrollbar-color: ${(p) => p.theme.gray};
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.background};
    border: ${(p) => p.theme.background};
    border-radius: 10px;
  }

  body {
    margin: 0;
    padding: 0;
  }
  
  main {
  }
  
  section {
  }
  
`;

export default GlobalStyle;