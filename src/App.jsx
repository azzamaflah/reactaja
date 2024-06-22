import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="React logo" />
        <img src={viteLogo} className="App-logo" alt="Vite logo" />
        <h1>Welcome to React with Vite</h1>
      </header>
      <main>
        <h2>Getting Started</h2>
        <p>This is a simple React application setup with Vite.</p>
        <button className="primary-button">Get Started</button>
      </main>
      <footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
