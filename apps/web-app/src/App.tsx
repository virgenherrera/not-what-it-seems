import React from "react";
import "./App.scss";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { useGetProduct } from "./hooks/use-get-product.hook";
import logo from "./logo.svg";

export function App() {
  const state = useGetProduct();

  console.log(JSON.stringify(state, null, 2));

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
