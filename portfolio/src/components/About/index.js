import React from "react";

function About(props) {
  return (
  // About James
      <div class="row m-3 d-flex justify-content-start"> 
          <h2 id="about">About James</h2>
          <div class='col-11 flex-right headshot' src="./Assets/img/James_Pro_Headshot.png" > 
            <img class='col-11 flex-right m-3 ml-3 myheadshot' alt='James Headshot'>  </img>
          </div> 
        
          <p class='col-11 flex-right m-3 ml-3'> After 5 years in data analysis, I'm more than ready to build web-powered apps and reports. Get piercing insights, effort-saving automations, and powerful tools in your hands with me on the team! </p>
      </div>
  );
}

export default About;
