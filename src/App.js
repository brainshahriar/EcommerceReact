import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fun from './components/Hello';
import Fun2 from './components/Classs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <Fun />
        <Fun2 />
      </header>
    </div>
  );
}

export default App;
