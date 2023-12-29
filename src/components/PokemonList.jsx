import React, { useEffect } from "react";
import useAPI from "../context/Context";
import Card from "./card";

export default function PokemonList() {
    const { pokemons, pokemonTypes, loading } = useAPI();
    const pokemonComponents = pokemons.map(pk => {
        return <Card key={pk.id} pokemon={pk} pokemonTypes={pokemonTypes}></Card>
    })



    return (
        <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
            {loading ? "loading" : pokemonComponents}
        </div>
    );
}
