import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
  return (
  <>
    <header>

      <h1>Web Developer</h1>
      
      <nav>
        <ul className='navbar'>
          <Link to={"/"}><li >Home</li></Link>
          <Link to={"about"}><li> About</li></Link>
          <Link to={"contact"}> <li>Contact</li></Link>
          <Link to={"work"}> <li>Work</li></Link>
        </ul>  
      </nav>

      <div className='logo'>
        <h2 data-text="Jugurta">Jugurta</h2>
      </div>
    </header>
  </>  
)
}

export default Nav