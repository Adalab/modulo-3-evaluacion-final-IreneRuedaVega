import React from "react";
import Logo from "../images/rmLogo.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo de Rick y Morty" />
    </header>
  );
};

export default Header;
