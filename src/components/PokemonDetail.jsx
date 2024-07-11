import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content pokemon-detail">
      <img className="description-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="details">
        <h1>{pokemon.name}</h1>
        <p><span className="bold">Peso:</span> {pokemon.weight}</p>
        <p><span className="bold">Altura:</span> {pokemon.height}</p>
        <p><span className="bold">Tipo:</span> {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p><span className="bold">HP:</span> {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
        <p><span className="bold">Ataque:</span> {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
        <p><span className="bold">Defensa:</span> {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
        <p><span className="bold">Velocidad:</span> {pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;
