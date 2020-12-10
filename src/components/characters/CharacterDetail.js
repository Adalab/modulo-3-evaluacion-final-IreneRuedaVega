import React from "react";
import "../../stylesheets/CharacterDetail.scss";
import { Link } from "react-router-dom";
import Logo2 from "../../images/rmLogo.png";

const ChracterDetail = (props) => {
  return (
    <div className="modal">
      <img className="modal__img" src={Logo2} alt="Logo de Rick y Morty" />
      <Link to="/" className="home">
        Back
      </Link>
      <div className="characterModal">
        <img
          className="characterModal__img"
          src={props.image}
          alt={props.name}
        />
        <div className="characterModal__description">
          <span className="characterModal__description--name">
            <h3>{props.name}</h3>
          </span>
          <div className="characterModal__description--box">
            <span className="species">
              <p className="species__text">
                <h4 className="species__text--title">Specie:</h4>
                {props.species}
              </p>
            </span>
            <span className="origin">
              <p className="origin__text">
                <h4 className="origin__text--title">Origin:</h4>
                {props.origin}
              </p>
            </span>
            <span className="status">
              <p className="status__text">
                <h4 className="status__text--title">Status:</h4>
                {props.status}
              </p>
            </span>
            <span className="episode">
              <p className="episode__text">
                <h4 className="episode__text--title">Episodes:</h4>
                {props.episodes}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChracterDetail;
