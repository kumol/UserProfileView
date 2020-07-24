import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state={
    person:[
      {name:"Anik",age:33},
      {name:"Shamik",age:25}
    ],
    stage:true
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person name={this.state.person[0].name}></Person>
          <Person name={this.state.person[1].name}/>
        </header>
      </div>
    );
  }
}

export default App;
