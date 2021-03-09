import React from "react";

//Components
import FooterTest from "./components/FooterTest";

//Pages
import Home from "./pages/Home";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App2() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <FooterTest />
    </Router>
  );
}

export default App2;
