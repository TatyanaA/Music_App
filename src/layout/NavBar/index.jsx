import React from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'
import './style.css'



const NavBar = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "darkblue"
  }
  return (
    <>
    <nav>
      <h2>Queen</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/photos" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Photos</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
}
export default NavBar
