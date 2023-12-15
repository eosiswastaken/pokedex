import React from "react";
import useAPI from "../context/Context";

export default function Card() {
    const { pokemons } = useAPI();
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {pokemons.map(u => (
                <div key={u.id} className="items-center justify-center text-white">
                    < div className="w-[300px] h-[420px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" >
                        <div className="text-xs h-full w-full flex flex-col items-center justify-between bg-gray-800 back">
                            <div className="w-full h-[16px] grid grid-cols-card-title justify-between"><span>#175</span><span>{u.name.fr}</span><span>O</span></div>
                            <div className="w-full flex justify-center"><img className="h-[72px]" src="téléchargement.jpg" alt="" /></div>
                            <div className="w-full h-[16px] flex justify-start">gen1</div>
                        </div>
                    </div>
                </div >
            ))
            }

        </div >


    );
}
