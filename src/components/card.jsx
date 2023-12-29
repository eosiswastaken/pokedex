import React from "react";
import useAPI from "../context/Context";
import Popup from "reactjs-popup";

export default function Card() {
    const { pokemons, pokemonTypes } = useAPI();
    return (
        <div className="flex flex-wrap gap-2 justify-center text-white text-xs">
            {pokemons.map(u => (
                <div key={u.id}>
                    <Popup trigger={<div className="w-[128px] h-[180px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" >
                        <div className="h-full w-full flex flex-col items-center justify-between bg-gray-800 back p-1">
                            <div className="w-full h-[16px] flex justify-between">
                                <div>#{u.id}</div>
                                <div className="flex flex-row-reverse flex-wrap justify-between content-center gap-x-1">
                                    <img className="h-[12px] rounded-full" src={pokemonTypes.find(type => type.id === u.types[0])?.image} alt="" />
                                    <img className="h-[12px] rounded-full" src={pokemonTypes.find(type => type.id === u.types[1])?.image} alt="" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center"><img className="h-[76px]" src={u.image} alt="" /></div>
                            <div className="text-center">{u.name.en}</div>
                            <div className="w-full h-[16px] flex justify-start">Gen. {u.generation}</div>
                        </div>
                    </div>} modal={true}>
                        <div className="w-[500px] h-[500px] rounded-md text-white text-xs bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" >
                            <div className="h-full w-full flex flex-col items-center justify-between bg-gray-800 back p-1">
                                <div className="w-full h-[16px] flex justify-between">
                                    <div>#{u.id}</div>
                                    <div className="flex flex-row-reverse flex-wrap justify-between content-center gap-x-1">
                                        <img className="h-[12px] rounded-full" src={pokemonTypes.find(type => type.id === u.types[0])?.image} alt="" />
                                        <img className="h-[12px] rounded-full" src={pokemonTypes.find(type => type.id === u.types[1])?.image} alt="" />
                                    </div>
                                </div>
                                <div className="w-full flex justify-center"><img className="h-[76px]" src={u.image} alt="" /></div>
                                <div className="text-center">{u.name.en}</div>
                                <div className="flex justify-between gap-10">
                                    <div>Height : {u.height} m</div>
                                    <div>Weight : {u.weight} kg</div>
                                </div>
                                <div className="flex gap-3">
                                    <div>HP : {u.stats.hp}</div>
                                    <div>ATK : {u.stats.atk}</div>
                                    <div>DEF : {u.stats.def}</div>
                                    <div>SPATK : {u.stats.spe_atk}</div>
                                    <div>SPDEF : {u.stats.spe_def}</div>
                                    <div>SPD : {u.stats.vit}</div>
                                </div>
                                <div className="w-full h-[16px] flex justify-start">Gen. {u.generation}</div>
                            </div>
                        </div>
                    </Popup>
                </div>
            ))
            }
        </div>
    );
}
