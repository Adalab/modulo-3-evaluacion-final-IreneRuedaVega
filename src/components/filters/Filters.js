import React from "react";
import FilterByName from "./FilterByName";
import "../../stylesheets/Filters.scss";

const Filters = (props) => {
  return (
    <section>
      <form className="form">
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
