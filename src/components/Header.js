import React from "react";
import Logo from "../images/logo.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="container__title">Tu buscador de personajes de</h1>
        <img className="container__img" src={Logo} alt="Logo de Rick y Morty" />
      </div>
    </header>
  );
};

export default Header;
