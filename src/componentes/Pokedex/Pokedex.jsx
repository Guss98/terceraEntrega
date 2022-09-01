import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./PokedexStyles.css";
import PokeDetail from "./PokeDetail";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorActions.js";

export const Pokedex = () => {
  const dispatch = useDispatch();
  const [pokemon_name, set_pokemon_name] = useState("");
  const manejarSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pokedex">
      <NavBar />
      <form className="form" onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Buscar Pokemon"
          className="inputForm"
          value={pokemon_name}
          onChange={(event) => {
            set_pokemon_name(event.target.value);
          }}
        />

        <button
          className="botonInput"
          onClick={() => {
            dispatch(fetchPokemon(pokemon_name));
          }}
        >
          Buscar
        </button>
      </form>

      <div className="resultado">
        <PokeDetail />
      </div>
    </div>
  );
};
