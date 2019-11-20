import React from 'react';

import './App.css'

import { getPokemonCollection } from './utils/pokemon'

function App () {
  const [limit, setLimit] = React.useState('')
  const [offset, setOffset] = React.useState('')
  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(async () => {
    setPokemon(await getPokemonCollection({ limit: 20 }))
  }, [])

  const handleClick = async () => {
    setPokemon(await getPokemonCollection({ limit, offset }))
  }

  const updateLimit = event => {
    setLimit(event.target.value)
  }

  const updateOffset = event => {
    setOffset(event.target.value)
  }

  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <section>
          <label>How many PokeMon to show: <input name="limit" onChange={updateLimit} placeholder="Number of pokemon" type="text" value={limit} /></label>
        </section>
        <section>
          <label>Which ID to start with: <input name="offset" onChange={updateOffset} placeholder="Starting index" type="text" value={offset} /></label>
        </section>
        <button onClick={handleClick}>Get New List</button>
        <ul>
          {pokemon.map(({ name, url }, index) => <li key={index}><span>{name}</span>: <span>{url}</span></li>)}
        </ul>
      </main>
    </div>
  );
}

export default App;
