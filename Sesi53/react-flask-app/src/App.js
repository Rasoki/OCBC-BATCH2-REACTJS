import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [placeholder, setPlaceholder] = useState("Hi");
  const [serverTime, setServerTime] = useState(0);

  function synchronizeTime() {
    fetch("/time")
      .then((reponse) => reponse.json())
      .then((result) => setServerTime(result.time));
  }
  useEffect(() => {
    fetch("/hello")
      .then((reponse) => reponse.json())
      .then((result) => setPlaceholder(result.message));
    const timeInterval = setInterval(synchronizeTime, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Flask says <code>{placeholder}</code>
        </p>
        <p>
          Server Time:{" "}
          <code> {serverTime && new Date(serverTime * 1000).toString()} </code>
        </p>
      </header>
    </div>
  );
}

export default App;
