import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import { HeaderContainer, Title, Toggler, HeaderToggler } from "./styles";

const Header = ({ theme, themeToggler }) => {
  return (
    <HeaderContainer>
      <Title>Where in the world?</Title>
      <Toggler onClick={themeToggler}>
        <HeaderToggler>
          {theme === "light" ? (
            <FontAwesomeIcon
              icon={regular("moon")}
              size="lg"
              transform={{ rotate: 335 }}
            />
          ) : (
            <FontAwesomeIcon
              icon={solid("moon")}
              size="lg"
              transform={{ rotate: 335 }}
            />
          )}
        </HeaderToggler>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </Toggler>
    </HeaderContainer>
  );
};

export default Header;
