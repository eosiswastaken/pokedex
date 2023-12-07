import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const { data: pokemon_data } = await axios.get(
                `https://pokedex-api.3rgo.tech/api/pokemon`
            );
            console.log(pokemon_data);
            setPokemon(pokemon_data);
        }
        fetchData();
    }, []);
    return (
        <APIContext.Provider
            value={{
                pokemon
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}