import React from 'react'
import './style.css'

function Work() {
  return (
    <>
    <section id="work" class="section-three">

      <div class="flex">
        <div class="border"></div>
        <h3>My<span style={{ color:"black" }}>Work</span></h3>
        <div class="border"></div>
      </div>

      <div class="section-three-content-wrap">

        <div class="col run-buddy">
          <div class="run-buddy-content">
            <h4>Run Buddy Website</h4>
            <p>this poroject made by me 2020, while learing HTML5, CSS</p>
            <button class="btn"><a href="https://jmaouchi.github.io/Run-Buddy-Project-/">check it out here</a></button>
          </div>  
        </div>

        <div class="col video-gallery">
          <h4>Video gallery Website</h4>
          <p>This is built by me 2022 while learning JavaScript</p>
          <button class="btn"><a href="https://jmaouchi.github.io/Video-gallery/">check it out here</a></button>
        </div>

        <div class="col todo-list">
          <h4>My ToDo List</h4>
          <p>this is a ToDo list built by me with HTML5, CSS and JavaScript in 2021.</p>
          <button class="btn"><a href="https://jmaouchi.github.io/ToDo-List-JavaScript/">check it out here</a></button>
        </div>

        <div class="col coffee-website">
          <h4>Coffee shop</h4>
          <p>Best coffee website</p>
          <button class="btn"><a href="https://global-coffee-shop.herokuapp.com/">check it out here</a></button>
        </div>

        <div class="col task-list">
          <h4>Task List</h4>
          <p>this project was built by me whith someone else idea!</p>
          <button class="btn"><a href="https://jmaouchi.github.io/Task-List-/">check it out here</a></button>
        </div>

        <div class="col color-changing">
          <h4>Color Change</h4>
          <p>this project built by me while learing JavaScript</p>
          <button class="btn"><a href="https://jmaouchi.github.io/changing-color-JavaScript-project-/">check it out here</a></button>
        </div>

        <div class="col scheduler">
          <h4>Schaduler</h4>
          <p>Scheduler that can allow you add todo's</p>
          <button class="btn"><a href="https://jmaouchi.github.io/Work-Day-Scheduler/">check it out here</a></button>
        </div>

        <div class="col weather-recipe">
          <h4>Weather Recipe</h4>
          <p>Build by fetching weather and recipe API's</p>
          <button class="btn"><a href="https://sipg789.github.io/hestia/index.html">check it out here</a></button>
        </div>


      </div>  

      </section>
    </>
  )
}

export default Work