import React, { useState } from "react";
import Popup from "reactjs-popup";
import useAPI from "../context/Context";

export default function Card(data) {

    const { pokemons } = useAPI()
    const [showShinyImage, setShowShinyImage] = useState(false)

    const toggleShinyImage = () => {
        setShowShinyImage((prevShowShinyImage) => !prevShowShinyImage)
    }
    const resetImage = () => {
        setShowShinyImage(false)
    }
    return (
        <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
            <div key={data.pokemon.id}>
                <Popup trigger={<div className="w-[128px] h-[180px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" >
                    <div className="h-full w-full flex flex-col items-center justify-between bg-gray-800 back p-1">
                        <div className="w-full h-[16px] flex justify-between">
                            <div>#{data.pokemon.id}</div>
                            <div className="flex flex-row-reverse flex-wrap justify-between content-center gap-x-1">
                                <img className="h-[12px] rounded-full" src={data.pokemonTypes.find(type => type.id === data.pokemon.types[0])?.image} alt="" />
                                <img className="h-[12px] rounded-full" src={data.pokemonTypes.find(type => type.id === data.pokemon.types[1])?.image} alt="" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center"><img className="h-[76px]" src={data.pokemon.image} alt="" /></div>
                        <div className="text-center">{data.pokemon.name[data.language]}</div>
                        <div className="w-full h-[16px] flex justify-start">Gen. {data.pokemon.generation}</div>
                    </div>
                </div>} nested modal onClose={resetImage}>
                    {close => (
                        <div className="w-[500px] h-[500px] rounded-md text-white text-xs bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" >
                            <div className="h-full w-full flex flex-col items-center justify-between bg-gray-800 back p-1">
                                <div className="w-full flex justify-between">
                                    <div className="flex flex-wrap justify-between content-center gap-x-1">
                                        <img className="h-[48px] rounded-full" src={data.pokemonTypes.find(type => type.id === data.pokemon.types[0])?.image} alt="" />
                                        <img className="h-[48px] rounded-full" src={data.pokemonTypes.find(type => type.id === data.pokemon.types[1])?.image} alt="" />
                                        <div className="text-base">#{data.pokemon.id}</div>
                                    </div>
                                    <button className="close text-2xl " onClick={close}>
                                        &times;
                                    </button>
                                </div>
                                <div className="w-full flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        {Object.entries(data.pokemon?.evolvedFrom).map(([id, level]) => (
                                            <div className="flex flex-col items-center">
                                                <img className="h-[38px]" src={pokemons.find(pk => pk.id == id)?.image} />
                                                <div className="text-center">
                                                    {level}
                                                </div>
                                            </div>))}
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <img className={`absolute h-[152px] transition duration-500 ease-in-out ${showShinyImage ? 'opacity-0' : 'opacity-100'}`} src={data.pokemon.image} alt="" onClick={toggleShinyImage} />
                                            <img className={`h-[152px] transition duration-500 ease-in-out ${showShinyImage ? 'opacity-100' : 'opacity-0'}`} src={data.pokemon.image_shiny} alt="" onClick={toggleShinyImage} />
                                        </div>
                                        <div className="text-center text-base">{data.pokemon.name[data.language]}</div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {Object.entries(data.pokemon?.evolvesTo).map(([id, level]) => (
                                            <div className="flex flex-col items-center">
                                                <img className="h-[38px]" src={pokemons.find(pk => pk.id == id)?.image} />
                                                <div className="text-center">
                                                    {level}
                                                </div>
                                            </div>))}
                                    </div>
                                </div>
                                <div className="flex justify-between gap-10">
                                    <div>Height : {data.pokemon.height} m</div>
                                    <div>Weight : {data.pokemon.weight} kg</div>
                                </div>
                                <div className="flex gap-3">
                                    <div>HP : {data.pokemon.stats.hp}</div>
                                    <div>ATK : {data.pokemon.stats.atk}</div>
                                    <div>DEF : {data.pokemon.stats.def}</div>
                                    <div>SPATK : {data.pokemon.stats.spe_atk}</div>
                                    <div>SPDEF : {data.pokemon.stats.spe_def}</div>
                                    <div>SPD : {data.pokemon.stats.vit}</div>
                                </div>
                                <div className="w-full flex justify-start text-base">Gen. {data.pokemon.generation}</div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>

        </div>
    );
}
