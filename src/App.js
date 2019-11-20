import React from "react";

import Button from "./components/button/button.component";
import Header from "./components/header/header.component";
import InputField from "./components/input-field/input-field.component";
import Title from "./components/title/title.component";

import "./App.css";

import { getPokemonCollection } from "./utils/pokemon";

function App() {
  const [limit, setLimit] = React.useState("");
  const [offset, setOffset] = React.useState("");
  const [pokemonCollection, setPokemonCollection] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setPokemonCollection(await getPokemonCollection({ limit: 20 }));
    })();
  }, []);

  const handleClick = async () => {
    setPokemonCollection(await getPokemonCollection({ limit, offset }));
  };

  const updateLimit = event => {
    setLimit(event.target.value);
  };

  const updateOffset = event => {
    setOffset(event.target.value);
  };

  return (
    <div className="App">
      <Header title="React Pokedex">
        <Title content="Pokedex in React" />
        <ul>
          <li>facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </Header>
      <main>
        <InputField
          handleChange={updateLimit}
          labelValue="How many PokeMon to show"
          name="limit"
          placeholder="Number of PokeMon"
          value={limit}
        />
        <InputField
          handleChange={updateOffset}
          labelValue="Which ID to start with"
          name="offset"
          placeholder="Starting index"
          value={offset}
        />
        <Button handleClick={handleClick}>Something New</Button>
        <ul>
          {pokemonCollection.map(({ name, url }, index) => (
            <li key={index}>
              <span>{name}</span>: <span>{url}</span>
            </li>
          ))}
        </ul>
      </main>
      <header>hello!</header>
    </div>
  );
}

export default App;
