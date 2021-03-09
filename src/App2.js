import React from "react";

//Components
import Home from "./pages/Home";
import HeaderTest from "./components/HeaderTest";

/* import Footer from "./Footer"; */
import FooterTest from "./components/FooterTest";

//Pages
import Menu from "./pages/Menu";
import LocationsSection from "./pages/LocationsSection";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//DataProvider
import DataProvider from "./components/DataProvider";

//Scrollbars
import { Scrollbars } from "react-custom-scrollbars";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <HeaderTest />
        <Switch>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{ width: "100vw", height: "100vh" }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/locations" component={LocationsSection} />
          </Scrollbars>
          <FooterTest />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
