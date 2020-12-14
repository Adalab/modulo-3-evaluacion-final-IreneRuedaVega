import React from "react";

const FilterByGender = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "genderFilter",
    });
  };
  return (
    <>
      <select
        className="form__select"
        name="gender"
        id="gender"
        onChange={handleSelect}
      >
        <option value="" defaultValue>
          Gender
        </option>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">unknown</option>
      </select>
    </>
  );
};

export default FilterByGender;
