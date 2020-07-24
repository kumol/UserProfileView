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
    stage:false
  }
  nameChanger =(event)=>{
    let newName=event.target.value;
    this.setState({person:[
      {name:newName},
      {name:"max"}
    ]})
  }
  changeName(){
    this.setState({person:[{name:"kumol",age:25},{name:"Atik",age:25}]});
  }
  changeTheState(){
    
    console.log(this.state.stage)
    //this.setState({stage:tate});
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={()=>this.changeName()}>Name Changer</button>
          <img src={logo} className="App-logo" alt="logo" />
          <Person name={this.state.person[0].name} nameChanger={this.nameChanger} changes={this.changeName} state={this.state.stage} stateChanger={()=>this.changeTheState()}></Person>
          <Person name={this.state.person[0].name} state={this.state.stage} stateChanger={()=>this.changeTheState()}/>
        </header>
      </div>
    );
  }
}

export default App;
