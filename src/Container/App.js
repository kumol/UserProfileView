import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from '../Components/pages/Home';
import Contact from '../Components/pages/Contact';
import About from '../Components/pages/About';
import Header from '../Components/layout/Header';
import Sidebar from '../Components/layout/Sidebar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NotFound from '../Components/pages/NotFound';
import AddUsers from '../Components/users/AddUsers';
import EditUser from '../Components/users/EditUser';
import ViewUser from '../Components/users/ViewUser';

const App = ()=>{
  return(
    <div >
      <Router>
      <Header></Header>
      <div className="container"> 
      <Switch >
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/users/add" component={AddUsers}/>
        <Route path="/users/edit/:id" component={EditUser}/>
        <Route path="/users/view/:id" component={ViewUser}></Route>
        <Route component={NotFound}/>
        
      </Switch>
      </div>
      </Router>
    </div>
  )
}
export default App;
