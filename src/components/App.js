import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";

const App = () => {
  //states
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con este array vacío le decimos a React que solo ejecute este useEffect una vez. Ahora solo pedimos los datos al arrancar.

  //event handlers

  const handleFilter = (data) => {
    console.log("manejando los filtros", data);
  };

  return (
    <div className="page">
      <Header />
      <Filters handleFilter={handleFilter} />
      <main className="main">
        <CharacterList characters={characters} />
      </main>
    </div>
  );
};

export default App;
