import React from "react";
import "./App.scss";
import { ContentGrid } from "./components/content-grid/content-grid.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { UseAppProvider } from "./context/app.context";

export function App() {
  return (
    <UseAppProvider>
      <div className="App">
        <NavBar />
        <ContentGrid />
      </div>
    </UseAppProvider>
  );
}
