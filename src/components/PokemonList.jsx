import React from "react";
import useAPI from "../context/Context";
import Card from "./card";

export default function PokemonList(sortingData) {
    const { pokemons, pokemonTypes, loading } = useAPI();
    const pokemonComponents = pokemons.map(pk => {
        return <Card key={pk.id} pokemon={pk} pokemonTypes={pokemonTypes}></Card>
    })
    console.log(pokemonComponents)

    React.useEffect(() => {
        console.log('change')
    },[sortingData])



    return (
        <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
            {loading ? "loading" : pokemonComponents}
        </div>
    );
}
