import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from '../Components/pages/Home';
import Contact from '../Components/pages/Contact';
import About from '../Components/pages/About';
import Header from '../Components/layout/Header';
import Sidebar from '../Components/layout/Sidebar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = ()=>{
  return(
    <div >
      <Router>
      <Header></Header>
      <div className="container"> 
      <Home></Home>
      <Contact></Contact>
      <About></About>
      </div>
      </Router>
    </div>
  )
}
export default App;
