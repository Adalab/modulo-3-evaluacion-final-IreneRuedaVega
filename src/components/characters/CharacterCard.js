import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <li className="card" id={props.id}>
      <div className="card__box">
        <img
          className="card__box--img"
          src={props.image}
          alt={`Foto de ${props.name}`}
        />
      </div>
      <div className="card__description">
        <h4 className="card__description--title">{props.name}</h4>
        <div className="card__description--species">
          <h4>{props.species}</h4>
        </div>
      </div>
    </li>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  specie: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterCard;
