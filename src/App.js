import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Gotch You</p>
        <Person name="Saurabh" age="20" />
        {/* <Person /> */}
        <Person>My Hobbies Are Racing</Person>
        {/* <Person /> */}
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
