import React from "react";
import "../../stylesheets/Filters.scss";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "nameFilter",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        placeholder="Busca tu personaje favorito"
        value={props.nameFilter}
        onChange={handleChange}
      />
    </>
  );
};

FilterByName.propTypes = {
  value: PropTypes.string,
  inputSearch: PropTypes.func,
};

export default FilterByName;
