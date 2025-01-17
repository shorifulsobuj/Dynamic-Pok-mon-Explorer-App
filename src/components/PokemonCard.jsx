import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">{pokemon.name}</h2>
      <div className="text-center mt-2">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm mr-1"
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <div className="text-center mt-4">
        <p>
          <strong>Height:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Speed:</strong> {pokemon.stats[5].base_stat}
        </p>
        <p>
          <strong>Experience:</strong> {pokemon.base_experience}
        </p>
        <p>
          <strong>Attack:</strong> {pokemon.stats[1].base_stat}
        </p>
        <p>
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
