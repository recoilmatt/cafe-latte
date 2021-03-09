import React from "react";

//Components
import Home from "./pages/Home";

import FooterTest from "./components/FooterTest";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <FooterTest />
    </Router>
  );
}

export default App;
