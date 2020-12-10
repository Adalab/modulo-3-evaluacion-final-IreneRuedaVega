import React from "react";
import "../../stylesheets/CharacterNotFound.scss";
import Image from "../../images/rmPersonaje.png";

const CharacterNotFound = (props) => {
  return (
    <>
      <section className="noCharacter">
        <p className="noCharacter__text">{`Geez! The name ${props.nameFilter} doesn´t match any character`}</p>
        <img
          className="noCharacter__img"
          src={Image}
          alt="Imagen de Rick y Morty"
        />
      </section>
    </>
  );
};

export default CharacterNotFound;
