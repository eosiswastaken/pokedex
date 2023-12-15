import Filter from "./Filter"
import "./Header.css"

export default function Header(){

    let generations = [
        { name: 'All generations' },
        { name: 'Gen. 1' },
        { name: 'Gen. 2' },
        { name: 'Gen. 3' },
        { name: 'Gen. 4' },
        { name: 'Gen. 5' },
        { name: 'Gen. 6' },
        { name: 'Gen. 7' },
        { name: 'Gen. 8' },
        { name: 'Gen. 9' },
        { name: 'Gen. 10' }
      ]

      let types = [
        { name: 'Type 1' },
        { name: 'Type 2' },
        { name: 'Type 3' },
        { name: 'Type 4' },
        { name: 'Type 5' },
        { name: 'Type 6' },
        { name: 'Type 7' },
        { name: 'Type 8' },
        { name: 'Type 9' },
        { name: 'Type 10' },
        { name: 'Type 11' },
        { name: 'Type 12' },
        { name: 'Type 13' },
        { name: 'Type 14' },
        { name: 'Type 15' },
        { name: 'Type 16' },
        { name: 'Type 17' },
        { name: 'Type 18' },
      ]

    return(
        <div className="Header">
            <div className="title flex">
                <span className="font-pokemon text-5xl text-yellow-500">POKE</span>
                <img src="pokedex.svg" alt="" className="w-50"/>
                <span className="font-pokemon text-5xl text-yellow-500">DEX</span>
            </div>
            <div className="filters">
                <br />
                <Filter content={generations}></Filter>
                <Filter content={types}></Filter>
            </div>
        </div>
    )
}