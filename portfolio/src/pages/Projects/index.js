import React from "react"; 

//, { useState, useEffect } 
// import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Projects2 from "../Projects/support";

// import Project from "../../components/Project";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from "../../components/Container";
// import SearchForm from "../../components/SearchForm";
// import SearchResults from "../../components/SearchResults";
// import Alert from "../../components/Alert";

function Projects(props) {
  return (
    <div>
    <Header/>
    <Projects2/>
    <Footer/>
    </div>
  );
}

export default Projects;