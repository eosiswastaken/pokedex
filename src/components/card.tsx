import React from "react";

export default function Card() {
    return (
        <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
            <div className="w-[128px] h-[180px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="text-xs h-full w-full flex flex-col items-center justify-between bg-gray-800 back">
                    <div className="w-full h-[16px] grid grid-cols-card-title justify-between"><span>#175</span><span>Pikachu</span><span>O</span></div>
                    <div className="w-full flex justify-center"><img className="h-[72px]" src="téléchargement.jpg" alt="" /></div>
                    <div className="w-full h-[16px] flex justify-start">gen1</div>
                </div>
            </div>
        </div>
    );
}