import Filter from "./Filter"

export default function Header(){
    return(
        <div className="Header">
            <div className="title flex">
                <span className="font-pokemon text-5xl text-yellow-500">POKE </span>
                <img src="pokedex.svg" alt="" className="w-50"/>
                <span className="font-pokemon text-5xl text-yellow-500"> DEX</span>
                <div className="filters">   
                    <Filter></Filter>
                </div>
            </div>
        </div>
    )
}