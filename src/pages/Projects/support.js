import React, { Component } from "react";

import covidIMG from "../../assets/img/covid-website-snip.png";  
import pokeballerIMG from "../../assets/img/PokeballerPic.png";  
import eeDbPopulatorIMG from "../../assets/img/employee_DB_PopulatorVS_Code_Preview.png";
import generateTeamIMG from "../../assets/img/Generated_Team_Webpage.png";
import readmePreviewIMG from "../../assets/img/README_Preview.png";
import userDirectoryIMG from "../../assets/img/Employee_Directory.gif";  

class Projects2 extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      projects: [
        {
          id: 1,
          order: 1,
          project_name: "COVID Correlation Console",
          react_img_import_name: covidIMG,  
          img_alt_tag: "COVID Website",
          live_demo_link:
            "https://codewarrior-debug.github.io/covid-correlation-console/",
          repository_link:
            "https://github.com/CodeWarrior-debug/covid-correlation-console",
          work_desc:
            "On this project I was responsible for the JavaScript & involved with API research and team leadership.",
        },
        {
          id: 2,
          order: 2,
          project_name: "PokeBaller: Card Inventory Organizer",
          react_img_import_name: pokeballerIMG,
          img_alt_tag: "PokeBaller",
          live_demo_link: "https://evening-oasis-15758.herokuapp.com/",
          repository_link: "https://github.com/CodeWarrior-debug/PokeBaller",
          work_desc:
            "For PokeBaller I peer-programmed the JavaScript & was responsible for the database npm Sequelize extraction & input queries.",
        },
        {
          id: 3,
          order: 3,
          project_name: "Employee Tracker",
          react_img_import_name: eeDbPopulatorIMG,
          img_alt_tag: "Employee Tracker",
          live_demo_link:
            "https://drive.google.com/file/d/1XBDCulLuOQ6JXPLJkubmtMyduErEvtP3/view?usp=sharing",
          repository_link:
            "https://github.com/CodeWarrior-debug/hw12-track-employees-sql-db-style",
          work_desc:
            "Employee Tracker can populate new employees and adjust their salaries, roles, etc. Check out the advanced SQL query selecting the manager name.",
        },
        {
          id: 4,
          order: 4,
          project_name: "Team Generator",
          react_img_import_name: generateTeamIMG,
          img_alt_tag: "Generate Team Page",
          live_demo_link:
            "https://github.com/CodeWarrior-debug/hw10-team-profile-populator/blob/main/lib/img/Video%20Of%20Team%20Page%20Maker.mp4",
          repository_link:
            "https://github.com/CodeWarrior-debug/hw10-team-profile-populator",
          work_desc:
            "This solo-project shows skill with presenting information and npm packages.",
        },
        {
          id: 5,
          order: 5,
          project_name: "Automatic READMEs",
          react_img_import_name: readmePreviewIMG,
          img_alt_tag: "README Preview",
          live_demo_link:
            "https://drive.google.com/file/d/1Awv5uqa4xtxKLN6U4VD8B3KrhOnEFsj0/view?usp=sharing",
          repository_link:
            "https://github.com/CodeWarrior-debug/hw9-so-automatic-readme-node.js",
          work_desc:
            "This solo-project shows skill with Node.js & the inquirer package.",
        },
        {
          id: 6,
          order: 6,
          project_name: "React User Directory",
          react_img_import_name: userDirectoryIMG,
          img_alt_tag: "User Directory",
          live_demo_link:
            "https://codewarrior-debug.github.io/Reactive_Employee_Directory/",
          repository_link:
            "https://github.com/CodeWarrior-debug/Reactive_Employee_Directory",
          work_desc:
            "This employee directory using react brings your employee lookups into a modern, responsive look.",
        },
      ],
    };
  }

  renderProjectsData() {
    return this.state.projects.map((project, index) => {
      const {
        id,
        project_name,
        react_img_import_name,
        img_alt_tag,
        live_demo_link,
        repository_link,
        work_desc,
      } = project; //destructuring
      return (  //return in proper format
        <div key={id}>
          <div class="row col-11 mgl-sm">
            <p class="big-work-title m-3 mt-1">{project_name}</p>
            <img
              class="big-pic border"
              src={react_img_import_name}  //TODO NOT Working
              alt={img_alt_tag}
            ></img>
            <div class="col-11 flex-right pt-1">
              <p class="col-5">
                <a href={live_demo_link}>Try Live or See Demo</a>
              </p>
              <p class="col-5">
                <a href={repository_link}>See the Repo of Code</a>
              </p>
              <p class="col-8 work-desc">{work_desc} </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProjectsData()}</div>;
  }
}

export default Projects2;
