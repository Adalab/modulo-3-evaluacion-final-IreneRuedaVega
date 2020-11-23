import React, { useEffect } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";

console.log(getDataFromApi());

const App = () => {
  useEffect(() => {
    console.log("Me estoy montando");
    getDataFromApi();
  });
  return <></>;
};

export default App;
