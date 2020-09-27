import React from "react"

const Header= ()=>{
    return (
      <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">React</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item active">
                     <a class="nav-link" href="/">Home </a>
                  </li>
                  <li class="nav-item"> 
                     <a class="nav-link" href="/contact">Contact</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/about" tabindex="-1">About</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </div>
    )
}
export default Header;