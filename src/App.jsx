import './App.css';
import Card from './components/card'
import Header from './components/Header';
import { APIContextProvider } from './context/Context';

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Header></Header>
        <Card></Card>
      </div>
    </APIContextProvider>
  );
}

export default App;
