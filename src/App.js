import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import { GlobalStyles } from "./styled-components/GlobalStyles";
import { lightMode, darkMode } from "./styled-components/theme";
import Homepage from "./components/Pages/Homepage";
import CountriesDetailsPage from "./components/Pages/CountriesDetailsPage";

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
      </ThemeProvider>
    </>
  );
}

export default App;
