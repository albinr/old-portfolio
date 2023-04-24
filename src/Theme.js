import React, { useContext } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  dark: {
    accent: "#3498DB",
    background: "#010409",
    reverseText: "#1c1c1c",
    gray:"#808080",
    text: "#f0f6fc",
    onSurface: "#0C1116",
    onBackground: "rgba(0, 0, 0, 0.8)",
    nav: "rgb(1,4,9,0.8)",
    border:"#30363D",
    buttonBg:"#20272D",
    
  },
  light: {
    accent: "#3498DB",
    background: "#F7F8FB",
    reverseText: "#FFFFFF",
    gray:"#808080",
    text:"#24292f",
    onSurface: "#FEFFFE",
    onBackground: "rgba(255, 255, 255, 0.8)",
    nav:"rgb(247,248,251,0.8)",
    border:"#D0D7DE",
    buttonBg:"#F7F9FA",
  },
};

export const Main = styled.main`
  padding: 0 150px;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }
    &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.gray};
    border-radius: 10px;
    border: 3px solid ${(p) => p.theme.background};
    }
    &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.background};
    }
  }
  body{
    background: ${(p) => p.theme.background};
  }

  
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;


  