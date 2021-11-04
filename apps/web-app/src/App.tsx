import React from "react";
import "./App.scss";
import { ContentGrid } from "./components/content-grid/content-grid.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import logo from "./logo.svg";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <ContentGrid />
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
