import React from "react";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
const routes = {
  "/": () => <Portfolio />,
  "/portfolio": () => <Portfolio />,
  "/projects": () => <Projects />
};

export default routes;