import React from "react";
import "../../stylesheets/CharacterDetail.scss";

const ChracterDetail = (props) => {
  console.log(props);
  return (
    <div className="modal modal__hidden_">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <span>
          <h3>Nombre del personaje:</h3>
          <p>nombre</p>
        </span>
        <span>
          <h4>Especie:</h4>
          <p></p>
        </span>
        <span>
          <h4>Origen:</h4>
          <p></p>
        </span>
        <span>
          <h4>Status:</h4>
          <p></p>
        </span>
        <span>
          <h4>Episodios</h4>
          <p></p>
        </span>
      </div>
    </div>
  );
};

export default ChracterDetail;
