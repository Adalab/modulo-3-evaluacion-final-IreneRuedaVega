import React from "react";
import FilterByName from "./FilterByName";
import "../../stylesheets/Filters.scss";

const Filters = () => {
  return (
    <section>
      <form className="form">
        <FilterByName />
      </form>
    </section>
  );
};

export default Filters;
