import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    // == render() dari class component
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button name="Klik aku, Mbak" />
        <Header batch={2} logo={logo} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
