import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getPokemonByID } from "../../services/pokemon/service";

export const Pokedex: FC = () => {
  const [pokemonID, setPokemonID] = useState<number>(1);
  const [actualPokemon, setActualPokemon] = useState<any>(undefined);

  useEffect(() => {
    const firstPokemon = async () => {
      const newPokemon = await getPokemonByID(pokemonID);
      setActualPokemon(newPokemon);
    };

    firstPokemon();
  }, []);

  const getPokemonID = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") setPokemonID(parseInt(event.target.value));
    else setPokemonID(1);
  };

  const fetchPokemon = async () => {
    const newPokemon = await getPokemonByID(pokemonID);
    setActualPokemon(newPokemon);
  };

  const renderIndexes = (listIndex: any[]) => {
    const paragraphs = [];

    for (const index of listIndex) {
      paragraphs.push(
        <p>
          Juego: {index.version.name}, indice: {index.game_index}
        </p>
      );
    }

    return paragraphs;
  };

  return (
    <div>
      <p>Pokedex ultra mega hiper mamalansky poderosa</p>
      <p>Escribe el numero del pokemon que quieras visualizar</p>
      <input type="text" onChange={getPokemonID} />
      {actualPokemon !== undefined ? (
        <div>
          <p>Nombre: {actualPokemon.name}</p>
          <p>Peso: {actualPokemon.weight}</p>
          <p>Altura: {actualPokemon.height}</p>
          <p>Experiencia base: {actualPokemon.base_experience}</p>
          <p>Indices en los juegos:</p>
          {actualPokemon.game_indices.map((game_index, index) => (
            <p key={`pokemon-${actualPokemon.name}-index-${index}`}>
              Juego: {game_index.version.name}, indice: {game_index.game_index}
            </p>
          ))}
        </div>
      ) : null}
      <button onClick={fetchPokemon}>Buscar</button>
    </div>
  );
};