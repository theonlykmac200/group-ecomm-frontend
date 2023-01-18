import "./App.css";
import "./index.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

import { getUserFromToken } from "./services/tokenService";
import { logout } from "./services/signupService";

function App(props) {
  const [userState, setUserState] = useState({ user: getUserFromToken() });

  function handleSignupAndLogIn() {
    let user = getUserFromToken();
    console.log("****************" + user);
    setUserState({ user: getUserFromToken() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
  }

  const [products, setProducts] = useState([]);

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
      <Nav
        user={userState.user}
        handleLogout={handleLogout}
        products={products}
        setProducts={setProducts}
      />
      <Main
        user={userState.user}
        handleSignupAndLogIn={handleSignupAndLogIn}
        products={products}
      />
    </div>
  );
}

export default App;
