import React from 'react'
import img1 from '../../images/djigo.jpg'
import './style.css'

function About() {
  return (
    <section id="about-me" class="section-two">

    <div class="flex">
      <div class="border"></div>
      <h3>About <span style={{ color:"black" }}>Me</span></h3>
      <div class="border"></div>
    </div>

    <div class="section-two-content">

      <div class="image">
        <img src={img1} alt="My avatar"></img>
      </div>

      <div class="section-two-content-context">

        <div class="about-me-context">
          <h4>who Im I?</h4>
          <p> 
            Hello everyone and welcome to my Portfolio, my name is <strong>Jugurta Maouchi</strong>
            I'm half frensh and half Algerian, I live at the USA since 2019.
            I came to explore the American dream, and for me the dream is to be a web developer 
            I do have a bachelor degree in biology. well yeah its way different from what I'm trying to learn but 
            the first time i knew about coding, i felt in love with it &#128513;.
            I can speak 5 languages: french, arabic, Berber, English and a little of Spanish
            
          </p>
        </div>  

        <div class="about-me-context">
          <h4>What are my favorits hobbies</h4>
          <p>
            I use to do boxing back at home with my brother, since he is an MMA boxer i try to learn from 
            him, but now i just train by myself since he is not here.
            I also use to play soccer with a team and I really miss them a lot.
            I can beatbox and can play guitar a little.
            I also love to travel, I've been in Germany, France, Algeria, morocco, Italy, Spain and also here at the USA i went to New York,                                                                                            
            Philadelphia, New Jersey, Austin, Houston, San Antonio, Dallas...
          </p>
        </div>

        <div class="about-me-context">
          <h4>Why Im Here For</h4>
          <p>I'm here to show you most of my recent work, some of them are projects that I've built on my own, 
            and some others are projects that I've learned by watching videos and   tried to build something simular without watching the code.       
            tired to do the same on my own.
            well yea it was hard for me to build them but I'm proud of what I did.
            please check them out bellow. <span class="bellow">👇</span> 
          </p>
        </div>  

      </div>

    </div>

  </section>
  )
}

export default About