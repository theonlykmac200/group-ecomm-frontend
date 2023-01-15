import "./App.css";
import "./index.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Home />
    </div>
  );
}

export default App;
