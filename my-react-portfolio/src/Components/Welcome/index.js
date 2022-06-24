import React from 'react'
import './style.css'


function welcome({pageSelected, setPageSelected}) {
  return (
    <section className="section-one">

    <div className="section-one-content">

      <h2>Jugurta Maouchi
        <span className='span'>portfolio</span>
      </h2>

      <div className="section-one-content-p">
        <div className="border"></div>
        <p>Get to know who im and what i can do!</p>
        <div className="border"></div>
      </div> 

      <div className="button">
        <button><a href="#home" onClick={() => setPageSelected(true)}>Let's Start Here</a></button>
      </div> 

    </div>
    
  </section>
  ) 
}

export default welcome