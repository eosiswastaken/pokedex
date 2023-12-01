import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card'

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card></Card>
      </header>
    </div>
  );
}

export default App;
