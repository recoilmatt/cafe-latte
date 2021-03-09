import React from "react";

//Components
import Home from "./pages/Home";
/* import Header from "./components/Header"; */
/* import Footer from "./Footer"; */
import FooterTest from "./components/FooterTest";

//Pages
import Menu from "./pages/Menu";
import LocationsSection from "./pages/LocationsSection";
import Details from "./pages/Details";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Scrollbars
import { Scrollbars } from "react-custom-scrollbars";

//Css Transition

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Switch>
          <Route path="/" component={Home} />

          <Route path="/products/:id" component={Details} />

          <Route path="/menu" component={Menu} />
          <Route path="/locations" component={LocationsSection} />
        </Switch>

        <FooterTest />
      </Scrollbars>
    </Router>
  );
}

export default App;
