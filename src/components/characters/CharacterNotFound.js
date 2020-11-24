import React from "react";
import "../../stylesheets/CharacterNotFound.scss";
import Image from "../../images/not-found.jpg";

const CharacterNotFound = (props) => {
  return (
    <>
      <section className="noCharacter">
        <img
          className="noCharacter__img"
          src={Image}
          alt="Imagen de Rick y Morty"
        />
        <p className="noCharacter__text">{`El nombre ${props.nameFilter} no coincide con ningún personaje`}</p>
      </section>
    </>
  );
};

export default CharacterNotFound;
