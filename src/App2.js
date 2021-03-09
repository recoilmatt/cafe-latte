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

//React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

//Context
import { AuthProvider } from "./contexts/AuthContext";

//Auth Pages
import Signup from "./auth/Signup";

import Login from "./auth/Login";

import ForgotPassword from "./auth/ForgotPassword";

//DataProvider
import DataProvider from "./components/DataProvider";

//Scrollbars
import { Scrollbars } from "react-custom-scrollbars";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Css Transition
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={0}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/menu" component={Menu} />
        <Route path="/locations" component={LocationsSection} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/products/:id" component={Details} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App2() {
  return (
    <DataProvider>
      <Router>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: "100vw", height: "100vh" }}
        >
          <AuthProvider>
            <Header />
            <AnimatedSwitch />
            <FooterTest />
          </AuthProvider>
        </Scrollbars>
      </Router>
    </DataProvider>
  );
}

export default App2;
