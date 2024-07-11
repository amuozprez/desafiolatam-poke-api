import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  const handleNavigate = () => {
    navigate(`/pokemones/${selectedPokemon}`);
  };

  return (
    <div className="content">
      <h1>Selecciona un Pokémon</h1>
      <select onChange={(e) => setSelectedPokemon(e.target.value)}>
        <option value="">Seleccione un Pokémon</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={handleNavigate}>Ver detalle</button>
    </div>
  );
};

export default Pokemones;
