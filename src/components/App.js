import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";
import PageNotFound from "./PageNotFound";

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");

  //montaje
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con este array vacío le decimos a React que solo ejecute este useEffect una vez. Ahora solo pedimos los datos al arrancar.

  //event handlers
  const handleFilter = (data) => {
    /* console.log(data.key, data.value); */
    if (data.key === "nameFilter") {
      setNameFilter(data.value);
      console.log("Name", nameFilter);
    } else if (data.key === "episodeFilter") {
      setEpisodeFilter(data.value);
      console.log("Episode", episodeFilter);
    }
  };

  //Organizamos los personajes por orden alfabético
  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  //Filtrado de personajes
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      if (episodeFilter === "") {
        return true;
      } else {
        return character.episodes === parseInt(episodeFilter);
      }
    });

  //Renderizamos
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
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
    } else {
      return <PageNotFound />;
    }
  };

  return (
    <div className="page">
      <Header />
      <Filters
        nameFilter={nameFilter}
        episodeFilter={episodeFilter}
        handleFilter={handleFilter}
      />
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
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
