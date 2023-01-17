import { setToken, removeToken } from "./tokenService";

function signup(newUser) {
  return fetch(`https://group-3proj.herokuapp.com/user/signup`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error("Email already taken!");
    })
    .then(({ token }) => {
      setToken(token);
    });
}

function login(creds) {
  return fetch(`https://group-3proj.herokuapp.com/user/login`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => setToken(token));
}

function logout() {
  removeToken();
}

export { signup, login, logout };
