import './App.css';
import Card from './components/card'
import Header from './components/Header';
import React from 'react';

function App() {

  const [pokemon, setPokemon] = React.useState()

  React.useEffect(() => {
    fetch("https://pokedex-api.3rgo.tech/api/pokemon")
      .then(response => response.json())
      .then(pokemon_data => setPokemon(pokemon_data))
  }, [])


  console.log(pokemon)
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
    </div>
  );
}

export default App;
