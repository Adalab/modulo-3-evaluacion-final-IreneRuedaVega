import React from "react";
import "../../stylesheets/Filters.scss";

const FilterByEpisode = (props) => {
  const handleChange = (ev) => {
    /* console.log(ev.target.value); */
    props.handleFilter({
      value: ev.target.value,
      key: "episodeFilter",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filtrar por episodio:
      </label>
      <input
        className="form__input-text"
        type="number"
        name="number"
        id="episodeFilter"
        placeholder="Busca tu episodio favorito"
        value={props.episodeFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByEpisode;
