import './App.css';
import Card from './components/card'
import Header from './components/Header';
import useAPI from './context/Context';

function App() {
  useAPI()
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
    </div>
  );
}

export default App;
