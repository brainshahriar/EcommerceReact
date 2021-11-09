import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fun from './components/Hello';
import Fun2 from './components/Classs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> <Fun name='orange' weight='50'/> </h1>
       <h1> <Fun name='red' weight='50'/> </h1>
       <h1> <Fun name='blue' weight='30'/> </h1>

      </header>
    </div>
  );
}

export default App;
