import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import { GlobalStyles } from "./styled-components/GlobalStyles";
import { lightMode, darkMode } from "./styled-components/theme";
import Homepage from "./components/Pages/Homepage";
import CountriesDetailsPage from "./components/Pages/CountriesDetailsPage";
import { Footer, Links } from "./styles";

function App() {
  const defaultTheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useState(
    localStorage.getItem("theme", defaultTheme ? "dark" : "light")
  );

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />

        <Routes>
          <Route exact path="/" element={<Homepage theme={theme} />} />
          <Route exact path={`/:name`} element={<CountriesDetailsPage />} />
        </Routes>

        <Footer>
          Challenge by
          <Links href="https://www.frontendmentor.io" target="_blank">
            Frontend Mentor.
          </Links>
          <span> </span>
          Coded by
          <Links
            href="https://github.com/DeadEyeIndia/rest-countries-app"
            target="_blank"
          >
            {" "}
            DeadEyeIndia
          </Links>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
