import React, { useState, useEffect } from "react"
import useAPI from "../context/Context"
import Card from "./card"

export default function PokemonList({ sortingData }) {
  const { pokemons, pokemonTypes, loading } = useAPI();
  const [sortedPokemonComponents, setSortedPokemonComponents] = useState([])

  useEffect(() => {
    console.log("pokemonlist got")
    console.log(sortingData)
    console.log(pokemons)

    const searchFilteredPokemons = pokemons.filter((pk) => {
        if (sortingData.search !== "") {
            console.log(pk.name[sortingData.language]) 
            return pk.name[sortingData.anguage].toLowerCase().startsWith(sortingData.search.toLowerCase())
        }
        return true
    })

    const filteredPokemons = searchFilteredPokemons.filter((pk) => {
      if (sortingData.type !== "0") {
          return pk.types.includes(parseInt(sortingData.type))
      }
      if (sortingData.generation !== "0") {
          console.log(pk.generation)
          console.log(parseInt(sortingData.generation))
          console.log("agh")
          console.log(pk.generation === parseInt(sortingData.generation))
          console.log("agh")
          return pk.generation === parseInt(sortingData.generation)
      }
        return true;
      })
  
    
    const sortedComponents = [...filteredPokemons].sort((a, b) => {
        let key = sortingData.sortingKey
        let order = sortingData.sortingOrder
        
      if (key === "name") {
        const nameA = a.name[sortingData.language]
        const nameB = b.name[sortingData.language]

        return order !== "NONE" ? order === "DESC" ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB) : 0
      }


      return order !== "NONE" ? (order === "DESC" ? b[key] - a[key] : a[key] - b[key]) : a[key] - b[key]
    })



    setSortedPokemonComponents(
        sortedComponents.map((pk) => (
          <Card key={pk.id} pokemon={pk} pokemonTypes={pokemonTypes} language={sortingData.language}/>
        ))
      );

  }, [pokemons, pokemonTypes, sortingData])




  return (
    <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
      {loading ? "Loading" : sortedPokemonComponents}
    </div>
  );
}
