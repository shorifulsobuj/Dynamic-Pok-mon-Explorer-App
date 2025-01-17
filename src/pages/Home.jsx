import { useState } from "react";
import useFetchPokemon from "../hooks/useFetchPokemon";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=50";
  const { pokemon, loading, error } = useFetchPokemon(API);
  const [search, setSearch] = useState("");

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-6">Pokémon List</h1>
      <SearchBar searchValue={search} onSearchChange={setSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemonData={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
