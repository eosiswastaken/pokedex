import "./Header.css"
import React from "react"
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header(){

    let generations = ['All','Gen. 1','Gen. 2','Gen. 3','Gen. 4','Gen. 5','Gen. 6','Gen. 7','Gen. 8','Gen. 9','Gen. 10',]
    let types = ['All','Bug','Dark' ,'Dragon' ,'Electric' ,'Fairy' ,'Fighting' ,'Fire' ,'Flying' ,'Ghost' ,'Grass' ,'Ground' ,'Ice' ,'Normal' ,'Poison' ,'Psychic' ,'Rock' ,'Steel' ,'Water' ]

      
    const generationComponents = generations.map(generation => {
        return <option value={generation}>{generation}</option>
    })

    const typeComponents = types.map(type => {
        return <option value={type}>{type}</option>
  })
  const [sortingStates,setSortingStates] = React.useState({
    number:"NONE",
    name:"ASC",
    weight:"NONE",
    size:"DESC"
  })

  const [queryData,setQueryData] = React.useState({
    search:"",
    generation:"",
    type:"",
    sortingKey:"",
    sortingOrder:""
  })


  function switchState(state){
    let currentState = sortingStates[state]
    switch (currentState) {
        case "NONE":
            changeState(state,'ASC')
            console.log(sortingStates)
            break
        case "ASC":
            changeState(state,'DESC')
            console.log(sortingStates)
            break
    
        case "DESC":
            changeState(state,'NONE')
            console.log(sortingStates)
            break
        
        default:
            changeState(state,'NONE')
            console.log(sortingStates)
            break
    
    }
  }


  function changeState(state,val){
    setSortingStates(prevState => ({
        ...prevState,
        [state]: val
    }));
  }

  function getLabel(state){
    if (state !== "NONE"){
        return state === "ASC" ? "⌃" : "⌄";
  }
}

    return(
        <div className="Header">
            <div className="title flex">
                <span className="font-pokemon text-5xl text-yellow-500">POKE</span>
                <img src="pokedex.svg" alt="" className="w-50"/>
                <span className="font-pokemon text-5xl text-yellow-500">DEX</span>
            </div>
            <div className="filters flex">
                <select name="generations" id="generations">
                    {generationComponents}
                </select>
                <select name="types" id="types">
                    {typeComponents}
                </select>
                <div id="sorting flex">
                    <span onClick={() => switchState('number')}>Number {getLabel(sortingStates['number'])}</span>
                    <span onClick={() => switchState('name')}>Name {getLabel(sortingStates['name'])}</span>
                    <span onClick={() => switchState('weight')}>Weight {getLabel(sortingStates['weight'])}</span>
                    <span onClick={() => switchState('size')}>Size {getLabel(sortingStates['size'])}</span>
                </div>
                <input type="text" name="" id="" />
            </div>
        </div>
    )
}
