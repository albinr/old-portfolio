import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  dark: {
    accent: "#3498DB",
    background: "#18191A",
    text: "#FFFFFF",
    onSurface: "#3b3b3b",
    onBackground: "rgba(0, 0, 0, 0.8)",
  },
  light: {
    accent: "#3498DB",
    background: "#FFFFFF",
    text: "#1c1c1c",
    onSurface: "#cccccc",
    onBackground: "rgba(255, 255, 255, 0.8)",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.1s;
  }
  &::-webkit-scrollbar {
  width: 10px; /* Mostly for vertical scrollbars */
  height: 10px; /* Mostly for horizontal scrollbars */
  }
  &::-webkit-scrollbar-thumb { /* Foreground */
  /* background: ${(p) => p.theme.text}; */
  background: gray;
  border-radius: 6px;
  }
  &::-webkit-scrollbar-track { /* Background */
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