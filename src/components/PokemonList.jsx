import React, { useState, useEffect } from "react"
import useAPI from "../context/Context"
import Card from "./card"

export default function PokemonList({ sortingData }) {
  const { pokemons, pokemonTypes, loading } = useAPI();
  const [sortedPokemonComponents, setSortedPokemonComponents] = useState([])
  const language = "en"

  useEffect(() => {
    console.log("pokemonlist got")
    console.log(sortingData)
    console.log(pokemons)

    const searchFilteredPokemons = pokemons.filter((pk) => {
        if (sortingData.search !== "") {
            console.log(pk.name[language]) 
            return pk.name[language].toLowerCase().startsWith(sortingData.search.toLowerCase())
        }
        return true
    })

    const filteredPokemons = searchFilteredPokemons.filter((pk) => {
        if (sortingData.type !== "0") {
            console.log(pk.types)
            console.log(pk.types.includes(parseInt(sortingData.type)))
            return pk.types.includes(parseInt(sortingData.type))
        }
        return true;
      })
  
    
    const sortedComponents = [...filteredPokemons].sort((a, b) => {
        let key = sortingData.sortingKey
        let order = sortingData.sortingOrder
        
      if (key === "name") {
        const nameA = a.name[language]
        const nameB = b.name[language]

        return order !== "NONE" ? order === "DESC" ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB) : 0
      }


      return order !== "NONE" ? (order === "DESC" ? b[key] - a[key] : a[key] - b[key]) : a[key] - b[key]
    })



    setSortedPokemonComponents(
        sortedComponents.map((pk) => (
          <Card key={pk.id} pokemon={pk} pokemonTypes={pokemonTypes} />
        ))
      );

  }, [pokemons, pokemonTypes, sortingData])




  return (
    <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
      {loading ? "Loading" : sortedPokemonComponents}
    </div>
  );
}
