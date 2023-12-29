import './App.css';
import Header from './components/Header';
import { APIContextProvider } from './context/Context';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Header></Header>
        <PokemonList></PokemonList>
      </div>
    </APIContextProvider>
  );
}

export default App;
