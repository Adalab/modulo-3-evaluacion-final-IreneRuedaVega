import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";

const App = () => {
  //states
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  //montaje
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con este array vacío le decimos a React que solo ejecute este useEffect una vez. Ahora solo pedimos los datos al arrancar.

  //event handlers

  const handleFilter = (data) => {
    if (data.key === "nameFilter") {
      setNameFilter(data.value);
    }
  };

  //Filtrado de personajes
  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <div className="page">
      <Header />
      <Filters nameFilter={nameFilter} handleFilter={handleFilter} />
      <main className="main">
        <CharacterList
          characters={filteredCharacters}
          nameFilter={nameFilter}
        />
      </main>
    </div>
  );
};

export default App;
