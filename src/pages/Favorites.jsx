import PokemonCard from "../components/PokemonCard";

const Favorites = () => {
  const favoritePokemon = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-6">Favorite Pokémon</h1>
      {favoritePokemon.length === 0 ? (
        <p className="text-center">No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favoritePokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemonData={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
