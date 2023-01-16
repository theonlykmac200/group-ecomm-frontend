import "./App.css";
import "./index.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState(null);

  const URL = "https://group-3proj.herokuapp.com/product";

  const getProducts = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav products={products} />
      <Home />
      <Main products={products} />
    </div>
  );
}

export default App;
