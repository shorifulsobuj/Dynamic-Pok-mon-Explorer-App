import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center p-8">
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-600">Lets Catch Pokémon</h1>
      </header>
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 p-2 rounded-lg w-72"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchData.map((curPokemon) => {
          return <PokemonCard key={curPokemon.id} pokemon={curPokemon} />;
        })}
      </div>
    </section>
  );
};

export default Pokemon;
