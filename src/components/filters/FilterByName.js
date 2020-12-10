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
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        placeholder="Search any character"
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
