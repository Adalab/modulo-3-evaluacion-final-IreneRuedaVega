import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con este array vacío le decimos a React que solo ejecute este useEffect una vez. Ahora solo pedimos los datos al arrancar.

  return (
    <>
      <div className="page">
        <Header />
      </div>
    </>
  );
};

export default App;
