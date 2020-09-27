import React from "react"
import { Link , NavLink} from "react-router-dom";

const Header= ()=>{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" exact to="/">React</NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
               <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                     <NavLink className="nav-link" exact to="/">Home </NavLink>
                  </li>
                  <li className="nav-item"> 
                     <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" exact to="/about" >About</NavLink>
                  </li>
               </ul>
            </div>
         </div>
         <div>
           <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
         </div>
      </nav>
    )
}
export default Header;