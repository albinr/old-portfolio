import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import { ThemeProvider } from "styled-components";
import ThemeSwitch from "./ThemeSwitch";


const darkTheme = {
  body: "#1c1c1c",
  text: "#fff",
  title: "#fff",
  subtitle: "#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
};

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <ThemeSwitch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
