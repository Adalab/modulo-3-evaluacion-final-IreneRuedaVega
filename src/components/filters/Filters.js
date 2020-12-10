import React from "react";
import FilterByName from "./FilterByName";
import "../../stylesheets/Filters.scss";
import FilterByEpisode from "./FilterByEpisode";

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
        <FilterByEpisode
          episodeFilter={props.episodeFilter}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
