import React from "react";
import "../stylesheets/Loading.scss";
const Loading = (props) => {
  return props.loading ? <div className="loading" /> : null;
};

export default Loading;
