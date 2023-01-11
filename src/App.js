import logo from './images/logo.svg';
import './App.css';
import Prudifier from "./components/prudifier";
import './index.css';
import './vendors/fontawesome/css/all.min.css';

function App() {
  return (
    <div className="App" style={{overflow: "hidden"}}>
      <header className="App-header">
        <h1>- P R U I F Y -</h1>
        <Prudifier/>

        <h4>Screenshot your Pruify and submit it to our Instagram! <a href="https://www.instagram.com/pruifyofficial" style={{textDecoration: 'none', color: 'white'}}>@pruifyofficial <i className={`fab fa-instagram`}></i></a></h4>
        <h1> </h1>
      </header>
    </div>
  );
}

export default App;