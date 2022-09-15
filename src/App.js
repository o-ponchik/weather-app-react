import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <Weather />
      </div>
      <p>
        <a href="https://github.com/o-ponchik" alt="GitHub">
          Open-source code
        </a>
        , built by
        <a href="https://lighthearted-pony-a59add.netlify.app/" alt="Portfolio">
          Mariia Matviian
        </a>
      </p>
    </div>
  );
}

export default App;
