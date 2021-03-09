import React from "react";

//Components
import FooterTest from "./components/FooterTest";

//Pages
import Menu from "./pages/Menu";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css Transition

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Menu} />
      </Switch>

      <FooterTest />
    </Router>
  );
}

export default App;
