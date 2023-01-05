import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
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
    nav: "#171B23",
    border:"#30363D",
    buttonBg:"#20272D",
    
  },
  light: {
    accent: "#3498DB",
    background: "#F7F8FB",
    reverseText: "#FFFFFF",
    gray:"#808080",
    // text: "#1c1c1c",
    text:"#24292f",
    onSurface: "#FEFFFE",
    onBackground: "rgba(255, 255, 255, 0.8)",
    nav:"#FEFFFE",
    border:"#D0D7DE",
    buttonBg:"#F7F9FA",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.2s;
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


  // &::-webkit-scrollbar {
  // width: 10px; /* Mostly for vertical scrollbars */
  // height: 10px; /* Mostly for horizontal scrollbars */
  // }
  // &::-webkit-scrollbar-thumb { /* Foreground */
  // background: ${(p) => p.theme.text};
  // /* background: gray; */
  // border-radius: 6px;
  // }
  // &::-webkit-scrollbar-track { /* Background */
  // background: ${(p) => p.theme.background};
  // }