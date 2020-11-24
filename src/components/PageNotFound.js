import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/not-found.jpg";
import "../stylesheets/PageNotFound.scss";

const PageNotFound = () => {
  console.log("Hola");
  return (
    <>
      <section className="wrapper">
        <Link to="/" className="wrapper__link">
          <p>Volver</p>
        </Link>
        <p className="wrapper__text">Ese personaje no lo hemos encontrado</p>
        <img className="wrapper__img" src={Image} alt="" />
      </section>
    </>
  );
};

export default PageNotFound;
