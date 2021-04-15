import React from "react"; //, { useState, useEffect } 
// import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import About from "../../components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../../components/Contact";
// import Container from "../../components/Container";
// import SearchForm from "../../components/SearchForm";
// import SearchResults from "../../components/SearchResults";
// import Alert from "../../components/Alert";

function Portfolio(props) {
  return (
    <div>
    <Header/>
    <About/>
    <Contact/>
    <Project/>
    <Footer/>
    </div>
  );
}

export default Portfolio;