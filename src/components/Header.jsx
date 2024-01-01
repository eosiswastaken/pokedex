import "./Header.css";
import React, { useEffect } from "react";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header(props){

    let generations = ['All','Gen. 1','Gen. 2','Gen. 3','Gen. 4','Gen. 5','Gen. 6','Gen. 7','Gen. 8','Gen. 9','Gen. 10',]
    let types = ['All','Bug','Dark' ,'Dragon' ,'Electric' ,'Fairy' ,'Fighting' ,'Fire' ,'Flying' ,'Ghost' ,'Grass' ,'Ground' ,'Ice' ,'Normal' ,'Poison' ,'Psychic' ,'Rock' ,'Steel' ,'Water' ]

    const generationComponents = generations.map(generation => {
        return <option value={generation}>{generation}</option>
    })

    const typeComponents = types.map(type => {
        return <option value={type}>{type}</option>
    })

    const [sortingData, setSortingData] = React.useState({
        search:"",
        generation:"",
        type:"",
        sortingKey:"number",
        sortingOrder:"NONE"
    })

    useEffect(() => {
        console.log("from useEffect")
        console.log(sortingData)
        handleChange();
    }, [sortingData]);

    function switchState(key) {
        setSortingData((prevState) => {
            if (prevState.sortingKey === key) {
                switch (prevState.sortingOrder) {
                    case "NONE":
                        console.log("from " + prevState.sortingOrder + " to " + "ASC");
                        return {
                            ...prevState,
                            sortingOrder: "ASC",
                        };
                    case "ASC":
                        console.log("from " + prevState.sortingOrder + " to " + "DESC");
                        return {
                            ...prevState,
                            sortingOrder: "DESC",
                        };
                    case "DESC":
                        console.log("from " + prevState.sortingOrder + " to " + "NONE");
                        return {
                            ...prevState,
                            sortingOrder: "NONE",
                        };
                    default:
                        console.log("from " + prevState.sortingOrder + " to " + "NONE");
                        return {
                            ...prevState,
                            sortingOrder: "NONE",
                        };
                }
            } else {
                console.log("from " + prevState.sortingOrder + " to " + "ASC");
                return {
                    ...prevState,
                    sortingKey: key,
                    sortingOrder: "ASC",
                };
            }
        });
    }

    function getLabel(state, key) {
        if (state !== "NONE" && key === sortingData['sortingKey']) {
            return state === "ASC" ? "⌃" : "⌄";
        }
    }

    function handleChange() {
        console.log("sending");
        console.log(sortingData);
        props.onSortingChange(sortingData);
    }

    return (
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
                    <span onClick={() => switchState('id')}>Number {getLabel(sortingData['sortingOrder'],'id')}</span>
                    <span onClick={() => switchState('name')}>Name {getLabel(sortingData['sortingOrder'],'name')}</span>
                    <span onClick={() => switchState('weight')}>Weight {getLabel(sortingData['sortingOrder'],'weight')}</span>
                    <span onClick={() => switchState('height')}>Size {getLabel(sortingData['sortingOrder'],'height')}</span>
                </div>
                <input type="text" name="" id="" />
            </div>
        </div>
    );
}
