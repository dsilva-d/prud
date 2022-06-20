import logo from './images/logo.svg';
import './App.css';
import Prudifier from "./components/prudifier";
import './index.css';

function App() {
  return (
    <div className="App" style={{overflow: "hidden"}}>
      <header className="App-header">
        <h1>- P R U I F Y -</h1>
        <Prudifier/>
      </header>
    </div>
  );
}

export default App;