import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetProduct } from './hooks/use-get-product.hook';

function App() {
  const state = useGetProduct();
  
  return (
    <div className="App">
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
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
