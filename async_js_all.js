const fetchPokemonList = async () => {

    const listRes = await fetch('https://pokeapi.co/api/v2/pokemon');

    const pokeList = await listRes.json();

    return pokeList;
}



const fetchPokemon = async () => {
    const pokeList = await fetchPokemonList();

    const url = pokeList?.results[0]?.url;

    const pokemonJson = await fetch(url);

    const pokemon = await pokemonJson.json();

    console.log(pokemon.name);
}


const printAllPokemon = async () => {

    const pokeList = await fetchPokemonList();

    for (let i = 0; i < pokeList.results.length; i++) {
        const url = pokeList?.results[i]?.url;
        const pokemonJson = await fetch(url);
        const pokemon = await pokemonJson.json();

        console.log(pokemon.name);
    }

}


//fetchPokemon();

printAllPokemon();
