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
import Cart from "./pages/Cart";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Auth Pages
import Signup from "./auth/Signup";
import Dashboard from "./auth/Dashboard";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";

//DataProvider
import DataProvider from "./components/DataProvider";

//Scrollbars
import { Scrollbars } from "react-custom-scrollbars";

//Css Transition
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/products/:id" component={Details} />

            <Route path="/menu" component={Menu} />
            <Route path="/locations" component={LocationsSection} />
          </Switch>

          <FooterTest />
        </Scrollbars>
      </Router>
    </DataProvider>
  );
}

export default App;
