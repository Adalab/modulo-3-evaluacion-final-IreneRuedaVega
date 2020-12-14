import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";
import PageNotFound from "./PageNotFound";
import Loading from "./Loading";

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  //montaje
  useEffect(() => {
    setLoading(true);
    getDataFromApi()
      .then((data) => {
        setCharacters(data);
      })
      .then(() => setLoading(false));
  }, []); // con este array vacío le decimos a React que solo ejecute este useEffect una vez. Ahora solo pedimos los datos al arrancar.

  //event handlers
  const handleFilter = (data) => {
    if (data.key === "nameFilter") {
      setNameFilter(data.value);
    } else if (data.key === "genderFilter") {
      setGenderFilter(data.value);
    } else if (data.key === "speciesFilter") {
      setSpeciesFilter(data.value);
    } else if (data.key === "statusFilter") {
      if (data.checked === true) {
        const newStatusFilter = [...statusFilter];
        newStatusFilter.push(data.value);
        setStatusFilter(newStatusFilter);
      } else {
        const newStatusFilter = statusFilter.filter(
          (statu) => statu !== data.value
        );
        setStatusFilter(newStatusFilter);
      }
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
      if (genderFilter === "All") {
        return true;
      } else {
        return character.gender === genderFilter;
      }
    })
    .filter((character) => {
      if (speciesFilter === "All") {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    })
    .filter((character) => {
      if (statusFilter.length === 0) {
        return true;
      } else {
        return statusFilter.includes(character.status);
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
      <Filters nameFilter={nameFilter} handleFilter={handleFilter} />
      <Switch>
        <Route exact path="/">
          <main className="main">
            <CharacterList
              characters={filteredCharacters}
              nameFilter={nameFilter}
              genderFilter={genderFilter}
              speciesFilter={speciesFilter}
              statusFilter={statusFilter}
            />
          </main>
        </Route>
        <Route path="/character/:id" component={renderCharacterDetail} />
      </Switch>
      <Loading loading={loading} />
    </div>
  );
};

export default App;
