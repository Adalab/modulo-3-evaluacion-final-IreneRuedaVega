import React from "react";
import "../../stylesheets/CharacterDetail.scss";
import { Link } from "react-router-dom";

const ChracterDetail = (props) => {
  return (
    <div className="modal">
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
              <h4 className="species__title">Especie:</h4>
              <p>{props.species}</p>
            </span>
            <span className="origin">
              <h4 className="origin__title">Origen:</h4>
              <p>{props.origin}</p>
            </span>
            <span className="status">
              <h4 className="status__title">Status:</h4>
              <p>{props.status}</p>
            </span>
            <span className="episode">
              <h4 className="episode__title">Episodios:</h4>
              <p>{props.episodes}</p>
            </span>
          </div>
        </div>
        <Link to="/" className="goBack">
          <div className="home">Volver</div>
        </Link>
      </div>
    </div>
  );
};

export default ChracterDetail;
