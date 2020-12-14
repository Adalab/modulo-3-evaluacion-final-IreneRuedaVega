import React from "react";

const FilterBySpecies = (props) => {
  const handleSpecies = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "speciesFilter",
    });
  };
  return (
    <>
      <select
        className="form__select"
        name="species"
        id="species"
        onChange={handleSpecies}
      >
        <option defaultValue disabled selected>
          Species
        </option>
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
