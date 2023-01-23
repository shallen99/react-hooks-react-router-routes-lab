import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>{
    <nav className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
    
    
    }</div>
  )
}

export default NavBar;