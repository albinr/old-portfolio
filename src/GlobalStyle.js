import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: url(../public/Montserrat-VariableFont_wght.ttf);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
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
    background-color: v;
    border: ${(p) => p.theme.background};
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${(p) => p.theme.background};
    color: ${(p) => p.theme.text};
    font-family: 'Montserrat', sans-serif;
    line-height: 1.3;
    @media (max-width: 480px) {
      /* font-size: var(--fz-lg); */
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      /* #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      } */
    }
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px;
    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }
  
  section {
    display: flex;
    align-items: center;
    min-height: 100vh;
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }
  p {
    margin: 0 0 15px 0;
    /* font-size: 20px; */
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }

  
`;

export default GlobalStyle;