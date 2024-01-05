import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    
const API = 'https://pokedex-api.3rgo.tech/api'
const [loading, setLoading] = useState(false);

const [pokemons, setPokemons] = useState([]);
const [pokemonTypes, setPokemonTypes] = useState([]);

    async function getPokemons(API){
        setLoading(true);
        try {
          const response = await fetch(API + '/pokemon');
          const data = await response.json();
          //console.log(data);
          setPokemons(data['data']);
        } catch (error) {
          console.log('Error', error);
        } finally {
          setLoading(false);
        }
      };






    async function getPokemonTypes(API) {
        setLoading(true);
        try {
          const response = await fetch(API + '/types');
          const data = await response.json();
          //console.log(data);
          setPokemonTypes(data['data']);
        } catch (error) {
          console.log('Error', error);
        } finally {
          setLoading(false);
        }
      };

      React.useEffect(() => {
        getPokemons(API)
        getPokemonTypes(API)
      },[])


    return (
        <APIContext.Provider value={{ pokemons, pokemonTypes, loading }}>
            {children}
        </APIContext.Provider>
    );
}




export default function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}