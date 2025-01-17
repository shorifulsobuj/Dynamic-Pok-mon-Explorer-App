import { useEffect, useState } from "react";

const useFetchPokemon = (API) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

        const detailedPokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return await response.json();
          })
        );

        setPokemon(detailedPokemonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [API]);

  return { pokemon, loading, error };
};

export default useFetchPokemon;
