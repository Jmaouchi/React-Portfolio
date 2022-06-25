import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Welcome from '../Welcome';
import './style.css'

function Nav(pageSelected, setPageSelected) {
  let time = 0
  const renders = ()=>{
    var setTime = setInterval (trackMyScore, 1000);
    function trackMyScore(){
      let timer =  document.querySelector('.loader')
      const score =  timer.textContent = time++ 
      
      if(score === 4){
        return <Welcome />
      }
    };

  }

  return (
  <>
    <header>

      <h1>Web Developer</h1>
      
      <nav>
        <ul className='navbar'>
          <li ><a href="http://localhost:3000/">Home</a></li>
          <li><Link to={"about"}>About</Link></li>
          <li><Link to={"contact"}>Contact</Link></li>
          <li><Link to={"work"}>Work</Link></li>
        </ul>  
      </nav>

      <div className='logo'>
        <h2 data-text="Jugurta">Jugurta</h2>
      </div>

      <section>
        <h3 className='loader'>
        {renders()}
        </h3>
      </section>
    </header>
  </>  
)
}

export default Nav