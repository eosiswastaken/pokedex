import './App.css';
import Card from './components/card'
import Header from './components/Header';
import { APIContextProvider } from './context/Context';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <APIContextProvider>
        <Card></Card>
      </APIContextProvider>
    </div>
  );
}

export default App;
