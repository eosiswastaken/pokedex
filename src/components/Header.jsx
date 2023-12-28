import "./Header.css"

export default function Header(){

    let generations = ['Gen. 1','Gen. 2','Gen. 3','Gen. 4','Gen. 5','Gen. 6','Gen. 7','Gen. 8','Gen. 9','Gen. 10',]
    let types = ['Bug','Dark' ,'Dragon' ,'Electric' ,'Fairy' ,'Fighting' ,'Fire' ,'Flying' ,'Ghost' ,'Grass' ,'Ground' ,'Ice' ,'Normal' ,'Poison' ,'Psychic' ,'Rock' ,'Steel' ,'Water' ]

      
    const generationComponents = generations.map(generation => {
        return <option value={generation}>{generation}</option>
    })

    const typeComponents = types.map(type => {
        return <option value={type}>{type}</option>
  })


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
                <span>Number</span>
                <span>Name</span>
                <span>Weight</span>
                <span>Size</span>
                <input type="text" name="" id="" />
            </div>
        </div>
    )
}