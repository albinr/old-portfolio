import React, { useContext } from "react";
import  { ThemeProvider} from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";
import GlobalStyle from "./GlobalStyle";

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


  