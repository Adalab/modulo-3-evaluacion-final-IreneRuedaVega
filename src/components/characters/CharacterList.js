import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "../../stylesheets/CharacterList.scss";
import CharacterNotFound from "./CharacterNotFound";

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

  if (charactersElements.length === 0) {
    return <CharacterNotFound nameFilter={props.nameFilter} />;
  }

  return <ul className="cardList">{charactersElements}</ul>;
};

CharacterList.prototype = {
  characters: PropTypes.array,
};

export default CharacterList;
