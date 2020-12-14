import React from "react";
import FilterByName from "./FilterByName";
import "../../stylesheets/Filters.scss";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };
  return (
    <section>
      <form className="form" onSubmit={preventEvent}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
        <FilterByGender handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
        <FilterByStatus handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
