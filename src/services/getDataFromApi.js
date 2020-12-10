const getDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      //Ya tengo el array que puedo iterar console.log(data.results); */
      return data.results.map((character) => {
        /* console.log(character.episode.length); */
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          episodes: character.episode.length,
          gender: character.gender,
          image: character.image,
        };
      });
    });
};

export default getDataFromApi;
