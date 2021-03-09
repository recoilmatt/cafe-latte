import React from "react";

//AuthProvider
import { AuthProvider } from "./contexts/AuthContext";

//DataProvider
import DataProvider from "./components/DataProvider";

//Components

import FooterTest from "./components/FooterTest";

//Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LocationsSection from "./pages/LocationsSection";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/products/:id" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/menu" component={Menu} />
            <Route path="/locations" component={LocationsSection} />
          </Switch>

          <FooterTest />
        </Router>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
