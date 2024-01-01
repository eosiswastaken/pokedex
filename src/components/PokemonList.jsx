import React, { useState, useEffect } from "react";
import useAPI from "../context/Context";
import Card from "./card";

export default function PokemonList({ sortingData }) {
  const { pokemons, pokemonTypes, loading } = useAPI();
  const [sortedPokemonComponents, setSortedPokemonComponents] = useState([]);

  useEffect(() => {
    console.log("pokemonlist got")
    console.log(sortingData)
    console.log(pokemons)
    
    const sortedComponents = [...pokemons].sort((a, b) => {
        let key = sortingData.sortingKey
        let order = sortingData.sortingOrder

      return order !== "NONE" ? (order === "DESC" ? b[key] - a[key] : a[key] - b[key]) : a[key] - b[key]
    },[sortingData])

    setSortedPokemonComponents(
      sortedComponents.map((pk) => (
        <Card key={pk.id} pokemon={pk} pokemonTypes={pokemonTypes} />
      ))
    );
  }, [pokemons, pokemonTypes, sortingData]);

  return (
    <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
      {loading ? "Loading" : sortedPokemonComponents}
    </div>
  );
}
