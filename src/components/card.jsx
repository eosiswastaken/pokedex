import React from "react";
import useAPI from "../context/Context";

export default function Card() {
    const { pokemons, pokemonTypes } = useAPI();
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {pokemons.map(u => (
                <div key={u.id} className="items-center justify-center text-white">
                    < div className="w-[200px] h-[280px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" >
                        <div className="text-xs h-full w-full flex flex-col items-center justify-between bg-gray-800 back">
                            <div className="w-full h-[16px] grid grid-cols-card-title justify-between">
                                <div>#{u.id}</div>
                                <div className="text-center">{u.name.en}</div>
                                <div className="flex flex-row-reverse">
                                    <img className="h-[16px]" src={pokemonTypes.find(type => type.id === u.types[0])?.image} alt="" />
                                    <img className="h-[16px]" src={pokemonTypes.find(type => type.id === u.types[1])?.image} alt="" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center"><img className="h-[144px]" src={u.image} alt="" /></div>
                            {u.types.map(t => pokemonTypes.find(type => type.id === t)?.name?.fr).join('/')}
                            <div className="w-full h-[16px] flex justify-start">{u.generation}</div>
                        </div>
                    </div>
                </div >
            ))
            }
        </div >
    );
}
