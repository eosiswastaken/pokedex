import "./Header.css";
import React, { useEffect } from "react";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header(props){

    let generations = ['All','Gen. 1','Gen. 2','Gen. 3','Gen. 4','Gen. 5','Gen. 6','Gen. 7','Gen. 8','Gen. 9']
    let types_en = ['All','Steel','Fighting', 'Dragon','Water' ,'Electric' ,'Fairy' ,'Fire' ,'Ice' ,'Insect' ,'Normal' ,'Grass' ,'Poison' ,'Psychic' ,'Rock' ,'Ground' ,'Specter' ,'Tenebres' ,'Flying']
    let types_fr = ['All','Acier','Combat', 'Dragon','Eau' ,'Electrique' ,'Fée' ,'Feu' ,'Glace' ,'Insecte' ,'Normal' ,'Herbe' ,'Poison' ,'Psy' ,'Pierre' ,'Sol' ,'Specrer' ,'Tenebres' ,'Vol']

    const generationComponents = generations.map((generation,index) => {
        return <option value={index}>{generation}</option>
    })

    let typeComponents = []



    const [sortingData, setSortingData] = React.useState({
        search:"",
        generation:"0",
        type:"0",
        sortingKey:"number",
        sortingOrder:"NONE",
        language:"en"
    })

    if (sortingData.language === "en") {
        typeComponents = types_en.map((type,index) => {
            return <option value={index}>{type}</option>
        })
    } else {
        typeComponents = types_fr.map((type,index) => {
            return <option value={index}>{type}</option>
        })
    }

    useEffect(() => {
        sendChange();
    }, [sortingData]);

    function switchState(key) {
        setSortingData((prevState) => {
            if (prevState.sortingKey === key) {
                switch (prevState.sortingOrder) {
                    case "NONE":
                        return {
                            ...prevState,
                            sortingOrder: "ASC",
                        };
                    case "ASC":
                        return {
                            ...prevState,
                            sortingOrder: "DESC",
                        };
                    case "DESC":
                        return {
                            ...prevState,
                            sortingOrder: "NONE",
                        };
                    default:
                        return {
                            ...prevState,
                            sortingOrder: "NONE",
                        };
                }
            } else {
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

    function handleChange(evt){
        const {name, value} = evt.target
        setSortingData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
        sendChange()
    }

    function sendChange() {
        props.onSortingChange(sortingData);
    }

    function switchLanguage(){
        if (sortingData.language === "fr"){
            setSortingData(prevData => {
                return {
                    ...prevData,
                    language:"en"
                }
            })
        } else {
            setSortingData(prevData => {
                return {
                    ...prevData,
                    language:"fr"
                }
            })
        }
    }

    return (
        <div className="Header">
            <div className="title flex">
                <span className="font-pokemon text-5xl text-yellow-500">POKE</span>
                <img src="pokedex.svg" alt="" className="w-50"/>
                <span className="font-pokemon text-5xl text-yellow-500">DEX</span>
            </div>
            <div>
                <p onClick={switchLanguage}>{sortingData.language === "fr" ? "🇫🇷" : "🇺🇸"}</p>
            </div>
            <div className="filters flex">
                <select onChange={handleChange} name="generation" id="generations">
                    {generationComponents}
                </select>
                <select onChange={handleChange} name="type" id="types">
                    {typeComponents}
                </select>
                <div id="sorting flex">
                    <span onClick={() => switchState('id')}> {sortingData.language === "en" ? "Number" : "Nombre"} {getLabel(sortingData['sortingOrder'],'id')}</span>
                    <span onClick={() => switchState('name')}> {sortingData.language === "en" ? "Name" : "Nom"} {getLabel(sortingData['sortingOrder'],'name')}</span>
                    <span onClick={() => switchState('weight')}> {sortingData.language === "en" ? "Weight" : "Poids"} {getLabel(sortingData['sortingOrder'],'weight')}</span>
                    <span onClick={() => switchState('height')}> {sortingData.language === "en" ? "Size" : "Taille"} {getLabel(sortingData['sortingOrder'],'height')}</span>
                </div>
                <input onChange={handleChange} type="text" name="search" id="" />
            </div>
        </div>
    );
}
