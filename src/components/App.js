import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
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

  //Organizar los personajes por orden alfabético

  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  //Filtrado de personajes
  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    console.log("Entro en la función");
    console.log(props.match);
    const routeCharacterId = parseInt(props.match.params.id);
    console.log(routeCharacterId);
    const character = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          status={character.status}
          episodes={character.episodes}
        />
      );
    }
  };

  return (
    <div className="page">
      <Header />
      <Filters nameFilter={nameFilter} handleFilter={handleFilter} />
      <Switch>
        <Route exact path="/">
          <main className="main">
            <CharacterList
              characters={filteredCharacters}
              nameFilter={nameFilter}
            />
          </main>
        </Route>
        <Route path="/character/:id" component={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
