import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    async function fetchData() {
        const { data: pokemon_data } = await axios.get(
            `https://pokedex-api.3rgo.tech/api/pokemon`
        );
        console.log(pokemon_data);
        setPokemons(pokemon_data['data']);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <APIContext.Provider value={{ pokemons }}>
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    console.log(context)
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}