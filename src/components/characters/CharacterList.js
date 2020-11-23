import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "../../stylesheets/CharacterList.scss";

const CharacterList = (props) => {
  const charactersElements = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
        status={character.status}
      />
    );
  });

  return <ul className="cardList">{charactersElements}</ul>;
};

CharacterList.prototype = {
  data: PropTypes.array,
};

export default CharacterList;
