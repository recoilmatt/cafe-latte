import React from "react";

//Components
import Home from "./pages/Home";

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
            <FooterTest />
          </Scrollbars>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
