import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/rmPersonaje.png";
import "../stylesheets/PageNotFound.scss";

const PageNotFound = () => {
  return (
    <>
      <section className="wrapper">
        <Link to="/" className="wrapper__link">
          <p>Volver</p>
        </Link>
        <p className="wrapper__text">We couldn´t find this character</p>
        <img className="wrapper__img" src={Image1} alt="" />
      </section>
    </>
  );
};

export default PageNotFound;
