import React from "react";
import covid_snip from '../../../src/assets/img/covid-website-snip.png';

function Project() {
  return (
    // Work Product
    <div class='row m-3'>
        <h2 id='work'>Work Product</h2>
        <p class='big-work-title m-3 mt-5'>COVID Correlation Console</p>
        <img class='big-pic border' src={covid_snip} alt="COVID Website"></img>
        <div class="row col-11 mgl-sm"> 

          
              <div class='col-11 flex-right pt-1'> 
                  <p class='col-5'><a href="https://codewarrior-debug.github.io/covid-correlation-console/">WebApp</a></p>
                  <p class='col-5'><a href="https://github.com/CodeWarrior-debug/covid-correlation-console">GitHub Repo</a></p>
              </div>

        <p class='col-8 work-desc'>On this project, I was responsible for the JavaScript & involved with API research and team leadership.</p>
        </div>
        </div>
  );
}

export default Project;
