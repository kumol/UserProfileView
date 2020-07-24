import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person></Person>
      </header>

      
    </div>
  );
}

export default App;
