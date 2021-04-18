import React from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./lux.css";
import "./index.css";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";


function App() {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Portfolio}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Portfolio></Portfolio>
                    <Projects></Projects>
                </Switch>
            </div>
        </Router>

    )
}

export default App;
