import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    /*   console.log("Me estoy montando"); */
    getDataFromApi().then((data) => {
      /*  console.log(data); */
      setCharacters(data);
    });
  }, []); // con este array vacío le decimos a React que solo ejecute este useEffect una vez. Ahora solo pedimos los datos al arrancar.

  /*  console.log(characters); */

  return <></>;
};

export default App;
