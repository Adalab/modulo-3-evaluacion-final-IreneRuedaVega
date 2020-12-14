import React from "react";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    //es un objeto para ir añadiendo todas las propiedades que yo quiera.
    props.handleFilter({
      value: ev.target.value,
      key: "statusFilter",
      checked: ev.target.checked,
    });
  };
  return (
    <div className="form__status">
      <label htmlFor="status" className="form__status--text">
        Status:
      </label>
      <input type="checkbox" value="Alive" id="Alive" onChange={handleChange} />
      <label htmlFor="status" className="form__status--alive">
        Alive
      </label>
      <input
        type="checkbox"
        value="unknown"
        id="unknow"
        onChange={handleChange}
      />
      <label htmlFor="status" className="form__status--unknow">
        Unknown
      </label>
      <input type="checkbox" value="Dead" id="Dead" onChange={handleChange} />
      <label htmlFor="status" className="form__status--dead">
        Dead
      </label>
    </div>
  );
};

export default FilterByStatus;
