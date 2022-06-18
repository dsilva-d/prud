import logo from './images/logo.svg';
import haircut from './images/haircut.jpg';
import pruBack from './images/darkPru.png';
import './App.css';
import Prudifier from "./components/prudifier";
import './index.css';

function App() {
  return (
  <div style={{ backgroundImage:`url(${pruBack})`}}>
    <div className="App">
      <header className="App-header">
        <h1>P R U I F Y</h1>
        <Prudifier/>
      </header>
    </div>
    </div>
  );
}

export default App;


//<a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >