const getPokemonCollection = async ({ limit = 50, offset = 0 } = {}) => {
  const json = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`).then(res => res.json())

  return json.results
}

export { getPokemonCollection }
