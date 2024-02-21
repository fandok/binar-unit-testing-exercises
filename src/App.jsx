import { useEffect, useState } from "react";

import { POKEMON_API } from "./constants";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(POKEMON_API);
      const responseJson = await response.json();
      setPokemon(responseJson.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      {value ? value : "App"}
      <button
        onClick={() => {
          setValue("Updated");
        }}
      >
        Click
      </button>
      <br />
      {pokemon.map((poke) => (
        <div key={poke.name}>{poke.name}</div>
      ))}
    </div>
  );
};

export default App;
