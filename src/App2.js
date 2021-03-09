import React from "react";

//Components
import Home from "./pages/Home";
import Header from "./components/Header";
/* import Footer from "./Footer"; */
import FooterTest from "./components/FooterTest";

//Pages
import Menu from "./pages/Menu";
import LocationsSection from "./pages/LocationsSection";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

//Context
import { AuthProvider } from "./contexts/AuthContext";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//DataProvider
import DataProvider from "./components/DataProvider";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Header />
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
