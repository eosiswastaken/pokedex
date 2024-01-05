import './App.css';
import Header from './components/Header';
import { APIContextProvider } from './context/Context';
import PokemonList from './components/PokemonList';
import React from 'react';

function App() {
  const [sortingData, setSortingData] = React.useState({});

  function handleSortingChange(data){
    setSortingData(data)
    console.log("app js got")
    console.log(sortingData)
  }

  return (
    <APIContextProvider>
      <div className="App">
        <Header onSortingChange={handleSortingChange}></Header>
        <PokemonList sortingData={sortingData}></PokemonList>
      </div>
    </APIContextProvider>
  );
}

export default App;
