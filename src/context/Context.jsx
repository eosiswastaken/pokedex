import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    async function fetchPokemons() {
        const { data: pokemon_data } = await axios.get(
            `https://pokedex-api.3rgo.tech/api/pokemon`
        );
        console.log(pokemon_data);
        setPokemons(pokemon_data['data']);
    }
    useEffect(() => {
        fetchPokemons();
    }, []);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    async function fetchTypes() {
        const { data: types_data } = await axios.get(
            `https://pokedex-api.3rgo.tech/api/types`
        );
        console.log(types_data);
        setPokemonTypes(types_data['data']);
    }
    useEffect(() => {
        fetchTypes();
    }, []);
    return (
        <APIContext.Provider value={{ pokemons, pokemonTypes }}>
            {children}
        </APIContext.Provider>
    );
}

export default function useAPI() {
    const context = useContext(APIContext);
    console.log(context)
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}